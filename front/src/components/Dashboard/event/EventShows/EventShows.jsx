import './eventShows.scss';
import { useState, Fragment } from 'react';

const EventShows = ({ events }) => {
    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = (eventId) => {
        setShowDetails(prevState => ({
            ...prevState,
            [eventId]: !prevState[eventId]
        }));
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
                                <td>{event.name}</td>
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
                                                <button>Ver</button>
                                                <button>Editar</button>
                                                <button>Desactivar</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventShows;