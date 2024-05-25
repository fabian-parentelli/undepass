import './eventShowBody.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pager from '../../utils/Pager/Pager.jsx';
import { getAllEventsApi } from '../../../helpers/events/getAllEvents.api.js';
import EventCard from './EventCard.jsx';

const EventShowBody = ({ events, setEvents, setLoading }) => {

    const [thePage, setThePage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllEventsApi({ active: true });
            setEvents(response.result.docs);
            setThePage(response.result);
        }; fetchData();
    }, []);

    const handleChangePage = async (page) => {
        const response = await getAllEventsApi({ page: page, active: true });
        setEvents(response.result.docs);
        setThePage(response.result);
    };

    const handleClick = (id) => {
        navigate(`/vewevent/${id}`)
    };

    return (
        <>
            <div className='eventShowBody'>
                {events && events.map((eve) => (
                    <div key={eve._id}>
                        {eve.active &&
                            <EventCard 
                                eve={eve} 
                                handleClick={handleClick}
                            />
                        }
                    </div>
                ))}
            </div>

            {thePage && <Pager users={thePage} HandleChangePage={handleChangePage} />}
        </>
    );
};

export default EventShowBody;