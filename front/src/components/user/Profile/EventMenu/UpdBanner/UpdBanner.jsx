import './updBanner.scss';
import { useEffect, useState } from 'react';
import Load from '../../../../utils/Load.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import Banner from '../../../../event/NewEvent/Banner/Banner.jsx';
import { useLoginContext } from '../../../../../context/LoginContext.jsx';
import { getEventByIdApi } from '../../../../../helpers/events/getEventById.api.js';

const UpdBanner = () => {

    const { user } = useLoginContext();
    const { eventId } = useParams();
    const navigate = useNavigate();
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isWindowx, setIsWindox] = useState('');

    useEffect(() => {
        console.log(isWindowx);
        if (isWindowx === 'tickets' || isWindowx === 'chekOut') navigate('/profile');
    }, [isWindowx]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getEventByIdApi(eventId);
            setEvents(response);
        }; fetchData();
    }, [eventId]);

    return (
        <div className='updBanner'>
            <Banner
                user={user}
                events={events}
                setLoading={setLoading}
                setIsWindox={setIsWindox}
            />
            <Load loading={loading} />
        </div>
    );
};

export default UpdBanner;