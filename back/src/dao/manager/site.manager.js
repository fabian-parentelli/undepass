import { siteModel } from '../models/site.model.js';

export default class Site {

    newSite = async (site) => {
        return await siteModel.create(site);
    };

    getByUser = async (id) => {
        return await siteModel.findOne({ userId: id }).lean();
    };

    getByTitle = async (title) => {
        return await siteModel.findOne({ title: title }).lean();
    };
    
    getByUrl = async (url) => {
        return await siteModel.findOne({ url: url }).lean();
    };

    getById = async (id) => {
        return await siteModel.findById(id).lean();
    };

    update = async (site) => {
        return await siteModel.findByIdAndUpdate({ _id: site._id }, site);
    };

    count = async () => {
        return await siteModel.countDocuments();
    };

    getRandom = async (limit) => {
        return await siteModel.aggregate([
            { $sample: { size: limit } },
        ]);
    };

    getAll = async (limit, page) => {
        return await siteModel.paginate({}, { limit, page, lean: true });
    };

};