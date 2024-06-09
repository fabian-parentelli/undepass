import * as userService from "../../services/users.service.js";
import { userRepository, productRepository, eventRepository } from "../../repositories/index.repositories.js";
import { OrderNotFound } from "../custom-exceptions.utils.js";
import { sendEmail } from "../../services/email.service.js";
import confirmOrderUtils from "../html/confirmOrder.utils.js";

const iSUser = async (order) => {
    if (!order.userId) {
        const tempOrder = { ...order };
        delete tempOrder.cart;
        tempOrder.password = tempOrder.dni;
        const userNewId = await userService.register(tempOrder);
        order.userId = userNewId.payload._id.toString();
    } else {
        const userDb = await userService.getUserById(order.userId);
        const user = userDb.result;
        if (!user.location.postalCode) user.location.postalCode = order.location.postalCode;
        if (!user.location.address) user.location.address = order.location.address;
        await userRepository.update(user);
    };
};

const processProducts = async (orderCart, notStock) => {
    const products = orderCart.filter(prod => prod.is === 'product');
    if (products.length > 0) {
        const productPromises = products.map(async prod => {
            const product = await productRepository.getById(prod._id);
            if (!product) throw new OrderNotFound(`Producto con ID ${prod._id} no encontrado.`);
            let orderedQuantity = prod.quantity;
            if (product.quantity < prod.quantity) {
                const dif = prod.quantity - product.quantity;
                notStock.push({ ...prod, quantity: dif });
                orderedQuantity = product.quantity;
            }
            product.quantity -= orderedQuantity;
            const obj = {
                productId: prod._id,
                quantity: orderedQuantity,
                price: prod.price,
                is: prod.is
            };
            await productRepository.update(product);
            return obj;
        });
        return await Promise.all(productPromises);
    }
    return [];
};

const processEvents = async (orderCart, notStock) => {
    const events = orderCart.filter(eve => eve.is === 'event');
    if (events.length > 0) {
        const eventPromises = events.map(async eve => {
            const event = await eventRepository.getById(eve.siteId);
            const ticket = event.ticketInfo.find(e => e._id == eve._id);
            let orderedQuantity = eve.quantity;
            if (ticket.quantity < eve.quantity) {
                const dif = eve.quantity - ticket.quantity;
                notStock.push({ ...eve, quantity: dif });
                orderedQuantity = ticket.quantity;
            }
            ticket.quantity -= orderedQuantity;
            const obj = {
                eventId: eve.siteId,
                ticketId: ticket._id,
                quantity: orderedQuantity,
                price: eve.price,
                is: eve.is
            };
            await eventRepository.update(event);
            return obj;
        });
        return await Promise.all(eventPromises);
    }
    return [];
};

const emailToBuyer = async (newOrder, userData) => {
    const processedProducts = await getProducts(newOrder);
    const processedEvents = await getEvents(newOrder);
    const cart = processedProducts.concat(processedEvents);
    const emailTo = {
        to: userData.email,
        subject: 'Orden Creada',
        html: await confirmOrderUtils(cart, userData)
    };
    await sendEmail(emailTo);
};

const getProducts = async (newOrder) => {
    const processedProducts = [];
    const products = newOrder.filter(prod => prod.is === 'product');
    if (products.length > 0) {
        for (const prod of products) {
            const product = await productRepository.getById(prod.productId);
            processedProducts.push({
                ...prod,
                name: product.name,
                description: product.description,
                img: product.img[0].imgUrl
            });
        };
    };
    return processedProducts;
};

const getEvents = async (newOrder) => {
    const processedEvents = [];
    const events = newOrder.filter(eve => eve.is === 'event');
    if (events.length > 0) {
        for (const eve of events) {
            const event = await eventRepository.getById(eve.eventId);
            for (const ticket of event.ticketInfo) {
                if (ticket._id.toString() === eve.ticketId.toString()) {
                    processedEvents.push({
                        ...eve,
                        name: ticket.type,
                        description: ticket.description,
                        img: 'https://res.cloudinary.com/dtjzfz2ex/image/upload/v1717886414/background/yjq7j0vxindhc5pnf6nq.png'
                    });
                };
            };
        };
    };
    return processedEvents;
};

const orderSeller = async (order) => {
    const orders = [];
    for (const ord of order.cart) {
        if (ord.is === 'product') {
            const product = await productRepository.getById(ord.productId);
            const prod = orders.findIndex((prod) => prod.sellerUserId == product.userId);
            if (prod !== -1) {
                orders[prod].cart.push(ord);
            } else {
                const obj = {
                    orderId: order._id,
                    buyerUserId: order.userId,
                    sellerUserId: product.userId,
                    date: new Date(),
                    cart: [ord]
                };
                orders.push(obj);
            };
        };

        if (ord.is === 'event') {
            const event = await eventRepository.getById(ord.eventId);
            const eveIndex = orders.findIndex((tik) => tik.sellerUserId == event.userId);
            if (eveIndex !== -1) {
                orders[eveIndex].cart.push(ord);
            } else {
                const obj = {
                    orderId: order._id,
                    buyerUserId: order.userId,
                    sellerUserId: event.userId,
                    date: new Date(),
                    cart: [ord]
                };
                orders.push(obj);
            }
        }
    };

    // Conectar a la base de datos ....

    console.log(orders);
};

export { iSUser, processProducts, processEvents, emailToBuyer, orderSeller };