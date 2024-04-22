import { userFinanManager } from '../dao/manager/index.manager.js';

export default class UserFinanRepository {

    newUserFinan = async (data) => {
        const result = await userFinanManager.newUserFinan(data);
        return result;
    };

    getById = async (id) => {
        const result = await userFinanManager.getById(id);
        return result;
    };

    update = async (data) => {
        const result = await userFinanManager.update(data);
        return result;
    };
};