import './showSitesDas.scss';
import Pager from '../../../../utils/Pager/Pager';
import { getAllSitesApi } from '../../../../../helpers/sites/getAllSites.api.js';
import { Link } from 'react-router-dom';

const ShowSitesDas = ({ sites, setSites, setLoading }) => {

    const handleChangePage = async (page) => {
        setLoading(true);
        const response = await getAllSitesApi({ page: page });
        console.log(response);
        if (response.status === 'success') setSites(response.result);
        setLoading(false);
    };

    return (
        <>
            <div className='showSitesDas'>
                {sites && sites.docs.map((sit, index) => (
                    <div key={index} className='showSitesDasDiv'>
                        <div className='sitesShowDivImg'>
                            {sit.img && sit.img[1] && sit.img[1].url ? (
                                <img src={sit.img[1].url} alt="Logo" />
                            ) : (
                                <img className='imgLogo' src='/newLog.png' alt="Logo" />
                            )}
                        </div>
                        <p>{sit.title}</p>
                        <p><strong>Url:</strong> {sit.url}</p>
                        <p><strong>Usuario:</strong> {sit.userId}</p>
                        <Link to={`/site/${sit.url}`}><button className='showSitesDasBtn'>Ver</button></Link>
                    </div>
                ))}
            </div>
            <Pager users={sites} HandleChangePage={handleChangePage} />
        </>
    );
};

export default ShowSitesDas;