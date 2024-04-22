import * as userService from '../services/users.service.js';
import { UserNotFound } from '../utils/custom-exceptions.utils.js';

const register = async (req, res) => {
    try {
        const result = await userService.register({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const login = async (req, res) => {
    try {
        const result = await userService.login({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const recoverPassword = async (req, res) => {
    try {
        const result = await userService.recoverPassword({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const upUserFile = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    const { id } = req.params;
    try {
        const result = await userService.upUserFile(imagesUrl, { ...req.user }, id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const interPass = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.interPass(id);
        res.redirect(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const look = async (req, res) => {
    const { name } = req.params;
    try {
        const result = await userService.look(name);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newPassword = async (req, res) => {
    try {
        const result = await userService.newPassword({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.updateUser({ ...req.body }, id, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const current = async (req, res) => {
    try {
        const result = await userService.current({ ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAmount = async (req, res) => {
    try {
        const result = await userService.getAmount();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getNameId = async (req, res) => {
    try {
        const result = await userService.getNameId();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.getUserById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAllUsers = async (req, res) => {
    const { limit = 12, page = 1 } = req.query;
    try {
        const result = await userService.getAllUsers(limit, page);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updUserAvatar = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await userService.updUserAvatar({ ...req.body }, { ...req.user }, userId);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updateActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.updateActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const oldAvatar = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.oldAvatar({ ...req.body }, { ...req.user }, id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export {
    register, login, recoverPassword, interPass, newPassword,
    updateUser, current, updUserAvatar, upUserFile, oldAvatar, getAllUsers,
    getAmount, updateActive, getUserById, getNameId, look
};