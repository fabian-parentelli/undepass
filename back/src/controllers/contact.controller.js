import * as contactService from '../services/contacts.service.js';
import { ContactNotFound } from '../utils/custom-exceptions.utils.js';

const responseContact = async (req, res) => {
    try {
        const result = await contactService.responseContact({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ContactRespNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newContact = async (req, res) => {
    try {
        const result = await contactService.newContact({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ContactNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};


const getAmount = async (req, res) => {
    try {
        const result = await contactService.getAmount({ ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ContactNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getContactById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await contactService.getContactById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ContactNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAllContacts = async (req, res) => {
    try {
        const result = await contactService.getAllContacts();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ContactNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await contactService.updActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ContactNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newContact, getAmount, getAllContacts, updActive, getContactById, responseContact };