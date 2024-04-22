import './tikets.scss';
import { useState } from 'react';
import TiketInput from './TiketInput/TicketInput';
import { updTicketApi } from '../../../../helpers/events/updTiket.api.js';

const Tikets = ({ events, setLoading, setIsWindox }) => {

    const [tickets, setTikets] = useState([]);

    const handleClick = async () => {
        if(tickets && events) {
            setLoading(true);
            const response = await updTicketApi(tickets, events._id);
            if(response.status === 'success') {
                setLoading(false);
                setIsWindox('chekOut');
            };
        };
    };

    return (
        <div className='tikets'>
            <h4>Información de Tickets</h4>
            <div className='ticketsContainer'>
                <TiketInput
                    tickets={tickets}
                    setTikets={setTikets}
                />
                <div className='ticketVew'>
                    {tickets.length > 0 &&
                        tickets.map((tic, index) => (
                            <div key={index} className='tikV'>
                                <p><span>Entrada: </span>{tic.type}</p>
                                <p>{tic.description}</p>
                                <p><span>Precio: $</span>{tic.price}</p>
                                <p><span>Cupos: </span>{tic.quantity}</p>
                                <p><span>Hasta: </span>{tic.hourEnd}HS</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            {tickets.length > 0 && <button className='btn' onClick={handleClick}>Enviar</button>}
        </div>
    );
};

export default Tikets;