import Router from './routes.js';
import * as cityController from '../controllers/cities.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class CityRouter extends Router {
    init() {
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, cityController.provinces);
        this.get('/province/:id', ['PUBLIC'], passportEnum.NOTHING, cityController.town);
        this.get('/twon/:tid/province/:pid', ['PUBLIC'], passportEnum.NOTHING, cityController.parties);
        this.post('/coordinates', ['PUBLIC'], passportEnum.NOTHING, cityController.coordinates);
        this.post('/coordsearch', ['PUBLIC'], passportEnum.NOTHING, cityController.coordSearch);
    };
};