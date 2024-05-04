import { siteRepository } from "../repositories/index.repositories.js";
import { SiteNotFound } from '../utils/custom-exceptions.utils.js';

const newSite = async (site) => {
    const userIs = await siteRepository.getByUser(site.userId);
    if (userIs) throw new SiteNotFound('No puedes tener mas de un sitio');
    const isTitle = await siteRepository.getByTitle(site.title);
    if (isTitle) throw new SiteNotFound('Ya existe un sitio con ese nombre');
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

const getByUserId = async (id) => {
    const result = await siteRepository.getByUser(id);
    if (!result) throw new SiteNotFound('No se encuntra el usuario');
    return { status: 'success', result };
};

const update = async (site) => {
    const siteDb = await siteRepository.getById(site._id);
    if (!siteDb) throw new SiteNotFound('No se encuentra el sitio');
    let newSite
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

export { newSite, postImg, getByUserId, update };