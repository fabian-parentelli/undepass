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
                            {sit.img && sit.img.length > 0 ? (
                                sit.img.some(img => img.name === "logo") ? (
                                    sit.img.map((img, imgIndex) => {
                                        if (img.name === "logo") {
                                            return <img key={imgIndex} src={img.url} alt="Logo" />;
                                        }
                                        return null;
                                    })
                                ) : (
                                    <img style={{ backgroundColor: 'black' }} src='/newLog.png' alt="Logo" />
                                )
                            ) : (
                                <img style={{ backgroundColor: 'black' }} src='/newLog.png' alt="Logo" />
                            )}

                        </div>
                        <p>{sit.title}</p>
                        <p><strong>Url:</strong> {sit.url}</p>
                        <p><strong>Usuario:</strong> {sit.userId}</p>
                        <div className='divButton'>
                            <Link to={`/site/${sit.url}`}><button className='showSitesDasBtn'>Ver</button></Link>
                            <Link to={`/dashboard/updsite/${sit.userId}`}><button className='showSitesDasBtn'>Upd</button></Link>
                        </div>
                    </div>
                ))}
            </div>
            <Pager users={sites} HandleChangePage={handleChangePage} />
        </>
    );
};

export default ShowSitesDas;