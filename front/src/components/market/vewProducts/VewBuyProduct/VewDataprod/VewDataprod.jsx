import './vewDataprov.scss';
import { useState } from 'react';
import SweetAlert from '../../../../utils/SweetAlert';
import { useCartContext } from '../../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const VewDataprov = ({ product }) => {

    const { addToCart, isInCart, updateQuantity, cart } = useCartContext();
    const [isSweet, setIsSweet] = useState(false);
    const navigate = useNavigate();

    const handleAddToCart = (product, nav) => {

        const inCart = isInCart(product._id);
        setIsSweet(true);
        if (inCart) {
            updateQuantity(product._id, inCart.quantity + 1);
        } else {
            addToCart({
                _id: product._id,
                quantity: 1,
                price: product.price,
                is: 'product',
                name: product.name,
                description: product.description,
                img: product.img[0].imgUrl
            });
        };
        if (nav === 'nav') setTimeout(() => { navigate('/') }, 2000);
        else setTimeout(() => { navigate('/cart') }, 2000);
    };

    return (
        <div className='vewDataprov'>

            <div className='vewDataprovData'>
                <h4>{product.name}</h4>
                <div className='line'></div>
                <p>{product.description}</p>
                <p>${product.price} ar.</p>
                <p style={{ color: 'gray' }}>
                    {product.quantity > 0 && `Stock: ${product.quantity}`}
                    {product.quantity > 0
                        ? (product.quantity === 1 ? ' Unidad' : ' Unidades')
                        : 'Sin Stock'
                    }
                </p>
            </div>

            <div className='vewDataprovBtn'>
                {product.quantity > 0
                    ? <>
                        <button className='btnA' onClick={() => handleAddToCart(product, 'cart')}>Comprar ahora</button>
                        <button className='btnB' onClick={() => handleAddToCart(product, 'nav')}>Agregar al carrito</button>
                    </>
                    : <>
                        <p>No hay stock</p>
                        <button className='btnA'>Reservar</button>
                    </>
                }
            </div>
            {isSweet && <SweetAlert onClose={() => setIsSweet(false)} message={'Producto agregado al carrito'} />}
        </div>
    );
};

export default VewDataprov;