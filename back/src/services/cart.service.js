import { productRepository, eventRepository } from "../repositories/index.repositories.js";
import { CartNotFound } from '../utils/custom-exceptions.utils.js';

const getData = async (cart) => {
    const result = await Promise.all(cart.map(async (data) => {
        if (data.is === 'product') {
            const product = await productRepository.getById(data._id);
            if (product) {
                return {
                    ...data,
                    name: product.name,
                    location: product.location,
                    description: product.description,
                    img: product.img[0]
                };
            } else throw new CartNotFound('No se encuentra el producto');
        };

        if (data.is === 'event') {
            const event = await eventRepository.getById(data.eventId);
            if (event) {
                const obj = {
                    ...data,
                    name: event.name,
                    location: event.location,
                    img: event.photo
                };
                obj.tickets = data.tickets.map((tik) => {
                    const ticketData = event.ticketInfo.find(tok => tok._id == tik.Id);
                    return { ...tik, name: ticketData.type };
                });
                return obj;
            } else throw new CartNotFound('No se encuentra el evento');
        }
    }));
    return { status: 'success', result };
};

export { getData };