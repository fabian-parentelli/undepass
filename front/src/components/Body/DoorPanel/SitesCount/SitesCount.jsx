import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { getCountSitesApi } from '../../../../helpers/sites/getCountSites.api.js';

const SitesCount = () => {

    const [sites, setSites] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCountSitesApi();
            if(response.status === 'success') setSites(response.result);
            else setSites(0);
        }; fetchData();
    }, []);

    return (
        <>
            <Link to={'/dashboard/vewsite'}>
                <Badge badgeContent={sites} color="info">
                    <LanguageIcon color="action" className='btn' />
                </Badge>
            </Link>
        </>
    );
};

export default SitesCount;