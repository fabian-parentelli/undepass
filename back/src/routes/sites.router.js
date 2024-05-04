import Router from './routes.js';
import * as sitesController from '../controllers/sites.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js';
import { uploadToCloudinary } from '../config/cloudinaryAvatar.conf.js';

export default class SitesRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN'], passportEnum.JWT, sitesController.newSite);
        this.post('/img', ['USER', 'ADMIN'], passportEnum.JWT, multipleUploader, uploadToCloudinary, sitesController.postImg);
        this.get('/:id', ['USER', 'ADMIN'], passportEnum.JWT, sitesController.getByUserId);
        this.put('/', ['USER', 'ADMIN'], passportEnum.JWT, sitesController.update);
    };
};