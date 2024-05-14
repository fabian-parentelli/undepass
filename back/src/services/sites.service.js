import { siteRepository } from "../repositories/index.repositories.js";
import { SiteNotFound } from '../utils/custom-exceptions.utils.js';
import * as utilsFunction from '../utils/functions/services.utils.js';
import { getProvince, getParties } from "./cities.service.js";

const newSite = async (site) => {
    const userIs = await siteRepository.getByUser(site.userId);
    if (userIs) throw new SiteNotFound('No puedes tener mas de un sitio');
    const isTitle = await siteRepository.getByTitle(site.title);
    if (isTitle) throw new SiteNotFound('Ya existe un sitio con ese nombre');
    site.location.province = await getProvince(site.location.province);
    site.location.municipality = await getParties(site.location.municipality);
    site.url = site.title.toLowerCase().replace(/\s/g, '');
    site.img = [];
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

const countSites = async () => {
    const result = await siteRepository.count();
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
    console.log(videos);
    const result = await siteRepository.update(siteDb);
    if (!result) throw new SiteNotFound('No se puede guardar la imagen');
    return { status: 'success' };
};

export { newSite, postImg, countSites, getByUserId, getAll, update, addVideo };