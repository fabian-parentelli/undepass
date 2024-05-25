import './eventSite.scss';
import { useState, useEffect } from 'react';
import { getEventByIdApi } from '../../../../../helpers/events/getEventById.api.js';
import { updVewEventSiteApi } from '../../../../../helpers/sites/updVewEventSite.api.js';
import Load from '../../../../utils/Load.jsx';

const EventSite = ({ values, setValues }) => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            if (values && values.events) {
                const eventsData = await Promise.all(values.events.map(async (sit) => {
                    const response = await getEventByIdApi(sit.eventId);
                    return response;
                }));
                setEvents(eventsData);
            } else setEvents([]);
            setLoading(false);
        }; fetchEvents();
    }, [values]);

    const handleActive = async (id) => {
        setLoading(true);
        const obj = {
            siteId: values._id,
            eventId: id
        };
        const response = await updVewEventSiteApi(obj);
        if (response.status === 'success') setValues(response.result);
        setLoading(false);
    };

    return (
        <div className='eventSite'>
            {events.length === 0 ? (
                <p>No hay eventos</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Ciudad</th>
                            <th>Entrada</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((eve, index) => (
                            <tr key={eve._id}>
                                <td>{eve.name}</td>
                                <td>{eve.startEvent}</td>
                                <td>{eve.location.city}</td>
                                <td>{eve.tickets ? 'Paga' : 'Gratis'}</td>
                                <td
                                    data-label="Estado"
                                    className={`btnSite ${values.events[index].active ? 'active' : 'inactive'}`}
                                    onClick={() => handleActive(eve._id)}
                                >
                                    {values.events[index].active ? 'Activo' : 'Inactivo'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <Load loading={loading} />
        </div>
    );
};

export default EventSite;