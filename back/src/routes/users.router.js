import Router from './routes.js';
import * as userController from '../controllers/users.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js'
import { uploadToCloudinary } from '../config/cloudinaryAvatar.conf.js';

export default class UserRouter extends Router {
    init() {
        this.post('/register', ['PUBLIC'], passportEnum.NOTHING, userController.register);
        this.post('/login', ['PUBLIC'], passportEnum.NOTHING, userController.login);
        this.post('/recover_password', ['PUBLIC'], passportEnum.NOTHING, userController.recoverPassword);
        this.post('/:id?', ['USER', 'ADMIN'], passportEnum.JWT, multipleUploader, uploadToCloudinary, userController.upUserFile);
        this.get('/inter_pass/:id', ['PUBLIC'], passportEnum.NOTHING, userController.interPass);
        this.get('/look/:name', ['ADMIN'], passportEnum.JWT, userController.look);
        this.get('/current', ['PUBLIC'], passportEnum.JWT, userController.current);
        this.get('/amount', ['ADMIN'], passportEnum.JWT, userController.getAmount);
        this.get('/nameid', ['ADMIN'], passportEnum.JWT, userController.getNameId);
        this.get('/:id', ['USER', 'ADMIN'], passportEnum.JWT, userController.getUserById);
        this.get('/', ['ADMIN'], passportEnum.JWT, userController.getAllUsers);
        this.put('/new_password', ['PUBLIC'], passportEnum.JWT, userController.newPassword);
        this.put('/avatar/:userId?', ['USER', 'ADMIN'], passportEnum.JWT, userController.updUserAvatar);
        this.put('/old_avatar/:id?', ['USER', 'ADMIN'], passportEnum.JWT, userController.oldAvatar);
        this.put('/update/:id', ['USER', 'ADMIN'], passportEnum.JWT, userController.updateUser);
        this.put('/:id', ['ADMIN'], passportEnum.JWT, userController.updateActive);
    };
};