import { productManager } from '../dao/manager/index.manager.js';

export default class ProductRepository {

    newProduct = async (product) => {
        const result = await productManager.newProduct(product);
        return result;
    };
    
    getByUserId = async (id) => {
        const result = await productManager.getByUserId(id);
        return result;
    };
    
    getById = async (id) => {
        const result = await productManager.getById(id);
        return result;
    };
    
    update = async (product) => {
        const result = await productManager.update(product);
        return result;
    };

};