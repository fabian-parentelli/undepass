import './marketBody.scss';
import { useEffect, useState } from 'react';
import CardProduct from '../../market/Cardproduct/Cardproduct';
import { getAllProductsApi } from '../../../helpers/market/getAllProducts.api';

const MarketBody = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllProductsApi({});
            if (response.status === 'success') setProducts(response.result);
        }; fetchData();
    }, []);

    return (
        <div className='marketBody'>
            <h2>Productos</h2>
            <div className='marketBodyProd'>
                {products && products.docs && products.docs.map((prod) => (
                    prod.active ? <CardProduct key={prod._id} prod={prod} /> : ''
                ))}
            </div>
        </div>
    );
};

export default MarketBody;