import Router from './routes.js';
import * as eventController from '../controllers/events.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js';
import { uploadToCloudinary } from '../config/cloudinaryAvatar.conf.js';

export default class EventRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN'], passportEnum.JWT, eventController.newEventInfo);
        this.get('/citys', ['PUBLIC'], passportEnum.NOTHING, eventController.getCitys);
        this.get('/quantity', ['PUBLIC'], passportEnum.NOTHING, eventController.getQuantity);
        this.get('/search/:name', ['PUBLIC'], passportEnum.NOTHING, eventController.searchEvent);
        this.get('/ev/:id/isprivate/:pass', ['PUBLIC'], passportEnum.NOTHING, eventController.isPrivate);
        this.get('/:id', ['PUBLIC'], passportEnum.NOTHING, eventController.getById);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, eventController.getAllEvents);
        this.put('/preset', ['USER', 'ADMIN'], passportEnum.JWT, eventController.updPreset);
        this.put('/flyer/:id', ['USER', 'ADMIN'], passportEnum.JWT, multipleUploader, uploadToCloudinary, eventController.updFlyer);
        this.put('/ticket/:id', ['USER', 'ADMIN'], passportEnum.JWT, eventController.updTickes);
        this.put('/checkout/:id', ['USER', 'ADMIN'], passportEnum.JWT, eventController.checkOut);
        this.put('/active/:id', ['USER', 'ADMIN'], passportEnum.JWT, eventController.active);
    };
};