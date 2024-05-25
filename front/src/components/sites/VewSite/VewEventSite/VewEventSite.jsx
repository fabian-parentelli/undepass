import './vewEventSite.scss';
import { useEffect, useState } from 'react';
import { getEventByIdApi } from '../../../../helpers/events/getEventById.api.js';
import EventCard from '../../../Body/EventShowBody/EventCard.jsx';
import { useNavigate } from 'react-router-dom';

const VewEventSite = ({ siteEvents }) => {

    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await Promise.all(siteEvents.map(async (sit) => {
                if (sit.active) {
                    const response = await getEventByIdApi(sit.eventId);
                    return response;
                };
            }));
            setEvents(eventsData);
        }; fetchEvents();
    }, [siteEvents]);


    const handleClick = (id) => {
        navigate(`/vewevent/${id}`)
    };

    return (
        <div className='eventShowBody'>
            {events && events.map((eve, index) => (
                <div key={index}>
                    {eve && eve.active &&
                        <EventCard
                            eve={eve}
                            handleClick={handleClick}
                        />
                    }
                </div>
            ))}
        </div>
    );
};

export default VewEventSite;