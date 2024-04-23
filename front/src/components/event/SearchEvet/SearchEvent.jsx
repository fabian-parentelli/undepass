import './serachEvent.scss';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { getAllEventsApi } from '../../../helpers/events/getAllEvents.api.js';
import { getEventSearchApi } from '../../../helpers/events/getEventSearch.api.js';

const SerachEvent = ({ setEvents, setLoading }) => {
    
    const [values, setValues] = useState('');

    const handleChange = async (e) => {
        const { value } = e.target;
        setValues(value);
        const response = await getEventSearchApi(value);
        if (response.status === 'success') {
            setLoading(true);
            setEvents(response.result.docs);
        } else {
            setLoading(true)
            const response = await getAllEventsApi({ active: true });
            if (response.status === 'success') setEvents(response.result.docs);
        }
        setLoading(false);
    };

    const handleClear = async () => {
        setLoading(true);
        setValues('');
        const response = await getAllEventsApi({ active: true });
        if (response.status === 'success') {
            setEvents(response.result.docs); 
        };
        setLoading(false);
    };

    return (
        <div className='serachEvent'>
            <SearchIcon className='glass' />
            <input
                type="text"
                value={values}
                onChange={handleChange}
            />
            {values && <ClearIcon className='clear' onClick={handleClear} />}
        </div>
    );
};

export default SerachEvent;
