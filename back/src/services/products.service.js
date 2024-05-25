import { productRepository, userRepository } from "../repositories/index.repositories.js";
import { ProductNotFound } from '../utils/custom-exceptions.utils.js';

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

const updInSite = async (id) => {
    const product = await productRepository.getById(id);
    if (!product) throw new ProductNotFound('No se encuebtra el producto');
    product.inSite = !product.inSite;
    const result = await productRepository.update(product);
    if (!result) throw new ProductNotFound('No se puede modificar el producto');
    return { status: 'success', result };
};

export { newProduct, getByUserId, updInSite };