import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ChekPhoto from '../../event/NewEvent/ChekOut/CheckPhoto/CheckPhoto.jsx';

const EventCard = ({eve, handleClick }) => {

    return (
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
                        (eve.ticketInfo.every(ticket => ticket.quantity <= 0) ?
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
            <button
                className='btnEventBody'
                onClick={() => handleClick(eve._id)}
                style={eve.tickets && eve.ticketInfo.every(ticket => ticket.quantity <= 0) ? { background: 'gray' } : {}}
            >
                {eve.tickets ?
                    (eve.ticketInfo.every(ticket => ticket.quantity <= 0) ?
                        'Entradas agotadas' :
                        `Comprar entradas`
                    ) : 'Adquirir Entradas'
                }
            </button>
        </div>
    );
};

export default EventCard;