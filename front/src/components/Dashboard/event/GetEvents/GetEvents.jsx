import { useState } from 'react';
import './getAdminEvents.scss';
import Load from '../../../utils/Load';
import GetEventFilters from './GetEventFilters/GetEventFilters';
import EventShows from '../EventShows/EventShows';
import SerachEvent from '../../../event/SearchEvet/SearchEvent';

const GetEvents = () => {

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);
    const [thePage, setThePage] = useState(null);


    return (
        <div className='getAdminEvents'>
            <div className='getAdminEventsTitle'>
                <h2>Eventos</h2>
                <SerachEvent setEvents={setEvents} setLoading={setLoading} />
            </div>
            <div className='line'></div>

            <GetEventFilters setEvents={setEvents} setLoading={setLoading} setThePage={setThePage} />
            {events &&
                <EventShows
                    events={events}
                    setEvents={setEvents}
                    setLoading={setLoading}
                    thePage={thePage}
                    setThePage={setThePage}
                />
            }
            <Load loading={loading} />
        </div>
    );
};

export default GetEvents;