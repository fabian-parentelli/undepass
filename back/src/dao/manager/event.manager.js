import { eventModel } from '../models/event.model.js';

export default class Event {

    newEventInfo = async (event) => {
        return await eventModel.create(event);
    };

    getById = async (id) => {
        return await eventModel.findById(id).lean();
    };

    searchEvent = async (name) => {
        const query = {
            $or: [{ name: { $regex: name, $options: 'i' } }, { guests: { $regex: name, $options: 'i' } }]
        };
        return await eventModel.paginate(query, { limit: 10, page: 1, lean: true });
    };

    getAllEvents = async (query, limit, page) => {
        return await eventModel.paginate(query, { limit, page, lean: true });
    };

    update = async (event) => {
        return await eventModel.findByIdAndUpdate({ _id: event._id }, event);
    };

    getActive = async () => {
        return await eventModel.find({ active: true }).lean();
    };

    getQuantity = async () => {
        return await eventModel.countDocuments({ active: true });
    };

    getByUserId = async (userId) => {
        return await eventModel.find({ userId: userId }).lean();
    };

};