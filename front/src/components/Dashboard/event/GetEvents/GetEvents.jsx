import { useState } from 'react';
import './getAdminEvents.scss';
import Load from '../../../utils/Load';
import GetEventFilters from './GetEventFilters/GetEventFilters';
import EventShows from '../EventShows/EventShows';

const GetEvents = () => {

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);

    // Recoradar cambiar la p por un buscador de eventos ........
    return (
        <div className='getAdminEvents'>
            <div className='getAdminEventsTitle'>
                <h2>Eventos</h2>
                <p>Un Buscador acá</p>
            </div>
            <div className='line'></div>

            <GetEventFilters setEvents={setEvents} setLoading={setLoading} />
            {events && <EventShows events={events} />}

            <Load loading={loading} />
        </div>
    );
};

export default GetEvents;