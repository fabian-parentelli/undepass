import * as siteService from '../services/sites.service.js';
import { SiteNotFound } from '../utils/custom-exceptions.utils.js';

const newSite = async (req, res) => {
    try {
        const result = await siteService.newSite({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SiteNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const postImg = async (req, res) => {
    const images = req.files;
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await siteService.postImg(images, imagesUrl, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SiteNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const countSites = async (req, res) => {
    try {
        const result = await siteService.countSites();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SiteNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByUrl = async (req, res) => {
    const { url } = req.params;
    try {
        const result = await siteService.getByUrl(url);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SiteNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await siteService.getByUserId(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SiteNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAll = async (req, res) => {
    const { limit = 2, page = 1, random } = req.query;
    try {
        const result = await siteService.getAll(limit, page, random);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SiteNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const update = async (req, res) => {
    try {
        const result = await siteService.update({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SiteNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const addVideo = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await siteService.addVideo(id, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SiteNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newSite, postImg, countSites, getByUrl, getByUserId, getAll, update, addVideo };