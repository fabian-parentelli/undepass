import { eventRepository } from "../repositories/index.repositories.js";
import { EventNotFound } from '../utils/custom-exceptions.utils.js';
import { getProvince, getParties } from "./cities.service.js";
import convertDate from '../utils/DateConvert.utils.js';
import { createHash, isValidPassword } from '../utils/hashedPassword.utils.js';

const newEventInfo = async (event) => {
    event.guests = event.guests.trim().split(',');
    event.location.province = await getProvince(event.location.province);
    event.location.municipality = await getParties(event.location.municipality);
    if (event.password) event.password = createHash(event.password);
    const result = await eventRepository.newEventInfo(event);
    if (!result) throw new EventNotFound('No se puede guaradar el evento');
    return { status: 'success', result };
};

const getCitys = async () => {
    const events = await eventRepository.getActive();
    if (!events) throw new EventNotFound('No se encuentran los eventos');
    const result = events.map((event) => event.location.city);
    return { status: 'success', result };
};

const getQuantity = async () => {
    const result = await eventRepository.getQuantity();
    return { status: 'success', result };
};

const isPrivate = async (id, pass) => {
    const event = await eventRepository.getById(id);
    if (!event) throw new EventNotFound('No se encuentra el evento');
    const comparePassword = isValidPassword(event, pass);
    if (!comparePassword) throw new EventNotFound('La contraseña es incorrecta');
    return { status: 'success' };
};

const searchEvent = async (name) => {
    const result = await eventRepository.searchEvent(name);
    if (!result) throw new EventNotFound('No se encuentra el evento');
    return { status: 'success', result };
};

const getById = async (id) => {
    const result = await eventRepository.getById(id);
    if (!result) throw new EventNotFound('No se encuentra el evento');
    return { status: 'success', result };
};

const getAllEvents = async (limit, page, category, active, tickets, location, userId) => {
    const query = {};
    if (category) query.category = { $regex: category, $options: "i" };
    if (userId) query.userId = { $regex: userId, $options: "i" };
    if (active !== undefined) query.active = active;
    if (tickets !== undefined) query.tickets = tickets;
    if (location) query["location.city"] = { $regex: location, $options: "i" };
    const result = await eventRepository.getAllEvents(query, limit, page);
    if (!location) {
        result.docs.forEach((event) => event.startEvent = convertDate(event.startEvent));
        result.docs.sort((a, b) => a.startEvent - b.startEvent);
        result.docs.forEach((event) => event.startEvent = event.startEvent.toLocaleString());
    };
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

const active = async (id) => {
    const event = await eventRepository.getById(id);
    if (!event) throw new EventNotFound('No se encentra el evento');
    event.active = !event.active;
    await eventRepository.update(event);
    return { status: 'success' };
};

const singleUpdate = async () => {
    const events = await eventRepository.getActive();
    if (events) {
        events.forEach(async (even) => {
            const inactiveEvent = convertDate(even.startEvent);
            if (inactiveEvent < new Date()) {
                even.active = false;
                console.log(even);
                await eventRepository.update(even);
            };
        });
    } else console.log('No hay eventos para modoficar');
};

export {
    newEventInfo, getCitys, searchEvent, getById, getAllEvents,
    updPreset, updFlyer, updTickes, checkOut, singleUpdate, active, 
    isPrivate, getQuantity
};