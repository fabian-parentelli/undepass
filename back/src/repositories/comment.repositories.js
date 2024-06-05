import { commentManager } from '../dao/manager/index.manager.js';

export default class CommentRepository {

    newComment = async (comment) => {
        const result = await commentManager.newComment(comment);
        return result;
    };
    
    getBySiteId = async (id) => {
        const result = await commentManager.getBySiteId(id);
        return result;
    };
    
    getById = async (id) => {
        const result = await commentManager.getById(id);
        return result;
    };

    update = async (comment) => {
        const result = await commentManager.update(comment);
        return result;
    };
    
};