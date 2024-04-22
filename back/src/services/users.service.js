import { userRepository } from "../repositories/index.repositories.js";
import { UserNotFound } from '../utils/custom-exceptions.utils.js';
import { createHash, isValidPassword } from '../utils/hashedPassword.utils.js';
import { getProvince, getParties } from "./cities.service.js";
import { registerSuccess } from '../utils/html/registerSuccess.utils.js';
import { recoverPassword_HTML } from '../utils/html/recoverPassword.utils.js';
import { sendEmail } from './email.service.js';
import { generateToken, passwordToken } from '../utils/jwt.utils.js';
import { v4 as uuidv4 } from 'uuid';
import { avatarRepository } from "../repositories/index.repositories.js";

const register = async (user) => {
    const exists = await userRepository.getByEmail(user.email);
    if (exists) throw new UserNotFound('El usuario ya se encuentra registrado');
    user.password = createHash(user.password);
    user.location.province = await getProvince(user.location.province);
    user.location.municipality = await getParties(user.location.municipality);
    user.avatar = ['https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711654148/assets/default.png'];
    const result = await userRepository.register(user);
    if (!result) throw new UserNotFound('No se puede registrar al usuario');
    const newUser = { ...result };
    delete newUser._doc.password;
    const emailTo = {
        to: user.email,
        subject: 'Registro exitoso',
        html: await registerSuccess(newUser._doc)
    };
    await sendEmail(emailTo);
    return { status: 'success', payload: newUser._doc };
};

const login = async (user) => {
    const userDb = await userRepository.getByEmail(user.email);
    if (!userDb) throw new UserNotFound('El Usuario no se encuentra');
    const comparePassword = isValidPassword(userDb, user.password);
    if (!comparePassword) throw new UserNotFound('La contraseña es incorrecta');
    if (!userDb.active) throw new UserNotFound('Error de permisos, comunícate con nosotros');
    delete userDb.password;
    if (userDb.financeData) userDb.financeData = true;
    const accesToken = generateToken(userDb);
    return { status: 'success', accesToken };
};

const recoverPassword = async ({ email }) => {
    const user = await userRepository.getByEmail(email);
    if (!user) throw new UserNotFound('Email incorrecto');
    user.passId = uuidv4();
    await userRepository.update(user);
    user.recoverPassword = `http://localhost:8082/api/user/inter_pass/${user.passId}`;
    const emailTo = {
        to: user.email,
        subject: 'Recuperar contraseña',
        html: await recoverPassword_HTML(user.recoverPassword)
    };
    await sendEmail(emailTo);
    return { status: 'success' };
};

const upUserFile = async (imgUrl, { user }, id) => {
    const idData = id === 'undefined' ? user._id : id;
    const userDb = await userRepository.getById(idData);
    if (!user) throw new UserNotFound('Usuario no encontrado');
    userDb.avatar.unshift(imgUrl[0]);
    const result = await userRepository.update(userDb);
    if (!result) throw new UserNotFound('No se puede modificar los datos del usuario');
    if (result.passId) delete result.passId;
    if (result.password) delete result.password;
    if (result.financeData) delete result.financeData;
    if (user.role === 'admin') return { status: 'success' };
    const accesToken = generateToken(result);
    return { status: 'success', accesToken };
};

const interPass = async (id) => {
    const user = await userRepository.getByIdPass(id);
    if (!user) throw new UserNotFound('Usuario no encontrado');
    const tokenPass = passwordToken(user.email);
    const url = `http://localhost:5173/password/${tokenPass}`;
    return url;
};

const look = async (name) => {
    const result = await userRepository.look(name);
    if (!result) throw new UserNotFound('No se encuentran los productos');
    return { status: 'success', result };
};

const newPassword = async ({ password: newPassword }, { user: email }) => {
    const user = await userRepository.getByEmail(email);
    if (!user) throw new UserNotFound('usuario no encontrado');
    const comparePassword = isValidPassword(user, newPassword);
    if (comparePassword) throw new UserNotFound('No es valida es contraseña');
    const hasPass = createHash(newPassword);
    user.password = hasPass;
    user.passId = '';
    const result = await userRepository.update(user);
    if (!result) throw new UserNotFound('La contraseña nueva no se puede guardar');
    delete user.password;
    if (user.passId) delete user.passId;
    if (user.financeData) delete user.financeData;
    return { status: 'success', user };
};

const updateUser = async (data, id, { user }) => {
    const userDb = await userRepository.getById(id);
    if (!userDb) throw new UserNotFound('El usuario no se encuentra');
    const userUpdate = { ...userDb, ...data };
    const result = await userRepository.update(userUpdate);
    if (!result) throw new UserNotFound('No se puede modificar los datos del usuario');
    if (result.passId) delete result.passId;
    if (result.password) delete result.password;
    if (result.financeData) delete result.financeData;
    if (user.role === 'admin') return { status: 'success', result };
    const accesToken = generateToken(result);
    return { status: 'success', accesToken };
};

const current =  (user) => {
    const newUser = { ...user };
    delete newUser.user.passId;
    return newUser;
};

const getAmount = async () => {
    const count = await userRepository.getAmount();
    if (!count) { return 0 };
    const user = count - 1;
    return { status: 'success', user };
};

const getNameId = async () => {
    const users = await userRepository.getAll();
    if (!users) throw new UserNotFound('Usuario no encontrado');
    const result = users.map((us) => ({ name: us.name, id: us._id }));
    result.splice(0, 1);
    return { status: 'success', result };
};

const getUserById = async (id) => {
    const result = await userRepository.getById(id);
    if (!result) throw new UserNotFound('No se encuentra al usuario');
    delete result.password;
    return { status: 'success', result };
};

const getAllUsers = async (limit, page) => {
    const users = await userRepository.getAllUsers(limit, page);
    if (!users) throw new UserNotFound('No se encuentran los Usuarios');
    return { status: 'success', users };
};

const updateActive = async (id) => {
    const userDb = await userRepository.getById(id);
    if (!userDb) throw new UserNotFound('No se encuentra el usuario');
    userDb.active = !userDb.active;
    const result = await userRepository.update(userDb);
    if (!result) throw new UserNotFound('No se puede actualizar el Usuario');
    return { status: 'success' };
};

const updUserAvatar = async (data, { user }, userId) => {
    const idUser = userId === 'undefined' ? user._id : userId;
    const { id } = data;
    const userDb = await userRepository.getById(idUser);
    if (!userDb) throw new UserNotFound('El usuario no se encuentra');
    const avatar = await avatarRepository.getAvatarById(id);
    const index = userDb.avatar.findIndex((avt) => avatar.avatarUrl == avt);
    if (index >= 0) userDb.avatar.splice(index, 1);
    userDb.avatar.unshift(avatar.avatarUrl);
    const result = await userRepository.update(userDb);
    if (!result) throw new UserNotFound('No se puede modificar los datos del usuario');
    if (result.passId) delete result.passId;
    if (result.password) delete result.password;
    if (result.financeData) delete result.financeData;
    if (user.role === 'admin') return { status: 'success' };
    const accesToken = generateToken(result);
    return { status: 'success', accesToken };
};

const oldAvatar = async ({ avat }, { user }, id) => {
    const idData = id === 'undefined' ? user._id : id;
    const userDb = await userRepository.getById(idData);
    if (!userDb) throw new UserNotFound('El usuario no es encontrado');
    const index = userDb.avatar.findIndex((avt) => avat == avt);
    if (index != -1) userDb.avatar.splice(index, 1);
    userDb.avatar.unshift(avat);
    const result = await userRepository.update(userDb);
    if (!result) throw new UserNotFound('No se puede actualizar el usuario');
    if (result.password) delete result.password;
    if (result.passId) delete result.passId;
    if (result.financeData) delete result.financeData;
    if (user.role === 'admin') return { status: 'success' };
    const accesToken = generateToken(result);
    return { status: 'success', accesToken };
};

export {
    register, login, recoverPassword, interPass, newPassword,
    updateUser, current, updUserAvatar, upUserFile, oldAvatar, getAllUsers,
    getAmount, updateActive, getUserById, getNameId, look
};