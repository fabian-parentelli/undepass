import './marketEdit.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductByUserIdApi } from '../../../../../helpers/market/getProductByUserId.api.js';
import VewMayProducts from '../VewMyProducts/VewMyProducts.jsx';

const MarketEdit = ({ userId }) => {

    const [values, setValues] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                const response = await getProductByUserIdApi(userId);
                if (response.status === 'success') setValues(response.result)
            };
        }; fetchData();
    }, [userId]);

    return (
        <div className='marketEdit'>
            <div className='siteMenuButton'>
                <Link to={'/newproduct'}><button>Crear</button></Link>
            </div>

            <VewMayProducts values={values} />
        </div>
    );
};

export default MarketEdit;