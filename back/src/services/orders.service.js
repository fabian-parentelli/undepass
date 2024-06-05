// import { orderRepository } from "../repositories/index.repositories.js";
// import { OrderNotFound } from '../utils/custom-exceptions.utils.js';
// import { sendEmail } from './email.service.js';

const newOrder = async (order) => {

    console.log(order);
    // Lo primero es que si no es usuario agregarlo a usuarios.
    // Si es usaurio fijarme si tiene address y postalCode, si no tiene actualizar.
    // para crear la orden: 
        // verificar que halla stock de entradas y de productos
        // quitar la cantidad vendida la base de datos de los eventos y los productos.
        // Crear la orden.
        // que en la base de datos diga pago procesando por detras false

    //----------------------------------------------------------------------------

    // En el front que cada usuario que se le halla vendido algo lo vea por plataforma
    // que le salte una alarma 
    // que pueda ver en su consola
    // y en el caso de que sea un producto que pueda enviar un msj al cliente. 

    // ----------------------------------------------------------------------------

    // que el que compró pueda ver su compra
        // estado del pago
        // Boton de arrepentimiento
};

export { newOrder };