import './presetsComp.scss';
import { useEffect, useState } from 'react';
import PreSetEvent from '../../../../utils/PreSetEvent/PreSetEvent';
import { updPreset } from '../../../../../helpers/events/updPreset.api.js';
import { getImgEventApi } from '../../../../../helpers/avatars/getImgEvent.api.js';

const PresetsComp = ({ user, setIsWindox, events, setLoading }) => {

    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getImgEventApi();
            if (response.status === 'success') setPictures(response.result);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleClick = async (id) => {
        setLoading(true);
        const response = await updPreset({ eventId: events._id, style: id });
        if(response.status === 'success') {
            setLoading(false);
            if(events.tickets) setIsWindox('tickets');
            else setIsWindox('chekOut');
        } else console.log(response);
    };

    return (
        <div className='presetsComp'>
            <h3>Elige un pre-set</h3>
            <div className='presetsCards'>
                {pictures && events &&
                    pictures.map((ev, index) => (
                        <div key={index} className='presetDiv'>
                            <PreSetEvent comp={ev.style} data={events} />
                            <button onClick={() => handleClick(ev.style)}>Elegir</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PresetsComp;