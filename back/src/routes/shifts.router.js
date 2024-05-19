import Router from './routes.js';
import * as shiftController from '../controllers/shifts.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class ShiftRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN'], passportEnum.JWT, shiftController.newShift);
    };
};