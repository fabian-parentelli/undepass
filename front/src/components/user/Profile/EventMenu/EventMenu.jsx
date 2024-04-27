import { Link } from 'react-router-dom';
import './eventMenu.scss';
import { useLoginContext } from '../../../../context/LoginContext';
import { useEffect, useState } from 'react';

const EventMenu = () => {

    const { user } = useLoginContext();
    const [values, setValues] = useState(null);

    useEffect(() => {
        const fetchData = async (id) => {
            // LLamado a la base de dato, obtener los eventos con el userId....


        }; fetchData(user.data._id)
    }, []);

    return (
        <div className='eventMenu'>
            <div className='eventMenuTitle'>
                <div>
                    <h2>Eventos</h2>
                    <p>Configuración de tus eventos.</p>
                </div>
                <p className='pHelp'>Ayuda</p>
            </div>
            <div className='line'></div>
            <Link to={'/newevent_user'}><button className='eventMenuBtn'>Crear</button></Link>
        </div>
    );
};

export default EventMenu;