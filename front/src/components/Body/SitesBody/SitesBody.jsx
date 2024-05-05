import './sitesBody.scss';
import Load from '../../utils/Load.jsx';
import { useEffect, useState } from "react";
import SitesShow from './SitesShow/SitesShow.jsx';
import { getAllSitesApi } from '../../../helpers/sites/getAllSites.api.js';

const SitesBody = () => {

    const [sites, setSites] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllSitesApi({ random: 1 });
            if (response.status === 'success') setSites(response.products);
        }; fetchData();
    }, []);

    return (
        <div className='sitesBody'>
            {sites &&
                <>
                    <h2>Sitios web.</h2>
                    <SitesShow sites={sites} setSites={setSites} setLoading={setLoading} />

                    <Load loading={loading} />
                </>
            }
        </div>
    );
};

export default SitesBody;