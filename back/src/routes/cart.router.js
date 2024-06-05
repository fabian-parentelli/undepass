import Router from './routes.js';
import * as cartController from '../controllers/cart.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class CartRouter extends Router {
    init() {
        this.post('/data', ['PUBLIC'], passportEnum.NOTHING, cartController.getData);
    };
};