import Router from './routes.js';
import * as productController from '../controllers/products.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js';
import { uploadToCloudinary } from '../config/cloudinaryAvatar.conf.js';

export default class ProductRouter extends Router {
    init() {
        this.post('/', ['USER', 'ADMIN'], passportEnum.JWT, multipleUploader, uploadToCloudinary, productController.newProduct);
        this.get('/user/:id', ['PUBLIC'], passportEnum.NOTHING, productController.getByUserId);
        this.get('/count', ['PUBLIC'], passportEnum.NOTHING, productController.getCounter);
        this.get('/:id', ['PUBLIC'], passportEnum.NOTHING, productController.getById);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, productController.getAll);
        this.put('/insite/:id', ['USER', 'ADMIN'], passportEnum.JWT, productController.updInSite);
    };
};