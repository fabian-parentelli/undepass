import './vewUserProducts.scss';
import { getProductByUserIdApi } from '../../../../helpers/market/getProductByUserId.api.js';
import { useEffect, useState } from 'react';
import CardProduct from '../../Cardproduct/Cardproduct.jsx';

const VewUserProducts = ({ userId }) => {

    const [values, setValues] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductByUserIdApi(userId);
            if (response.status === 'success') {
                setValues(response.result);
            };
        }; fetchData();
    }, [userId]);

    return (
        <div className='vewUserProducts'>
            {values && values.map((prod) => (
                prod.inSite ? <CardProduct key={prod._id} prod={prod} /> : null
            ))}
        </div>
    );
};

export default VewUserProducts;