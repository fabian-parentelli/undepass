import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useEffect, useState } from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { amountUsersApi } from '../../../../helpers/users/amountUsers.api.js';

const UsersAmount = () => {

    const [userAmoun, setUserAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await amountUsersApi();
            if (response.status === 'success') setUserAmount(response.user);
        }; fetchData();
    }, []);

    return (
        <>
        <Link to={'/dashboard/vewuser'}>
            <Badge badgeContent={userAmoun} color="info">
                <PeopleAltIcon color="action" className='btn' />
            </Badge>
        </Link>
    </>
    );
};

export default UsersAmount;