import { userManager } from '../dao/manager/index.manager.js';

export default class UserRepository {

    register = async (user) => {
        const result = await userManager.register(user);
        return result;
    };

    getByEmail = async (email) => {
        const result = await userManager.getByEmail(email);
        return result;
    };

    update = async (user) => {
        const result = await userManager.update(user);
        return result;
    };

    getByIdPass = async (id) => {
        const result = await userManager.getByIdPass(id);
        return result;
    };

    look = async (name) => {
        const result = await userManager.look(name);
        return result;
    };

    getById = async (id) => {
        const result = await userManager.getById(id);
        return result;
    };

    getAllUsers = async (limit, page) => {
        const result = await userManager.getAllUsers(limit, page);
        return result;
    };

    getAmount = async () => {
        const result = await userManager.getAmount();
        return result;
    };

    getAll = async () => { 
        const result = await userManager.getAll();
        return result;
    };
};