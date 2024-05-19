import './siteMenu.scss';
import { Link } from 'react-router-dom';
import Load from '../../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { getSiteByUserId } from '../../../../helpers/sites/getSiteByUserId.api.js';
import SiteMenuData from './SiteMenuData/SiteMenuData.jsx';

const SiteMenu = ({ user }) => {

    const [values, setValues] = useState(null);
    const [vew, setVew] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getSiteByUserId(user._id);
            if (response.status === 'success') setValues(response.result);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='siteMenu'>
            <div className='siteMenuTitle'>
                <h2 onClick={() => setVew('')}>Sitio</h2>
                <Link className='siteMenuHelp'>Ayuda</Link>
            </div>
            <div className='line'></div>

            <div className='siteMenuButton'>
                <button onClick={() => setVew('info')}>Info general</button>
                <Link to={'/newsite'} className='siteMenuHelp'><button>Foto y Textos</button></Link>
                
            </div>

            {vew === 'info' &&
                <SiteMenuData values={values} setValues={setValues} setLoading={setLoading} setVew={setVew} />
            }

            <Load loading={loading} />
        </div>
    );
};

export default SiteMenu;