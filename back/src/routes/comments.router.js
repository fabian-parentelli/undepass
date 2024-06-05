import Router from './routes.js';
import * as commentController from '../controllers/comment.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class CommentRouter extends Router {
    init() {
        this.post('/', ['PUBLIC'], passportEnum.NOTHING, commentController.newComment);
        this.get('/siteid/:id', ['PUBLIC'], passportEnum.NOTHING, commentController.getBySiteId);
        this.put('/active/:id', ['USER', 'ADMIN'], passportEnum.JWT, commentController.updActive);
    };
};