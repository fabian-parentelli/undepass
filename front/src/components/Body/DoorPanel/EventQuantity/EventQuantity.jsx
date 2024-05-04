import { Link } from 'react-router-dom';
import { getEventQuantityApi } from '../../../../helpers/events/getEventQuantity.api.js';
import { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';


const EventQuantity = () => {

    const [eventQ, setEventQ] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getEventQuantityApi();
            if (response.status === 'success') setEventQ(response.result);
        }; fetchData();
    }, []);

    return (
        <>
            <Link to={'/dashboard/getevent'}>
                <Badge badgeContent={eventQ} color="info">
                    <TheaterComedyIcon color="action" className='btn' />
                </Badge>
            </Link>
        </>
    );
};

export default EventQuantity;