import { productRepository, userRepository } from "../repositories/index.repositories.js";
import { ProductNotFound } from '../utils/custom-exceptions.utils.js';
import * as utilsFunction from '../utils/functions/services.utils.js';

const newProduct = async (images, imagesUrl, producut) => {
    producut.img = [];
    imagesUrl.forEach((image, index) => {
        const obj = {
            imgUrl: image,
            imgName: images[index].originalname,
            active: true
        };
        producut.img.push(obj);
    });
    producut.date = new Date();
    const user = await userRepository.getById(producut.userId);
    producut.location = user.location || {};
    const result = await productRepository.newProduct(producut);
    if (!result) throw new ProductNotFound('No se puede agregar un nuevo producto');
    return { status: 'success', result };
};

const getByUserId = async (id) => {
    const result = await productRepository.getByUserId(id);
    if (!result) throw new ProductNotFound('No se encuentran los productos');
    return { status: 'success', result };
};

const getCounter = async () => {
    const result = await productRepository.getCounter();
    if (!result) result = 0;
    return { status: 'success', result };
};

const getById = async (id) => {
    const result = await productRepository.getById(id);
    if (!result) throw new ProductNotFound('No se encuentra el producto');
    return { status: 'success', result };
};

let cachedProducts = null;

const getAll = async (limit, page, random) => {
    if (random === '1') {
        const { count, startIdx, endIdx } = await utilsFunction.getRandomProductInfo(+limit, +page);
        const randomProducts = await productRepository.getRandom(count);
        const paginatedProducts = randomProducts.slice(startIdx, endIdx);
        cachedProducts = randomProducts;
        return utilsFunction.buildResponse(paginatedProducts, cachedProducts.length, +limit, +page);
    };
    if (random === '2') {
        const { startIdx, endIdx } = utilsFunction.getPaginatedIndices(+limit, +page);
        const paginatedProducts = cachedProducts.slice(startIdx, endIdx);
        return utilsFunction.buildResponse(paginatedProducts, cachedProducts.length, +limit, +page);
    };
    const result = await productRepository.getAll(limit, page);
    if (!result) throw new SiteNotFound('No se encuentran sitios');
    return { status: 'success', result };
};

const updInSite = async (id) => {
    const product = await productRepository.getById(id);
    if (!product) throw new ProductNotFound('No se encuebtra el producto');
    product.inSite = !product.inSite;
    const result = await productRepository.update(product);
    if (!result) throw new ProductNotFound('No se puede modificar el producto');
    return { status: 'success', result };
};

export { newProduct, getByUserId, getAll, updInSite, getCounter, getById };