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

        console.log(error);

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

const update = async (req, res) => {
    try {
        const result = await siteService.update({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SiteNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newSite, postImg, getByUserId, update };