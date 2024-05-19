import Load from '../../utils/Load.jsx';
import Banner from './Banner/Banner.jsx';
import { useEffect, useState } from 'react';
import Tickets from './Tickets/Tickets.jsx';
import NewEventHtml from './NewEventHtml/NewEventHml';
import { getCoordApi } from '../../../helpers/cities/getCoord.api.js';
import { newEventInfoApi } from '../../../helpers/events/newEventInfo.api.js';
import ChekOut from './ChekOut/ChekOut.jsx';

const NewEvent = ({ user }) => {

    const [events, setEvent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isWindow, setIsWindox] = useState('dates');
    const [values, setValues] = useState({
        type: '', name: '', category: '', description: '',
        startEvent: '', endEvent: '',
        location: { province: '', locality: '', city: '', address: '', coordinates: '', place: '' },
        video: '', minors: '', guests: '',
        tickets: '', userId: '', password: ''
    });

    useEffect(() => { setValues({ ...values, userId: user._id }) }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const locationPrefixes = ['location.', 'address', 'place'];
        const isLocationProperty = locationPrefixes.some(prefix => name.startsWith(prefix));
        if (isLocationProperty) {
            if (name.includes('.')) {
                const [locationKey, nestedKey] = name.split('.');
                setValues(prevState => ({ ...prevState, location: { ...prevState.location, [nestedKey]: value } }));
            } else setValues(prevState => ({ ...prevState, location: { ...prevState.location, [name]: value } }));
        } else if (name.startsWith('photo.')) {
            const [photoKey, nestedKey] = name.split('.');
            setValues(prevState => ({ ...prevState, photo: { ...prevState.photo, [nestedKey]: value } }));
        } else setValues(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newEventInfoApi(values);
        if (response.status === 'success') {
            setEvent(response.result);
            setLoading(false);
            setIsWindox('banner');
        };
    };

    const handleCoord = async () => {
        if (!values.location.coordinates) {
            const response = await getCoordApi(values.location);
            if (response.status === 'success') {
                setValues(prevState => ({
                    ...prevState, location: { ...prevState.location, coordinates: response.coordinates }
                }));
            };
        }
    };

    return (
        <>
            {isWindow === 'dates' &&
                <NewEventHtml
                    handleChange={handleChange}
                    setValues={setValues}
                    handleSubmit={handleSubmit}
                    handleCoord={handleCoord}
                    values={values}
                    user={user}
                />
            }

            {isWindow === 'banner' &&
                <Banner
                    user={user}
                    setIsWindox={setIsWindox}
                    events={events}
                    setLoading={setLoading}
                />
            }

            {isWindow === 'tickets' &&
                <Tickets
                    events={events}
                    setLoading={setLoading}
                    setIsWindox={setIsWindox}
                />
            }

            {isWindow === 'chekOut' &&
                <ChekOut 
                    events={events}
                    setLoading={setLoading}
                    setIsWindox={setIsWindox}
                />
            }
            <Load loading={loading} />
        </>
    );
};

export default NewEvent;