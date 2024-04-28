import './updateEventAd.scss';
import { useState } from 'react';
import Load from '../../../utils/Load.jsx'
import { useParams } from 'react-router-dom';
import ChekOut from '../../../event/NewEvent/ChekOut/ChekOut.jsx';
import UpdateTickets from '../../../event/UpdateTicket/UpdateTicket.jsx';

const UpdateEventAd = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [vewEvent, setVewEvent] = useState(true);

    return (
        <div className='updateEventAd'>
            <h2>Update de Eventos</h2>
            <div className='line'></div>

            <button className='updateEventAdBtn' onClick={()=> setVewEvent(!vewEvent)}>
                {vewEvent ? 'Ver Entradas' : 'Ver Evento'}
            </button>

            {vewEvent && id && <ChekOut events={{ _id: id }} setLoading={setLoading} />}
            {!vewEvent && id && <UpdateTickets events={{ _id: id }} setLoading={setLoading} />}

            <Load loading={loading} />
        </div>
    );
};

export default UpdateEventAd;