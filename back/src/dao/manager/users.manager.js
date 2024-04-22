import { userModel } from '../models/users.model.js';

export default class User {

    register = async (user) => {
        return await userModel.create(user);
    };

    getByEmail = async (email) => {
        return await userModel.findOne({ email }).lean();
    };

    update = async (user) => {
        return await userModel.findByIdAndUpdate({ _id: user._id }, user, { new: true }).lean();
    };

    getByIdPass = async (id) => {
        return await userModel.findOne({ passId: id }).lean(); s
    };

    look = async (name) => {
        const query = {
            $or: [{ name: { $regex: name, $options: 'i' } }]
        };
        return await userModel.paginate(query, { limit: 10, page: 1, lean: true });
    };

    getById = async (id) => {
        return await userModel.findById(id).lean();
    };

    getAllUsers = async (limit, page) => {
        const query = {};
        return await userModel.paginate(query, { limit, page, lean: true });
    };

    getAmount = async () => {
        return await userModel.countDocuments()
    };

    getAll = async () => {
        return await userModel.find().lean();
    };

};