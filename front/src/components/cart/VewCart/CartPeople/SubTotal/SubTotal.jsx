import './subTotal.scss';
import { useEffect, useState } from 'react';
import NumToString from '../../../../utils/NumberToString';
import { useCartContext } from '../../../../../context/CartContext';

const SubTotal = ({ thereAreP }) => {

    const { totalCart } = useCartContext();

    return (
        <div className='subTotal'>
            <h2>Orden de compra</h2>
            <div className='line' style={{ background: 'rgb(219, 219, 219)' }}></div>

            <div className='subTotalDiv'>

                <div className='subTotalP'>
                    <p>sub-Total</p>
                    <p>${totalCart()}</p>
                </div>

                <div className='subTotalP'>
                    <p>comisión 10%</p>
                    <p>${totalCart() * 10 / 100}</p>
                </div>

                {thereAreP &&
                    <p className='ptext'>El costo del envio de un producto corre por cuenta del comprador.</p>
                }

                <div className='subTotalP' style={{ color: '#f45c14' }}>
                    <p>Total</p>
                    <p>${(totalCart() * 10 / 100) + (totalCart())}</p>
                </div>

                <NumToString number={(totalCart() * 10 / 100) + (totalCart())} />

                <div className='line' style={{ background: 'rgb(219, 219, 219)' }}></div>
            </div>
        </div>
    );
};

export default SubTotal;