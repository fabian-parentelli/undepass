import Router from './routes.js';
import * as userFinanController from '../controllers/userFinans.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class UserFinanRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN'], passportEnum.JWT, userFinanController.newUserFinan);
        this.get('/:id', ['ADMIN'], passportEnum.JWT, userFinanController.getFinanById);
        this.get('/', ['USER', 'ADMIN'], passportEnum.JWT, userFinanController.getByUserId);
        this.put('/', ['USER', 'ADMIN'], passportEnum.JWT, userFinanController.updateUserFinan);
    };
};