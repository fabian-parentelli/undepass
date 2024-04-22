import { eventManager } from '../dao/manager/index.manager.js';

export default class EventRepository {

    newEventInfo = async (event) => {
        const result = await eventManager.newEventInfo(event);
        return result;
    };

    getById = async (id) => {
        const result = await eventManager.getById(id);
        return result;
    };
    
    getAllEvents = async (query, sortOption, limit, page) => {
        const result = await eventManager.getAllEvents(query, sortOption, limit, page);
        return result;
    };
    
    update = async (event) => {
        const result = await eventManager.update(event);
        return result;
    };
    
};