import './notUser.scss';
import { useState, useEffect } from 'react';
import SubTotal from '../SubTotal/SubTotal';
import NotUserInputs from './NotUserInputs/NotUserInputs';
import { newOrdersApi } from '../../../../../helpers/orders/newOrders.api';

const NotUser = ({ thereAreP, cart }) => {

    const [values, setValues] = useState({
        name: '', phone: '', email: '', dni: '', cart,
        location: { city: '', address: '', postalCode: '', municipality: '', province: '' }
    });
    const [message, setMessage] = useState(false);

    useEffect(() => { setValues({ ...values, cart }) }, [cart]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (thereAreP && !values.location.city) {
            setMessage(true);
            setTimeout(() => { setMessage(false) }, 2000);
        } else {
            setMessage(false);
            
            const response = await newOrdersApi(values);

            console.log(values); // Llamar acá a la base de datos .................
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