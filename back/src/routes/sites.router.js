import Router from './routes.js';
import * as sitesController from '../controllers/sites.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js';
import { uploadToCloudinary } from '../config/cloudinaryAvatar.conf.js';

export default class SitesRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN'], passportEnum.JWT, sitesController.newSite);
        this.post('/img', ['USER', 'ADMIN'], passportEnum.JWT, multipleUploader, uploadToCloudinary, sitesController.postImg);
        this.post('/favorite', ['USER', 'ADMIN'], passportEnum.JWT, sitesController.addFavorite);
        this.post('/addlike', ['PUBLIC'], passportEnum.NOTHING, sitesController.addLike);
        this.get('/count', ['PUBLIC'], passportEnum.NOTHING, sitesController.countSites);
        this.get('/site/:url', ['PUBLIC'], passportEnum.NOTHING, sitesController.getByUrl);
        this.get('/:id', ['USER', 'ADMIN'], passportEnum.JWT, sitesController.getByUserId);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, sitesController.getAll);
        this.put('/vewsite', ['USER', 'ADMIN'], passportEnum.JWT, sitesController.updVewSite);
        this.put('/addvideo/:id', ['USER', 'ADMIN'], passportEnum.JWT, sitesController.addVideo);
        this.put('/', ['USER', 'ADMIN'], passportEnum.JWT, sitesController.update);
    };
};