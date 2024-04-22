import './newEvents.scss';
import Load from '../../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import NotId from '../../users/UpdateUser/NotId/NotId';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { getUserByIdApi } from '../../../../helpers/users/getUserById.api.js';
import NewEvent from '../../../event/NewEvent/NewEvent.jsx';

const NewEvents = () => {

    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async (userId) => {
            if (userId) {
                setLoading(true);
                const response = await getUserByIdApi(userId);
                if (response.status === 'success') setUser(response.result);
                setLoading(false);
            };
        }; fetchData(userId);
    }, [userId]);

    return (
        <div className='newEventsDash'>
            <div className='newEventsDashTitle'>
                <ConfirmationNumberIcon style={{ fontSize: '5rem' }} />
                <div>
                    <h2>Crear Eventos</h2>
                    <p>Buscar un usuario y crearle el evento.</p>
                </div>
            </div>
            <div className='newEventsDashLine'></div>
            <NotId setLoading={setLoading} setUserId={setUserId} />
            {user &&
                <div className='newEventsDashfinanceDate'>
                    <p><span>Nombre: </span>{user.name}</p>
                    <p><span>Usuario</span> {user.active ? 'activo' : 'inactivo'}</p>
                    <p><span>Datos financieros:</span> {user.financeData ? user.financeData : 'No posee'}</p>
                </div>
            }
            <div className='newEventsDashLine'></div>
            {user && <NewEvent user={user} />}
            <Load loading={loading} />
        </div>
    );
};

export default NewEvents;