import './siteMenu.scss';
import { Link } from 'react-router-dom';
import Load from '../../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { getSiteByUserId } from '../../../../helpers/sites/getSiteByUserId.api.js';
import SiteMenuData from './SiteMenuData/SiteMenuData.jsx';
import EventSite from './EventSite/EventSite.jsx';
import MarketSite from './MarketSite/MarketSite.jsx';

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
                <Link to={'/help#newSiteHelp'} className='siteMenuHelp'>Ayuda</Link>
            </div>
            <div className='line'></div>

            <div className='siteMenuButton'>
                <button onClick={() => setVew('info')}>Info general</button>
                {user.name
                    ? <Link to={'/newsite'} className='siteMenuHelp'><button>Fotos y Textos</button></Link>
                    : ''
                }
                <button onClick={() => setVew('event')}>Eventos</button>
                <button onClick={() => setVew('market')}>Mercado</button>
            </div>

            {vew === 'info' &&
                <SiteMenuData values={values} setValues={setValues} setLoading={setLoading} setVew={setVew} />
            }

            {vew === 'event' &&
                <>
                    <p>En el estado activas o desactivas la visibilidada del evento en tú página, no del evento en si.</p>
                    <Link to={'/profile/eventmenu'} className='setEvent'>Para modificar el evento preciona <span>aquí</span></Link>
                    <EventSite values={values} setValues={setValues} setLoading={setLoading} />
                </>
            }

            {vew === 'market' &&
                <>
                    <p>En el estado activas o desactivas la visibilidada del Producto en tú página, no del Producto en si.</p>
                    <Link to={'/profile'} className='setEvent'>Para modificar el evento preciona <span>aquí</span></Link>
                    <MarketSite user={user._id} setLoading={setLoading} />
                </>
            }

            <Load loading={loading} />
        </div>
    );
};

export default SiteMenu;