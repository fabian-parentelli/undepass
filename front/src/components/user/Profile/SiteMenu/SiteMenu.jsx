import './siteMenu.scss';
import { Link } from 'react-router-dom';
import Load from '../../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { getSiteByUserId } from '../../../../helpers/sites/getSiteByUserId.api.js';
import SiteMenuData from './SiteMenuData/SiteMenuData.jsx';
import EventSite from './EventSite/EventSite.jsx';
import MarketSite from './MarketSite/MarketSite.jsx';
import CommentSite from './CommentSite/CommentSite.jsx';
import SiteInfo from './SiteInfo/SiteInfo.jsx';

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
        }; if (user?._id) fetchData();
    }, [user._id]);

    return (
        <div className='siteMenu'>
            <div className='siteMenuTitle'>
                <h2 onClick={() => setVew('')}>Sitio</h2>
                <Link to={'/help#updSiteHelp'} className='siteMenuHelp'>Ayuda</Link>
            </div>
            <div className='line'></div>

            <div className='siteMenuButton'>
                <button onClick={() => setVew('info')}>Info general</button>
                {user?.name && (
                    <Link to={'/newsite'} className='siteMenuHelp'>
                        <button>Fotos y Textos</button>
                    </Link>
                )}
                {values?.shift?.active ? (
                    <button onClick={() => setVew('')}>Turnos</button>
                ) : (
                    <button onClick={() => setVew('event')}>Eventos</button>
                )}
                <button onClick={() => setVew('market')}>Mercado</button>
                <button onClick={() => setVew('message')}>Mensajes</button>
            </div>

            {vew === '' && values &&
                <SiteInfo values={values} />
            }

            {vew === 'info' && values && (
                <SiteMenuData values={values} setValues={setValues} setLoading={setLoading} setVew={setVew} />
            )}

            {vew === 'event' && values && (
                <>
                    <p>En el estado activas o desactivas la visibilidada del evento en tú página, no del evento en sí.</p>
                    <Link to={'/profile/eventmenu'} className='setEvent'>
                        Para modificar el evento presiona <span>aquí</span>
                    </Link>
                    <EventSite values={values} setValues={setValues} setLoading={setLoading} />
                </>
            )}

            {vew === 'market' && (
                <>
                    <p>En el estado activas o desactivas la visibilidada del Producto en tú página, no del Producto en sí.</p>
                    <Link to={'/profile'} className='setEvent'>
                        Para modificar el evento presiona <span>aquí</span>
                    </Link>
                    <MarketSite user={user._id} setLoading={setLoading} />
                </>
            )}

            {vew === 'message' && values && values._id && (
                <CommentSite siteId={values._id} setLoading={setLoading} />
            )}

            <Load loading={loading} />
        </div>
    );
};

export default SiteMenu;