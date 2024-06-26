import { siteRepository, shiftRepository, eventRepository } from "../repositories/index.repositories.js";
import { SiteNotFound } from '../utils/custom-exceptions.utils.js';
import * as utilsFunction from '../utils/functions/services.utils.js';
import { getProvince, getParties } from "./cities.service.js";

const newSite = async (site) => {

    const userIs = await siteRepository.getByUser(site.userId);
    if (userIs) throw new SiteNotFound('No puedes tener mas de un sitio');
    const isTitle = await siteRepository.getByTitle(site.title);
    if (isTitle) throw new SiteNotFound('Ya existe un sitio con ese nombre');
    if (!site.location.province || !site.location.municipality || !site.location.province) {
        throw new SiteNotFound('Debes agregar la ubicación');
    };
    site.location.province = await getProvince(site.location.province);
    site.location.municipality = await getParties(site.location.municipality);
    site.url = site.title.toLowerCase().replace(/\s/g, '');
    site.img = [];
    if (site.shift.active) {
        const shiftDb = await shiftRepository.newShift({ userId: site.userId });
        site.shift.shiftId = shiftDb._id.toHexString();
    };
    const events = await eventRepository.getByUserId(site.userId);
    if (events) {
        site.events = [];
        events.forEach((even) => {
            const obj = { eventId: even._id, active: true };
            site.events.push(obj);
        });
    };
    const result = await siteRepository.newSite(site);
    if (!result) throw new SiteNotFound('No se puede crear el sitio');
    return { status: 'success', result };
};

const postImg = async (images, imagesUrl, info) => {
    const siteDb = await siteRepository.getById(info.siteId);
    if (!siteDb) throw new SiteNotFound('No se encuentra el sitio');
    const obj = {
        name: info.name,
        folderName: info.folderName,
        url: imagesUrl[0]
    };
    const existingObjIndex = siteDb.img.findIndex(i => i.name === info.name);
    if (existingObjIndex !== -1) siteDb.img[existingObjIndex] = obj;
    else siteDb.img.push(obj);
    const result = await siteRepository.update(siteDb);
    if (!result) throw new SiteNotFound('No se puede guardar la imagen');
    return { status: 'success' };
};

const addFavorite = async (favorite) => {
    const site = await siteRepository.getById(favorite.siteId);
    const index = site.favorites.findIndex((fav) => fav.userId === favorite.id);
    if (index !== -1) site.favorites.splice(index, 1);
    else site.favorites.push({ userId: favorite.id });
    const result = await siteRepository.update(site);
    if (!result) throw new SiteNotFound('No se puede agregar a favoritos');
    return { status: 'success', result };
};

const addLike = async (likes, userIp) => {
    const site = await siteRepository.getById(likes.siteId);
    if (!site) throw new SiteNotFound('No se encuentra el sitio');
    const identifier = likes.userId || userIp;
    const exists = site.likeCount.some(sit => sit === identifier);
    if (exists) return { status: 'error', error: 'Ya te gusta este sitio' };
    else site.likeCount.push(identifier);
    const result = await siteRepository.update(site);
    if (!result) throw new SiteNotFound('No se puede actualizar el error');
    return { status: 'success', result };
};

const countSites = async () => {
    const result = await siteRepository.count();
    return { status: 'success', result };
};

const getByUrl = async (url) => {
    const result = await siteRepository.getByUrl(url);
    if (!result) throw new SiteNotFound('No se encuentra el sitio');
    return { status: 'success', result };
};

const getByUserId = async (id) => {
    const result = await siteRepository.getByUser(id);
    if (!result) throw new SiteNotFound('No se encuntra el usuario');
    return { status: 'success', result };
};

let cachedProducts = null;

const getAll = async (limit, page, random) => {
    if (random === '1') {
        const { count, startIdx, endIdx } = await utilsFunction.getRandomProductInfo(+limit, +page);
        const randomProducts = await siteRepository.getRandom(count);
        const paginatedProducts = randomProducts.slice(startIdx, endIdx);
        cachedProducts = randomProducts;
        return utilsFunction.buildResponse(paginatedProducts, cachedProducts.length, +limit, +page);
    };
    if (random === '2') {
        const { startIdx, endIdx } = utilsFunction.getPaginatedIndices(+limit, +page);
        const paginatedProducts = cachedProducts.slice(startIdx, endIdx);
        return utilsFunction.buildResponse(paginatedProducts, cachedProducts.length, +limit, +page);
    };
    const result = await siteRepository.getAll(limit, page);
    if (!result) throw new SiteNotFound('No se encuentran sitios');
    return { status: 'success', result };
};

const update = async (site) => {
    const siteDb = await siteRepository.getById(site._id);
    if (!siteDb) throw new SiteNotFound('No se encuentra el sitio');
    let newSite;
    if (site.text) {
        delete site._id;
        const exists = siteDb.info.findIndex(index => index.text === site.text);
        if (exists !== -1) siteDb.info[exists] = site;
        else siteDb.info.push(site);
        newSite = { ...siteDb };
    } else newSite = { ...siteDb, ...site };
    const result = await siteRepository.update(newSite);
    if (!result) throw new SiteNotFound('No se puede guardar la imagen');
    return { status: 'success' };
};

const addVideo = async (id, { videos }) => {
    const siteDb = await siteRepository.getById(id);
    if (!siteDb) throw new SiteNotFound('No se encuentra el sitio');
    siteDb.videos = videos;
    const result = await siteRepository.update(siteDb);
    if (!result) throw new SiteNotFound('No se puede guardar la imagen');
    return { status: 'success' };
};

const updVewSite = async (body) => {
    const site = await siteRepository.getById(body.siteId);
    site.events.forEach((sit) => {
        if (sit.eventId === body.eventId) {
            sit.active = !sit.active;
        };
    });
    const result = await siteRepository.update(site);
    if (!result) throw new SiteNotFound('No se puede actualizar la vista del evento en el sitio');
    return { status: 'success', result };
};

export {
    newSite, postImg, countSites, getByUrl,
    getByUserId, getAll, update, addVideo, updVewSite,
    addFavorite, addLike
};