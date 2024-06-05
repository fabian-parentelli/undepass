import './notUserInputs.scss';
import { useCartContext } from '../../../../../../context/CartContext';
import ThereAreproduct from '../../ThereAreProduct/ThereAreproduct';
import { useEffect, useState } from 'react';

const NotUserInputs = ({ values, setValues }) => {

    const { isProduct, cart } = useCartContext();
    const [thereAreP, setThereAreP] = useState(false);
    
    useEffect(() => { setThereAreP(isProduct()) }, [cart]);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    return (
        <div className='notUserInputs'>

            <input
                type="text"
                placeholder='Nombre completo'
                required
                name='name'
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder='Email'
                required
                name='email'
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder='Teléfono'
                required
                name='phone'
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder='Documento de Identidad'
                required
                name='dni'
                onChange={handleChange}
            />

            {thereAreP && <ThereAreproduct values={values} setValues={setValues} />}

        </div>
    );
};

export default NotUserInputs;