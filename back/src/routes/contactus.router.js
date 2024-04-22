import Router from './routes.js';
import * as contactController from '../controllers/contact.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class ContactRouter extends Router {
    init() {
        this.post('/send', ['ADMIN'], passportEnum.JWT, contactController.responseContact);
        this.post('/', ['PUBLIC'], passportEnum.NOTHING, contactController.newContact);
        this.get('/amount', ['ADMIN'], passportEnum.JWT, contactController.getAmount);
        this.get('/:id', ['ADMIN'], passportEnum.JWT, contactController.getContactById);
        this.get('/', ['ADMIN'], passportEnum.JWT, contactController.getAllContacts);
        this.put('/:id', ['ADMIN'], passportEnum.JWT, contactController.updActive);
    };
};