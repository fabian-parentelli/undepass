import { contactModel } from '../models/contact.model.js';
import { contactRespModel } from '../models/contactResp.model.js';

export default class Contact {

    responseContact = async (contact) => {
        return await contactRespModel.create(contact);
    };

    newContact = async (contact) => {
        return await contactModel.create(contact);
    };

    getAmount = async () => {
        return await contactModel.find({ active: true });
    };

    getContactById = async (id) => {
        return await contactModel.findById(id).lean();
    };

    update = async (contact) => {
        return await contactModel.findByIdAndUpdate({ _id: contact._id }, contact, { new: true }).lean();
    };

};