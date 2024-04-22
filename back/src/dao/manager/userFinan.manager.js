import { userFinanModel } from '../models/userFinan.model.js';

export default class UserFinan {

    newUserFinan = async (user) => {
        return await userFinanModel.create(user);
    };

    getById = async (id) => {
        return await userFinanModel.findById(id).lean();
    };

    update = async (data) => {
        return await userFinanModel.findByIdAndUpdate({ _id: data._id }, data).lean();
    };
};