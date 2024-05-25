import { useLoginContext } from '../../../../context/LoginContext';
import MarketEdit from './MarketEdit/MarketEdit';
import './marketmenu.scss';
import { Link } from 'react-router-dom';

const Marketmenu = () => {

    const {user} = useLoginContext();

    return (
        <div className='marketmenu'>
            <div className='siteMenuTitle'>
                <h2>Tu mercado</h2>
                <Link to={'/help#newSiteHelp'} className='siteMenuHelp'>Ayuda</Link>
            </div>
            <div className='line'></div>
            <MarketEdit userId={user.data._id} />
        </div>
    );
};

export default Marketmenu;