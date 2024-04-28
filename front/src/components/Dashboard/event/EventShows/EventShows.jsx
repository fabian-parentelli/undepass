import './eventShows.scss';
import { useState, Fragment } from 'react';
import Pager from '../../../utils/Pager/Pager.jsx';
import { getAllEventsApi } from '../../../../helpers/events/getAllEvents.api.js';
import { updActiveEventApi } from '../../../../helpers/events/updateActiveEvent.api.js';
import { Link } from 'react-router-dom';

const EventShows = ({ events, setEvents, setLoading, thePage, setThePage }) => {

    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = (eventId) => {
        setShowDetails(prevState => ({ ...prevState, [eventId]: !prevState[eventId] }));
    };

    const handleChangePage = async (page) => {
        const response = await getAllEventsApi({ page: page });
        setEvents(response.result.docs);
        setThePage(response.result);
    };

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveEventApi(id);
        if (response.status === 'success') {
            const result = await getAllEventsApi({ active: null, category: null, tickets: null, location: null });
            if (result.status === 'success') {
                setEvents(result.result.docs);
                setThePage(response.result);
            };
        };
        setLoading(false);
    };

    return (
        <div className='eventShows'>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Nombre del Evento</th>
                        <th>Fecha de Inicio</th>
                        <th>Ciudad - Provincia</th>
                        <th>Tipo de Entrada</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {events && events.map(event => (
                        <Fragment key={event._id}>
                            <tr>
                                {event.active ? <td>{event.name}</td> : <td style={{ color: 'red' }}>{event.name}</td>}
                                <td>{event.startEvent}</td>
                                <td>{event.location.city} - {event.location.province}</td>
                                <td>{event.tickets ? 'Pagas' : 'Gratis'}</td>
                                <td>
                                    <button className="button" onClick={() => toggleDetails(event._id)}>
                                        {showDetails[event._id] ? 'Ocultar Detalles' : 'Ver Detalles'}
                                    </button>
                                </td>
                            </tr>
                            {showDetails[event._id] && (
                                <tr>
                                    <td colSpan="5">
                                        <div className='eventShowsInfo'>

                                            <div className='eventShowsInfoIn'>
                                                <p><span>Categoría:</span> {event.category}</p>
                                                <p><span>Fecha inicio:</span> {event.startEvent}</p>
                                                <p><span>Fecha fin:</span> {event.endEvent}</p>
                                                <p><span>Apto Menores:</span> {event.minors ? 'Si' : 'No'}</p>
                                                <p><span>Evento:</span> {event.type === 'public' ? 'Publico' : 'Privado'}</p>
                                            </div>

                                            <p><span>Description:</span> {event.description}</p>

                                            <div className='eventShowsInfoIn'>
                                                <p><span>Id Usuario:</span> {event.userId}</p>
                                                {event.guests && event.guests.map((gue, index) => (
                                                    <p key={index}><span>Invitado {index + 1}:</span> {gue}</p>
                                                ))}
                                            </div>

                                            <p><span>Video:</span> {event.video}</p>

                                            <div className='eventShowsInfoIn'>
                                                <p><span>Provincia:</span> {event.location.province}</p>
                                                <p><span>Municipio:</span> {event.location.municipality}</p>
                                                <p><span>Localidad:</span> {event.location.city}</p>
                                                <p><span>Dirección:</span> {event.location.address}</p>
                                            </div>

                                            <div className='eventShowsInfoIn'>
                                                <p><span>Lugar:</span> {event.location.place}</p>
                                                <p><span>Latitud:</span> {event.location.coordinates.lat}</p>
                                                <p><span>Longitud:</span> {event.location.coordinates.lon}</p>
                                            </div>

                                            {event.ticketInfo && event.ticketInfo.map((tick, index) => (
                                                <div className='eventShowsInfoIn' key={index}>
                                                    <p><span>Tipo:</span> {tick.type}</p>
                                                    <p><span>Descripción:</span> {tick.description}</p>
                                                    <p><span>precio:</span> ${tick.price}</p>
                                                    <p><span>Cupos:</span> ${tick.quantity}</p>
                                                    <p><span>Cierre de venta:</span> ${tick.hourEnd}</p>
                                                </div>
                                            ))}

                                            <div className='eventShowsButton'>
                                                <Link to={`/vewevent/${event._id}`}><button>Ver</button></Link>
                                                <Link to={`/dashboard/updevent/${event._id}`}><button>Editar</button></Link>
                                                <button
                                                    onClick={() => handleActive(event._id)}
                                                >{event.active ? 'Desactivar' : 'Activar'}</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
            <Pager users={thePage} HandleChangePage={handleChangePage} />
        </div>
    );
};

export default EventShows;