import './badge.scss';
import { useEffect, useState } from 'react';
import { getAmountContactApi } from '../../../../helpers/contacts/getAmContact.api.js';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

const ContactAmount = () => {

    const [amount, setAmount] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAmountContactApi();
            setAmount(response.contact);
        }; fetchData();
    }, []);

    return (
        <>
            <Link to={'/dashboard/vewcontact'}>
                <Badge badgeContent={amount} color="error">
                    <MailIcon color="action" className='btn' />
                </Badge>
            </Link>
        </>
    );
};

export default ContactAmount;