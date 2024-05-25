import './newSiteUser.scss';
import { useEffect, useState } from 'react';
import NewSite from '../NewSite/NewSite';
import NewTitle from '../NewTitle/NewTitle';
import { useLoginContext } from '../../../context/LoginContext';
import { getSiteByUserId } from '../../../helpers/sites/getSiteByUserId.api.js';
import Load from '../../utils/Load.jsx';

const NewSiteUser = () => {

    const { user } = useLoginContext();
    const [site, setSite] = useState(null);
    const [loading, setLoading] = useState(false);
    const [newSites, setNewSites] = useState(false);

    useEffect(() => {
        const fetchData = async (id) => {
            setLoading(true);
            if (id) {
                const response = await getSiteByUserId(id);
                if (response.status === 'success') {
                    setSite(response.result);
                    setNewSites(true);
                };
            }
            setLoading(false);
        }; if (user.data._id) fetchData(user.data._id);
    }, [newSites]);

    return (
        <div className='newSiteUser'>

            {!newSites ?
                <NewTitle setNewSites={setNewSites} id={user.data._id} />
                : <NewSite site={site} setLoading={setLoading} />
            }
            <Load loading={loading} />
        </div>
    );
};

export default NewSiteUser;