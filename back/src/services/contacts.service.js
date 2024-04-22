import { contactRepository } from "../repositories/index.repositories.js";
import { ContactNotFound } from '../utils/custom-exceptions.utils.js';
import { sendEmail } from './email.service.js';
import { responseContact_HTML } from '../utils/html/responseContact.utils.js';
import moment from 'moment';

const responseContact = async (contact) => {
    contact.date = moment().local().format('DD-MM-YYYY HH:mm');
    const result = await contactRepository.responseContact(contact);
    if (!result) throw new ContactNotFound('No se puede enviar el mensaje');
    const emailTo = {
        to: result.email,
        subject: result.affair,
        html: await responseContact_HTML(result)
    };
    await sendEmail(emailTo);
    if (contact.reqId) {
        const request = await contactRepository.getContactById(contact.reqId);
        request.responseId = result._id;
        request.active = !request.active;
        await contactRepository.update(request);
    };
    return { status: 'success' };
};

const newContact = async (contact) => {
    contact.date = moment().local().format('DD-MM-YYYY HH:mm');
    delete contact.id;
    const result = await contactRepository.newContact(contact);
    if (!result) throw new ContactNotFound('No se puede guardar el mensaje');
    return { status: 'success' };
};

const getAmount = async () => {
    const result = await contactRepository.getAmount();
    const isContact = result.length;
    return { contact: isContact };
};

const getContactById = async (id) => {
    const result = await contactRepository.getContactById(id);
    if (!result) throw new ContactNotFound('No se encuentra el Correo');
    return { status: 'success', result };
};

const getAllContacts = async () => {
    const result = await contactRepository.getAmount();
    if (!result) return { status: 'error', error: 'No hay mensajes' };
    return { status: 'success', result };
};

const updActive = async (id) => {
    const contact = await contactRepository.getContactById(id);
    if (!contact) throw new ContactNotFound('No se puede encontrar el msj en la base de datos');
    contact.active = !contact.active;
    const result = await contactRepository.update(contact);
    if (!result) throw new ContactNotFound('No se puede actualizar la base de datos');
    return { status: 'success', result };
};

export { newContact, getAmount, getAllContacts, updActive, getContactById, responseContact };