import * as evenetService from '../services/evenet.service.js';
import { EventNotFound } from '../utils/custom-exceptions.utils.js';
import schedule from 'node-schedule';

const newEventInfo = async (req, res) => {
    try {
        const result = await evenetService.newEventInfo({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getCitys = async (req, res) => {
    try {
        const result = await evenetService.getCitys();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const searchEvent = async (req, res) => {
    const { name } = req.params;
    try {
        const result = await evenetService.searchEvent(name);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const isPrivate = async (req, res) => {
    const { id, pass } = req.params;
    try {
        const result = await evenetService.isPrivate(id, pass);
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
    const { limit = 12, page = 1, category, active, tickets, location, userid } = req.query;
    try {
        const result = await evenetService.getAllEvents(limit, page, category, active, tickets, location, userid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
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

const active = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await evenetService.active(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const intervalId = schedule.scheduleJob('0 22 * * *', async () => {
    try {
        await evenetService.singleUpdate();
    } catch (error) {
        console.error('Error al actualizar eventos:', error.message);
    };
});

export {
    newEventInfo, getCitys, getById, searchEvent, getAllEvents,
    updPreset, updFlyer, updTickes, checkOut, active, isPrivate
};