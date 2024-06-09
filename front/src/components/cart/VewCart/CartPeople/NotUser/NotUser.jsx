import './notUser.scss';
import { useState, useEffect } from 'react';
import SubTotal from '../SubTotal/SubTotal';
import { useNavigate } from 'react-router-dom';
import NotUserInputs from './NotUserInputs/NotUserInputs';
import { newOrdersApi } from '../../../../../helpers/orders/newOrders.api';
import { useCartContext } from '../../../../../context/CartContext';

const NotUser = ({ thereAreP, cart, setLoading }) => {

    const { emptyCart } = useCartContext();

    const [values, setValues] = useState({
        name: '', phone: '', email: '', dni: '', cart,
        location: { city: '', address: '', postalCode: '', municipality: '', province: '' }
    });
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();

    useEffect(() => { setValues({ ...values, cart }) }, [cart]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (thereAreP && !values.location.city) {
            setMessage(true);
            setTimeout(() => { setMessage(false) }, 2000);
        } else {
            setMessage(false);
            setLoading(true);
            const response = await newOrdersApi(values);
            if(response.status === 'success') {
                emptyCart();
                alert('Orden Creada, ahora a generar el pago');
                setTimeout(() => { navigate('/') }, 2000); // Cambiar a la pasarela de pago.......
            };
            setLoading(false);
        };
    };

    return (
        <form className='notUser' onSubmit={handleSubmit}>
            <SubTotal thereAreP={thereAreP} />
            <NotUserInputs values={values} setValues={setValues} />
            <button className='btnForm'>Comprar</button>
            {message && <p className='textMessage'>Debes ingresar los datos de localización para poder avanzar</p>}
        </form>
    );
};

export default NotUser;