import './sitesShow.scss';
import Pager from '../../../utils/Pager/Pager';
import { getAllSitesApi } from '../../../../helpers/sites/getAllSites.api.js';
import SiteCard from '../SiteCard/SiteCard.jsx';

const SitesShow = ({ sites, setSites, setLoading }) => {

    const handleChangePage = async (page) => {
        setLoading(true);
        const response = await getAllSitesApi({ page: page, random: 2 });
        if (response.status === 'success') setSites(response.products);
        setLoading(false);
    };

    return (
        <>
            <div className='sitesShow'>
                {sites && sites.docs.map((sit, index) => (
                    <SiteCard sit={sit} key={index}/>
                ))}
            </div>
            <Pager users={sites} HandleChangePage={handleChangePage} />
        </>
    );
};

export default SitesShow;