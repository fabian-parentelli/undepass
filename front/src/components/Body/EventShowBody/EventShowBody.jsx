import './eventShowBody.scss';
import { useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { getAllEventsApi } from '../../../helpers/events/getAllEvents.api.js';
import ChekPhoto from '../../event/NewEvent/ChekOut/CheckPhoto/CheckPhoto.jsx';

const EventShowBody = ({ events, setEvents, setLoading }) => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllEventsApi({ active: true });
            setEvents(response.result.docs);
        }; fetchData();
    }, []);

    return (
        <div className='eventShowBody'>

            {events && events.map((eve) => (
                <div key={eve._id} className='cardEvent'>
                    <ChekPhoto values={eve} />
                    <div className='cardInEvent'>
                        <h4>{eve.name}</h4>
                        <div className='textCardEvent'>
                            <CalendarMonthIcon className='icon' />
                            <p>{eve.startEvent}</p>
                        </div>
                        <div className='line'></div>

                        <div className='textCardEvent'>
                            <ConfirmationNumberIcon className='icon' />
                            {eve.tickets ?
                                (eve.ticketInfo.some(ticket => ticket.quantity === 0) ?
                                    'Entradas agotadas' :
                                    `Desde $${eve.ticketInfo.reduce((minPrice, ticket) => Math.min(minPrice, ticket.price), Infinity)}`
                                ) : 'Adquirir Entradas'
                            }
                        </div>
                        <div className='line'></div>

                        <div className='textCardEvent'>
                            <LocationOnIcon className='icon' />
                            <p>{eve.location.place}</p>
                        </div>
                    </div>
                    <button className='btnEventBody'>
                        {eve.tickets ?
                            (eve.ticketInfo.some(ticket => ticket.quantity === 0) ?
                                'Entradas agotadas' :
                                `Comprar entradas`
                            ) : 'Adquirir Entradas'
                        }
                    </button>
                </div>
            ))}
        </div>
    );
};

export default EventShowBody;