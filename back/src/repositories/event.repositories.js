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
    
    searchEvent = async (name) => {
        const result = await eventManager.searchEvent(name);
        return result;
    };

    getAllEvents = async (query, limit, page) => {
        const result = await eventManager.getAllEvents(query, limit, page);
        return result;
    };

    update = async (event) => {
        const result = await eventManager.update(event);
        return result;
    };
    
    getActive = async () => {
        const result = await eventManager.getActive();
        return result;
    };
    
    getQuantity = async () => {
        const result = await eventManager.getQuantity();
        return result;
    };

    getByUserId = async (userId) => {
        const result = await eventManager.getByUserId(userId);
        return result
    };

};