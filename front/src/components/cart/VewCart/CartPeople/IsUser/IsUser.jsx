import './isUser.scss';
import { useEffect, useState } from 'react';
import SubTotal from '../SubTotal/SubTotal';
import IsUserInputs from './IsUserInputs/IsUserInputs';

const IsUser = ({ thereAreP, user, cart }) => {

    const [values, setValues] = useState({
        name: user.name || '', phone: user.phone || '', email: user.email || '', dni: '',
        _id: user._id || '',
        cart,
        location: {
            city: user.location.city || '',
            address: '', postalCode: '',
            municipality: user.location.municipality || '',
            province: user.location.province || ''
        }
    });
    const [message, setMessage] = useState(false);

    useEffect(() => { setValues({ ...values, cart }) }, [cart]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (thereAreP && !values.location.city) {
            setMessage(true);
            setTimeout(() => { setMessage(false) }, 2000);
        } else {
            setMessage(false);

            console.log(values); // Llamar acá a la base de datos .................
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