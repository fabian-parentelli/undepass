import * as cityService from '../services/cities.service.js';
import { CityNotFound } from '../utils/custom-exceptions.utils.js';

const provinces = async (req, res) => {
    try {
        const result = await cityService.provinces();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const town = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await cityService.town(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const parties = async (req, res) => {
    const { tid, pid } = req.params;
    try {
        const result = await cityService.parties(tid, pid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const coordinates = async (req, res) => {
    try {
        const result = await cityService.coordinates({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const coordSearch = async (req, res) => {
    try {
        const result = await cityService.coordSearch({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CityNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { provinces, parties, town, coordinates, coordSearch };