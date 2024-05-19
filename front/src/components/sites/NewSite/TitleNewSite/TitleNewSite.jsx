import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { updateSiteApi } from '../../../../helpers/sites/updateSite.api.js';

const TitleNewSite = ({ site, dark, setDark }) => {

    const handleDark = async () => {
        site.dark = !dark;
        setDark(!dark);
        await updateSiteApi(site);
    };

    return (
        <div className='newSiteTitle'>
            {site && <h2>{site.title}</h2>}
            <button className='btnDark' onClick={handleDark}><LightbulbIcon /></button>
        </div>
    );
};

export default TitleNewSite;