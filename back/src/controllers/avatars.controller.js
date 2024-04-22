import * as avatarService from '../services/avatars.service.js';
import { AvatarNotFound } from '../utils/custom-exceptions.utils.js';

const newEvent = async (req, res) => {
    const images = req.files;
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await avatarService.newEvent(images, imagesUrl, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AvatarNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newAvatar = async (req, res) => {
    const images = req.files;
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await avatarService.newAvatar(images, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AvatarNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getEvents = async (req, res) => {
    try {
        const result = await avatarService.getEvents();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AvatarNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const vewAvatar = async (req, res) => {
    try {
        const result = await avatarService.vewAvatar();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AvatarNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updateActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await avatarService.updateActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AvatarNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newEvent, newAvatar, getEvents, vewAvatar, updateActive };