import { useParams } from 'react-router-dom';
import { getSiteByUrlApi } from '../../../helpers/sites/getSiteByUrl.api.js';
import { useEffect, useState } from 'react';
import Load from '../../utils/Load.jsx';
import VewSiteHtml from './VewSiteHtml/VewSiteHtml.jsx';

const VewSite = () => {

    const { id } = useParams();
    const [values, setValues] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getSiteByUrlApi(id);
            if(response.status === 'success') setValues(response.result);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <>
            <VewSiteHtml values={values} />
            
            <Load loading={loading} />
        </>
    );
};

export default VewSite;