import { userFinanRepository } from "../repositories/index.repositories.js";
import { UserFinanNotFound } from '../utils/custom-exceptions.utils.js';
import { userRepository } from "../repositories/index.repositories.js";


const newUserFinan = async (data) => {
    const { holder, cuit, bank, account, cbu, userId } = data;
    if (!holder || !cuit || !bank || !account || !cbu || !userId) data.active = false;
    else data.active = true;
    const userExist = await userRepository.getById(data.userId);
    if (!userExist) throw new UserFinanNotFound('El usuario no coincide con el id de su perfil');
    const result = await userFinanRepository.newUserFinan(data);
    userExist.financeData = result._id;
    await userRepository.update(userExist);
    if (!result) throw new UserFinanNotFound('No se puede almacenar la nueva información');
    return { status: 'success', result };
};

const getByUserId = async ({ user }) => {
    const userDb = await userRepository.getById(user._id);
    if (!userDb.financeData) return { status: 'clean' };
    const financeData = await userFinanRepository.getById(userDb.financeData);
    if (!financeData) throw new UserFinanNotFound('No se puede acceder a la base de Datos');
    return { status: 'success', financeData };
};

const updateUserFinan = async (data) => {
    const userDb = await userRepository.getById(data.userId);
    if (!userDb) throw new UserFinanNotFound('No se encuentra el usuario en la base de datos');
    if (!userDb.financeData) {
        delete data._id;
        await newUserFinan(data);
        return { status: 'success' };
    };
    const financeData = await userFinanRepository.getById(userDb.financeData);
    const newFinanceData = { ...financeData, ...data };
    const result = await userFinanRepository.update(newFinanceData);
    if (!result) throw new UserFinanNotFound('No se puede actualizar los datos financieros');
    return { status: 'success' };
};

const getFinanById = async (id) => {
    const financeData = await userFinanRepository.getById(id);
    if (!financeData) throw new UserFinanNotFound('No se encuentran los datos financieros');
    return { status: 'success', financeData };
};

export { newUserFinan, getByUserId, updateUserFinan, getFinanById };