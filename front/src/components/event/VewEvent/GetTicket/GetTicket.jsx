import './getTicket.scss';
import { useEffect, useState } from 'react';
import { getEventByIdApi } from '../../../../helpers/events/getEventById.api.js';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChekPhoto from '../../NewEvent/ChekOut/CheckPhoto/CheckPhoto.jsx';
import MapView from '../../../utils/MapVew/MapVew.jsx';
import GetTicketForm from './GetTicketForm.jsx';
import GetTicketPrivate from './GetTicketPrivate.jsx';
import VideosVew from '../../../utils/VideosVew/VideosVew.jsx';

const GetTicket = ({ id, setLoading }) => {

    const [events, setEvents] = useState(null);
    const [isPublic, setIsPublic] = useState(true);

    useEffect(() => {
        const fetchData = async (id) => {
            setLoading(true);
            const respose = await getEventByIdApi(id);
            setEvents(respose);
            setLoading(false);
        }; fetchData(id);
    }, []);

    useEffect(() => { if (events && events.type === 'private') setIsPublic(false) }, [events]);

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

                    {isPublic
                        ? <GetTicketForm events={events} />
                        : <GetTicketPrivate events={events} setIsPublic={setIsPublic} setLoading={setLoading} />
                    }

                    <div className='getTicketPictures'>
                        <div className='boxMap'>
                            <ChekPhoto values={events} />
                        </div>
                        <div className='boxMap' id='imgMap'>
                            <MapView coordinates={events.location.coordinates} />
                        </div>
                    </div>

                    <div className='getTicketLine'></div>

                    {events.guests[0] &&
                        <div className='guestsCont'>
                            <p><strong>Invitados:</strong></p>
                            <div className='guests'>
                                {events.guests.map((guest, index) => (
                                    <p key={index}>{guest}</p>
                                ))}
                            </div>
                        </div>
                    }

                    <div className='guestsCont' style={{ marginTop: '2rem' }}>
                        <p className='guestsContP'>{events.description}</p>
                    </div>

                    <div className='guestsCont' style={{ marginTop: '2rem' }}>
                        <p><strong>{events.minors ? 'Apto todo público.' : 'Solo apto mayores de 18 años.'}</strong></p>
                    </div>

                    {events.video &&
                        <div className='videoCont'>
                            <VideosVew url={events.video} />
                        </div>
                    }
                </>
            }
        </div >
    );
};

export default GetTicket;