import './marketUser.scss';
import NewProduct from "../NewProduct/NewProduct";
import { useLoginContext } from "../../../context/LoginContext";
import isAdult from '../../utils/isAdult';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotAdult from './NotAdult/NotAdult';

const MarketUser = () => {

    const { user } = useLoginContext();
    const [adult, setAdult] = useState(false);

    useEffect(() => {
        const data = isAdult(user.data.birthday);
        setAdult(data);
    }, [user]);

    return (
        <div className='marketUser'>
            {adult 
                ? (user && user.data && user.data.financeData 
                    ? <NewProduct user={user.data._id} />
                    : <div className='marketUserDiv'>
                        <p>No tienes datos financieros registrados.</p>
                        <p>Entra a este link <Link to={'/profile/yourdata'} className='marketUserDivLink'>Aquí</Link> para configurar tus datos financieros.</p>
                        <p className='marketUserDivP'>Se rquieren de estos datos para poder transferirte el pago del producto.</p>
                    </div>
                )
                : <NotAdult />
            }
        </div>
    );
};

export default MarketUser;