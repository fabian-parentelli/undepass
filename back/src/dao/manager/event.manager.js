import { eventModel } from '../models/event.model.js';

export default class Event {

    newEventInfo = async (event) => {
        return await eventModel.create(event);
    };

    getById = async (id) => {
        return await eventModel.findById(id).lean();
    };

    getAllEvents = async (query, sortOption, limit, page) => {
        return await eventModel.paginate(query, { limit, page, sort: sortOption, lean: true });
    };

    update = async (event) => {
        return await eventModel.findByIdAndUpdate({ _id: event._id }, event);
    };

};