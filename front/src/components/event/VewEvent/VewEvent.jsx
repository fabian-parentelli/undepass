import './vewEvent.scss';
import Load from '../../utils/Load.jsx';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import GetTicket from './GetTicket/GetTicket.jsx';

const VewEvent = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [interval, setInterval] = useState('getTicket');



    return (
        <div className='vewEvent'>
            {interval === 'getTicket' &&
                <GetTicket
                    id={id}
                    setLoading={setLoading}
                />
            }

            <Load loading={loading} />
        </div>
    );
};

export default VewEvent;