import * as commentService from '../services/comments.service.js';
import { CommentNotFound } from '../utils/custom-exceptions.utils.js';

const newComment = async (req, res) => {
    try {
        const result = await commentService.newComment({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CommentNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getBySiteId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await commentService.getBySiteId(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CommentNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await commentService.updActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof CommentNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newComment, getBySiteId, updActive };