import './sitesShow.scss';
import { Link } from 'react-router-dom';
import Pager from '../../../utils/Pager/Pager';
import { getAllSitesApi } from '../../../../helpers/sites/getAllSites.api.js';

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
                    <div key={index} className='sitesShowContainer'>
                        <div className='sitesShowDivImg'>
                            {sit.img && sit.img.map((img, imgIndex) => {
                                if (img.name === "logo") {
                                    return <img key={imgIndex} src={img.url} alt="Logo" />;
                                }
                            })}
                            {sit.img && !sit.img.some(img => img.name === "logo") &&
                                <img style={{backgroundColor: 'black'}} key={2} src='newLog.png' alt="Logo" />
                            }
                        </div>
                        <Link to={`/site/${sit.url}`} className='sitesShowTxt'>{sit.title}</Link>
                    </div>
                ))}
            </div>
            <Pager users={sites} HandleChangePage={handleChangePage} />
        </>
    );
};

export default SitesShow;