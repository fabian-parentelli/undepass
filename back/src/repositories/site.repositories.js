import { siteManager } from '../dao/manager/index.manager.js';

export default class SiteRepository {

    newSite = async (site) => {
        const result = await siteManager.newSite(site);
        return result;
    };

    getByUser = async (id) => {
        const result = await siteManager.getByUser(id);
        return result;
    };

    getByTitle = async (title) => {
        const result = await siteManager.getByTitle(title);
        return result;
    };

    getById = async (id) => {
        const result = await siteManager.getById(id);
        return result;
    };

    update = async (site) => {
        const result = await siteManager.update(site);
        return result;
    };

    count = async () => {
        const result = await siteManager.count();
        return result;
    };

    getRandom = async (limit) => {
        const result = await siteManager.getRandom(limit);
        return result;
    };
    
    getAll = async (limit, page) => {
        const result = await siteManager.getAll(limit, page);
        return result;
    };

};