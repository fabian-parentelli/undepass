import * as productService from '../services/products.service.js';
import { ProductNotFound } from '../utils/custom-exceptions.utils.js';

const newProduct = async (req, res) => {
    const images = req.files;
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await productService.newProduct(images, imagesUrl, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await productService.getByUserId(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getCounter = async (req, res) => {
    try {
        const result = await productService.getCounter();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await productService.getById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAll = async (req, res) => {
    const { limit = 12, page = 1, random } = req.query;
    try {
        const result = await productService.getAll(limit, page, random);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updInSite = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await productService.updInSite(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newProduct, getByUserId, getAll, updInSite, getCounter, getById };