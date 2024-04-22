import * as userFinanService from '../services/userFinans.service.js';
import { UserFinanNotFound } from '../utils/custom-exceptions.utils.js';

const newUserFinan = async (req, res) => {
    try {
        const result = await userFinanService.newUserFinan({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserFinanNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByUserId = async (req, res) => {
    try {
        const result = await userFinanService.getByUserId({ ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserFinanNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updateUserFinan = async (req, res) => {
    try {
        const result = await userFinanService.updateUserFinan({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserFinanNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getFinanById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userFinanService.getFinanById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserFinanNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newUserFinan, getByUserId, updateUserFinan, getFinanById };