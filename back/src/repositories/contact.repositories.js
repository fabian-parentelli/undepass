import { contactManager } from '../dao/manager/index.manager.js';

export default class ContactRepository {

    responseContact = async (contact) => {
        const result = await contactManager.responseContact(contact);
        return result;
    };

    newContact = async (contact) => {
        const result = await contactManager.newContact(contact);
        return result;
    };

    getAmount = async () => {
        const result = await contactManager.getAmount();
        return result;
    };

    getContactById = async (id) => {
        const result = await contactManager.getContactById(id)
        return result;
    };

    update = async (contact) => {
        const result = await contactManager.update(contact);
        return result;
    };
    
};