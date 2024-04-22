import { eventRepository } from "../repositories/index.repositories.js";
import { EventNotFound } from '../utils/custom-exceptions.utils.js';
import { getProvince, getParties } from "./cities.service.js";

const newEventInfo = async (event) => {
    event.guests = event.guests.trim().split(',');
    event.location.province = await getProvince(event.location.province);
    event.location.municipality = await getParties(event.location.municipality);
    const result = await eventRepository.newEventInfo(event);
    if (!result) throw new EventNotFound('No se puede guaradar el evento');
    return { status: 'success', result };
};

const getById = async (id) => {
    const result = await eventRepository.getById(id);
    if (!result) throw new EventNotFound('No se encuentra el evento');
    return { status: 'success', result };
};

const getAllEvents = async (limit, page, category, active, tickets, location) => {
    const query = {};
    if (category) query.category = { $regex: category, $options: "i" };
    if (active !== undefined) query.active = active;
    if (tickets !== undefined) query.tickets = tickets;
    const sortOption = {};
    if (location) {
        sortOption.location = 1;
        sortOption.startEvent = 1;
    } else sortOption.startEvent;
    const result = await eventRepository.getAllEvents(query, sortOption, limit, page);
    return { status: 'success', result };
};

const updPreset = async (upd) => {
    const getEvent = await eventRepository.getById(upd.eventId);
    if (!getEvent) throw new EventNotFound('No se encuentra el evento');
    getEvent.photo = { img: upd.style, isFlyer: false };
    const result = await eventRepository.update(getEvent);
    if (!result) throw new EventNotFound('No se puede actualizar la base de datos');
    return { status: 'success' };
};

const updFlyer = async (imagesUrl, id) => {
    const getEvent = await eventRepository.getById(id);
    if (!getEvent) throw new EventNotFound('No se encuentra el evento');
    getEvent.photo = { img: imagesUrl[0], isFlyer: true };
    const result = await eventRepository.update(getEvent);
    if (!result) throw new EventNotFound('No se puede actualizar la base de datos');
    return { status: 'success' };
};

const updTickes = async (tickets, id) => {
    const getEvent = await eventRepository.getById(id);
    if (!getEvent) throw new EventNotFound('No se encuentra el evento');
    getEvent.ticketInfo = tickets;
    const result = await eventRepository.update(getEvent);
    if (!result) throw new EventNotFound('No se puede actualizar la base de datos');
    return { status: 'success' };
};

const checkOut = async (tickets, id) => {
    const getEvent = await eventRepository.getById(id);
    if (!getEvent) throw new EventNotFound('No se encuentra el evento');
    const event = { ...getEvent, ...tickets };
    event.active = true;
    const result = await eventRepository.update(event);
    if (!result) throw new EventNotFound('No se puede actualizar la base de datos');
    return { status: 'success' };
};

export { newEventInfo, getById, getAllEvents, updPreset, updFlyer, updTickes, checkOut };