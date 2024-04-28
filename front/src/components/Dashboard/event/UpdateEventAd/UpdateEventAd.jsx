import './updateEventAd.scss';
import { useState } from 'react';
import Load from '../../../utils/Load.jsx'
import { useParams } from 'react-router-dom';
import ChekOut from '../../../event/NewEvent/ChekOut/ChekOut.jsx';

const UpdateEventAd = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    return (
        <div className='updateEventAd'>
            <h2>Update de Eventos</h2>
            <div className='line'></div>

            {id && <ChekOut events={{ _id: id }} setLoading={setLoading} />}
            <Load loading={loading} />
        </div>
    );
};

export default UpdateEventAd;