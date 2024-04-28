import './eventMenu.scss';
import { Link } from 'react-router-dom';
import Load from '../../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import ListEventMenu from './ListEventMenu/ListEventMenu.jsx';
import ChekOut from '../../../event/NewEvent/ChekOut/ChekOut.jsx';
import { useLoginContext } from '../../../../context/LoginContext';
import { getAllEventsApi } from '../../../../helpers/events/getAllEvents.api.js';
import UpdateTickets from '../../../event/UpdateTicket/UpdateTicket.jsx';

const EventMenu = () => {

    const { user } = useLoginContext();
    const [values, setValues] = useState(null);
    const [loading, setLoading] = useState(false);
    const [vew, setVew] = useState('');
    const [thisEvent, setThisEvent] = useState(null);

    useEffect(() => {
        const fetchData = async (id) => {
            const response = await getAllEventsApi({ active: true, userId: id });
            if (response.status === 'success') {
                setValues(response.result);
            };
        }; fetchData(user.data._id);
    }, []);

    return (
        <div className='eventMenu'>

            <div className='eventMenuTitle'>
                <div>
                    <h2>Eventos</h2>
                    <p>Configuración de tus eventos.</p>
                </div>
                <Link to={'/help#eventProfilHelp'} style={{textDecoration: 'none'}}><p className='pHelp'>Ayuda</p></Link>
            </div>
            <div className='line'></div>

            <div className='eventMenuButton'>
                <Link to={'/newevent_user'}><button className='eventMenuBtn'>Crear</button></Link>
                <button className='eventMenuBtn' onClick={()=> setVew('vewEvent')}>Ver</button>
                <button className='eventMenuBtn' onClick={()=> setVew('')}>Ventas</button>
            </div>

            {vew === 'vewEvent' && values && 
                <ListEventMenu 
                    values={values} 
                    setValues={setValues} 
                    setVew={setVew} 
                    setThisEvent={setThisEvent}
                    setLoading={setLoading}
                />
            }
            {vew === 'checkOut' && values && <ChekOut events={thisEvent} setLoading={setLoading} />  }
            {vew === 'tickets' && thisEvent && <UpdateTickets events={{ _id: thisEvent }} setLoading={setLoading}  /> }

            <Load loading={loading} />
        </div>
    );
};

export default EventMenu;