import './vewSitesDas.scss';
import Load from '../../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { getAllSitesApi } from '../../../../helpers/sites/getAllSites.api.js';
import ShowSitesDas from './ShowSitesDas/ShowSitesDas.jsx';

const VewSitesDas = () => {

    const [sites, setSites] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllSitesApi({});
            if (response.status === 'success') setSites(response.result);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='vewSitesDas'>
            <h2>VerSitios</h2>
            <div className='line'></div>
            
            <ShowSitesDas sites={sites} setSites={setSites} setLoading={setLoading} />
            <Load loading={loading} />
        </div>
    );
};

export default VewSitesDas;