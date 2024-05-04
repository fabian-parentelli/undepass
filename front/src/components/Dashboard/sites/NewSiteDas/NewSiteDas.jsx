import './newSiteDas.scss';
import Load from '../../../utils/Load';
import { useEffect, useState } from 'react';
import NewSite from '../../../sites/NewSite/NewSite';
import NotId from '../../users/UpdateUser/NotId/NotId';
import NewTitle from '../../../sites/NewTitle/NewTitle';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { getSiteByUserId } from '../../../../helpers/sites/getSiteByUserId.api.js';

const NewSiteDas = () => {

    const [user, setUser] = useState(null);
    const [site, setSite] = useState(null);
    const [loading, setLoading] = useState(false);
    const [newSites, setNewSites] = useState(false);

    console.log(user);

    useEffect(() => {
        if (user) {
            const fetchData = async (id) => {
                const response = await getSiteByUserId(id)
                if (response.status === 'success') {
                    setSite(response.result);
                    setNewSites(true);
                } else setNewSites(false);
            }; fetchData(user);
        };
    }, [user]);

    return (
        <div className='newSiteDas'>
            <div className='newSiteDasTitle'>
                <LaptopChromebookIcon style={{ fontSize: '3.9rem' }} />
                <div className='newSiteDasTxTitle'>
                    <h2>Crear sitio</h2>
                    <p>Crear y modificar sitios</p>
                </div>
            </div>
            <div className='line'></div>
            <NotId setLoading={setLoading} setUserId={setUser} />
            <div className='space'></div>
            {!newSites ? <NewTitle setNewSites={setNewSites} id={user} /> : <NewSite site={site} />}

            <Load loading={loading} />
        </div>
    );
};

export default NewSiteDas;