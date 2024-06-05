import './cartItems.scss';
import { useEffect, useState } from 'react';
import { useCartContext } from '../../../../context/CartContext';
import CartProducts from './CartProducts/CartProducts.jsx';
import CartEvents from './CartEvents/CartEvents.jsx';

const CartItems = () => {

    const { cart } = useCartContext();

    return (
        <div className='cartItems'>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((prod, index) => (
                        prod.is === 'product'
                            ? <CartProducts key={index} prod={prod} />
                            : (
                                prod.is === 'event'
                                    ? <CartEvents key={index} prod={prod} />
                                    : 'Turno'
                            )
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default CartItems;