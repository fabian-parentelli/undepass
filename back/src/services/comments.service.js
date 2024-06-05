import { commentRepository, userRepository } from "../repositories/index.repositories.js";
import { CommentNotFound } from '../utils/custom-exceptions.utils.js';

const newComment = async (comment) => {
    comment.date = new Date();
    const result = await commentRepository.newComment(comment);
    if (!result) throw new CommentNotFound('No se puede crear el comentario');
    return { status: 'success', result };
};

const getBySiteId = async (id) => {
    const comments = await commentRepository.getBySiteId(id);
    if (!comments) return { status: 'error', result: [] };
    const result = await Promise.all(comments.map(async (comm) => {
        if (comm.userId) {
            const user = await userRepository.getById(comm.userId);
            comm.userName = user.name;
            comm.avatar = user.avatar[0];
            comm.date = comm.date.toLocaleString();
            return comm;
        } else {
            comm.userName = 'Usuario';
            comm.avatar = 'https://res.cloudinary.com/dtjzfz2ex/image/upload/v1716739355/background/ooskvh6gw21heoutge7t.png';
            comm.date = comm.date.toLocaleString();
            return comm;
        };
    }));
    return { status: 'success', result };
};

const updActive = async (id) => {
    const comment = await commentRepository.getById(id);
    if (!comment) throw new CommentNotFound('No se encuentra el comentario');
    comment.active = !comment.active;
    const result = await commentRepository.update(comment);
    if (!result) throw new CommentNotFound('No se puede setear el estado');
    return { status: 'success', result };
};

export { newComment, getBySiteId, updActive };