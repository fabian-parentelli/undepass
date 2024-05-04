import './body.scss';
import Load from '../utils/Load';
import { useState } from 'react';
import Banners from './Banners/Banners';
import DoorPanel from './DoorPanel/DoorPanel';
import PnaelSearch from './PanelSearch/PanelSearch';
import { useLoginContext } from '../../context/LoginContext';
import EventShowBody from './EventShowBody/EventShowBody';

const Body = () => {

    const { user } = useLoginContext();
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);

    return (
        <div className='body'>
            {user && user.data && user.data.role === 'admin' && <DoorPanel />}
            <div className='bannerDiv'><Banners /> </div>
            <div className='panelSearch'><PnaelSearch setEvents={setEvents} setLoading={setLoading} /> </div>
            
            {events ? <EventShowBody events={events} setEvents={setEvents} setLoading={setLoading} /> : ''}

            <div className='bannerOne'>
                <img src='newLog.png' alt='Pasarela' />
            </div>

            <Load loading={loading} />
        </div>
    );
};

export default Body;