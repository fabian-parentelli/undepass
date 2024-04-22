import * as evenetService from '../services/evenet.service.js';
import { EventNotFound } from '../utils/custom-exceptions.utils.js';

const newEventInfo = async (req, res) => {
    try {
        const result = await evenetService.newEventInfo({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await evenetService.getById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAllEvents = async (req, res) => {
    const { limit = 20, page = 1, category, active, tickets, location } = req.query;
    try {
        const result = await evenetService.getAllEvents(limit, page, category, active, tickets, location);
        if (result) return res.sendSuccess(result);
    } catch (error) {

        console.log(error); //Borrar <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updPreset = async (req, res) => {
    try {
        const result = await evenetService.updPreset({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updFlyer = async (req, res) => {
    const { id } = req.params;
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await evenetService.updFlyer(imagesUrl, id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updTickes = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await evenetService.updTickes([...req.body], id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const checkOut = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await evenetService.checkOut({ ...req.body }, id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newEventInfo, getById, getAllEvents, updPreset, updFlyer, updTickes, checkOut };