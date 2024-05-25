import './updSiteDas.scss';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import SiteMenu from "../../../user/Profile/SiteMenu/SiteMenu";
import { getSiteByUserId } from '../../../../helpers/sites/getSiteByUserId.api.js';
import Load from "../../../utils/Load.jsx";
import NewSite from "../../../sites/NewSite/NewSite.jsx";

const UpdSiteDas = () => {

    const { _id } = useParams();
    const user = { _id };
    const [site, setSite] = useState(null);
    const [loading, setLoading] = useState(false);
    const [vew, setVew] = useState(false);

    useEffect(() => {
        const fetchData = async (id) => {
            setLoading(true);
            if (id) {
                const response = await getSiteByUserId(id);
                if (response.status === 'success') {
                    setSite(response.result);
                };
            }
            setLoading(false);
        }; if (_id) fetchData(_id);
    }, [_id]);

    return (
        <div className='updSiteDas'>
            <SiteMenu user={user} />
            <button className='btnDasSite' onClick={() => setVew(!vew)}>Fotos y Textos</button>

            {vew && <NewSite site={site} setLoading={setLoading} />}

            <Load loading={loading} />
        </div>
    );
};

export default UpdSiteDas;