import './isUser.scss';
import { useEffect, useState } from 'react';
import SubTotal from '../SubTotal/SubTotal';
import { useNavigate } from 'react-router-dom';
import IsUserInputs from './IsUserInputs/IsUserInputs';
import { newOrdersApi } from '../../../../../helpers/orders/newOrders.api.js';
import { useCartContext } from '../../../../../context/CartContext.jsx';

const IsUser = ({ thereAreP, user, cart, setLoading }) => {

    const { emptyCart } = useCartContext();

    const [values, setValues] = useState({
        name: user.name || '', phone: user.phone || '', email: user.email || '', dni: '',
        userId: user._id || '',
        cart,
        location: {
            city: user.location.city || '',
            address: '', postalCode: '',
            municipality: user.location.municipality || '',
            province: user.location.province || ''
        }
    });
    const [message, setMessage] = useState(false);
    const navigate = useNavigate();

    useEffect(() => { setValues({ ...values, cart }) }, [cart]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (thereAreP && !values.location.city) {
            setMessage(true);
            setTimeout(() => { setMessage(false) }, 2000);
        } else {
            setMessage(false);
            const response = await newOrdersApi(values);
            if(response.status === 'success') {
                emptyCart();
                alert('Orden generada ahora a pagarla');
                setTimeout(() => { navigate('/') }, 2000); // Cambiara a la pasarela de pago.....
            };
            setLoading(false);
        };
    };

    return (
        <form className='isUser' onSubmit={handleSubmit}>
            <SubTotal thereAreP={thereAreP} />
            <IsUserInputs values={values} setValues={setValues} thereAreP={thereAreP} />
            <button className='btnForm'>Comprar</button>
            {message && <p className='textMessage'>Debes ingresar los datos de localización para poder avanzar</p>}
        </form>
    );
};

export default IsUser;