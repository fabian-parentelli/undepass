import Router from './routes.js';
import * as avtarController from '../controllers/avatars.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js';
import { uploadToCloudinary } from '../config/cloudinaryAvatar.conf.js';

export default class AvatarRouter extends Router {
    init() {
        this.post('/event', ['ADMIN'], passportEnum.JWT, multipleUploader, uploadToCloudinary, avtarController.newEvent);
        this.post('/', ['ADMIN'], passportEnum.JWT, multipleUploader, uploadToCloudinary, avtarController.newAvatar);
        this.get('/event', ['USER', 'ADMIN'], passportEnum.JWT, avtarController.getEvents);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, avtarController.vewAvatar);
        this.put('/:id', ['ADMIN'], passportEnum.JWT, avtarController.updateActive);
    };
};