import { commentModel } from '../models/comment.model.js';

export default class Comment {

    newComment = async (comment) => {
        return await commentModel.create(comment);
    };

    getBySiteId = async (id) => {
        return await commentModel.find({ siteId: id }).lean();
    };

    getById = async (id) => {
        return await commentModel.findById(id).lean();
    };

    update = async (comment) => {
        return await commentModel.findByIdAndUpdate({ _id: comment._id }, comment, { new: true });
    };

};