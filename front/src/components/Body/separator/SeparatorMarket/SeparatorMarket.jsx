import { useEffect, useState } from 'react';
import './separatorMarket.scss';
import { getCountProdApi } from '../../../../helpers/market/getCountProd.api.js';
import { getCountSitesApi } from '../../../../helpers/sites/getCountSites.api.js';
import { getEventQuantityApi } from '../../../../helpers/events/getEventQuantity.api.js';

const SeparatorMarket = () => {

    const [counter, setCounter] = useState({ events: 0, sites: 0, products: 0 });

    useEffect(() => {
        const fetchData = async () => {
            const responseEvent = await getEventQuantityApi();
            const responseSite = await getCountSitesApi();
            const responseProd = await getCountProdApi();
            if (responseEvent.status === 'success' && responseSite.status === 'success' && responseProd.status === 'success') {
                setCounter({
                    events: responseEvent.result,
                    sites: responseSite.result,
                    products: responseProd.result
                });
            }
        }; fetchData();
    }, []);

    return (
        <div className='separatorMarket'>

            <div className='separatorMarketDiv'>
                <p className='separatorMarketNumber'>{counter.events}</p>
                <div className='separatorMarketLine'></div>
                <p>Eventos</p>
            </div>

            <div className='separatorMarketDiv'>
                <p className='separatorMarketNumber'>{counter.sites}</p>
                <div className='separatorMarketLine'></div>
                <p>Sitios Web</p>
            </div>

            <div className='separatorMarketDiv'>
                <p className='separatorMarketNumber'>{counter.products}</p>
                <div className='separatorMarketLine'></div>
                <p>Productos</p>
            </div>

        </div>
    );
};

export default SeparatorMarket;