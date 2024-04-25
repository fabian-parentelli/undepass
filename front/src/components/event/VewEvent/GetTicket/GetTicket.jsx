import './getTicket.scss';
import { useEffect, useState } from 'react';
import { getEventByIdApi } from '../../../../helpers/events/getEventById.api.js';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChekPhoto from '../../NewEvent/ChekOut/CheckPhoto/CheckPhoto.jsx';
import MapView from '../../../utils/MapVew/MapVew.jsx';

const GetTicket = ({ id, setLoading }) => {

    const [events, setEvents] = useState(null);

    useEffect(() => {
        const fetchData = async (id) => {
            setLoading(true);
            const respose = await getEventByIdApi(id);
            setEvents(respose);
            setLoading(false);
        }; fetchData(id);
    }, []);

    return (
        <div className='getTicket'>
            {events &&
                <>
                    <div className='getTicketTitle'>
                        <div className='getTicketTitleCont'>
                            <h2>{events.name}</h2>
                            <div className='getTicketDiv'>
                                <CalendarMonthIcon />
                                <p>{events.startEvent}</p>
                            </div>
                        </div>
                        <div className='getTicketTitleContR'>
                            <LocationOnIcon style={{ fontSize: '2.4rem' }} />
                            <div className='getTicketDiv'>
                                <p>{events.location.address} - {events.location.place}</p>
                                <p>{events.location.city} - {events.location.province}</p>
                            </div>
                        </div>
                    </div>

                    <div className='getTicketLine'></div>

                    <form className='tableForm'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo de entrada</th>
                                    <th>Valor</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.ticketInfo.map((tick) => (
                                    <tr key={tick._id} className='tickets'>
                                        <th>{tick.type} <br /> <span>{tick.description}</span></th>
                                        <th>{tick.price}</th>
                                        <th>
                                            {tick.quantity > 0 ?
                                                <select name="" className='getTicketSelect'>
                                                    <option value=""></option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                </select>
                                                : <p className='soldOut'>Agotadas</p>
                                            }
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='getTicketButon'>
                            <button>Comprar</button>
                        </div>
                    </form>

                    <div className='getTicketPictures'>
                        <div className='boxMap'>
                            <ChekPhoto values={events} />
                        </div>
                        <div className='boxMap' id='imgMap'>
                            <MapView coordinates={events.location.coordinates} />
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default GetTicket;