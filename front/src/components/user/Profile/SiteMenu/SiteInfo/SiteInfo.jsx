import './siteInfo.scss';
import { useEffect, useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { getProductByUserIdApi } from '../../../../../helpers/market/getProductByUserId.api.js';

const SiteInfo = ({ values }) => {

    const [count, setCount] = useState({ events: 0, products: 0 });

    useEffect(() => {
        if (values.events) {
            const activeEvents = values.events.filter(eve => eve.active).length;
            setCount(prevCount => ({ ...prevCount, events: activeEvents }));
        };
        const fetchData = async () => {
            const response = await getProductByUserIdApi(values.userId);
            if(response.status === 'success') {
                const activeEvents = response.result.filter(eve => eve.inSite).length;
                setCount(prevCount => ({ ...prevCount, products: activeEvents }));
            };
        }; fetchData();
    }, [values]);

    return (
        <div className='SiteInfo'>
            <h4>Información:</h4>
            {values &&
                <>
                    <div className='SiteInfoTitle'>
                        <div className='SiteInfoImgCont'>
                            {values.img && values.img.length > 0 ? (
                                values.img.some(img => img.name === "logo") ? (
                                    values.img.map((img, imgIndex) => {
                                        if (img.name === "logo") return <img key={imgIndex} src={img.url} alt="Logo" />;
                                        return null;
                                    })
                                ) : (
                                    <img style={{ backgroundColor: 'black' }} src='/newLog.png' alt="Logo" />
                                )
                            ) : (
                                <img style={{ backgroundColor: 'black' }} src='/newLog.png' alt="Logo" />
                            )}
                        </div>
                        <p>{values.title}</p>
                    </div>

                    <div className='SiteInfoData'>
                        <div className='SiteInfoDataUrl'>
                            <p>{`http://localhost:5173/site/${values.url}`}</p>
                            <div onClick={() => navigator.clipboard.writeText(`http://localhost:5173/site/${values.url}`)}>
                                <ContentCopyIcon className='icon' />
                            </div>
                        </div>
                        {count.events > 0 && <p>Tienes {count.events} eventos visibles en tu sitio</p>}
                        {count.products > 0 && <p>Tienes {count.products} productos visibles en tu sitio</p>}
                    </div>

                </>
            }
        </div>
    );
};

export default SiteInfo;