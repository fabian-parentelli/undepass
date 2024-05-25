import './marketSite.scss';
import { useEffect, useState } from 'react';
import { updVewProductSiteApi } from '../../../../../helpers/market/updVewProductSite.api.js';
import { getProductByUserIdApi } from '../../../../../helpers/market/getProductByUserId.api.js';

const MarketSite = ({ user, setLoading }) => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getProductByUserIdApi(user);
            if (response.status === 'success') setValues(response.result);
            setLoading(false);
        };
        fetchData();
    }, [user]);

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updVewProductSiteApi(id);
        if (response.status === 'success') {
            const response = await getProductByUserIdApi(user);
            if (response.status === 'success') setValues(response.result);
        };
        setLoading(false);
    };

    return (
        <div className='marketSite'>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Stock</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {values && values.map((prod) => (
                        <tr key={prod._id}>
                            <td>
                                <div className="contImg">
                                    <img className="imgAvat" src={prod.img[0].imgUrl} alt={prod.name} />
                                    <div className="vAcontImg">
                                        <img src={prod.img[0].imgUrl} alt={prod.name} />
                                    </div>
                                </div>
                            </td>
                            <td>{prod.name}</td>
                            <td>{prod.quantity}</td>
                            <td>
                                <div className="btnActions">
                                    <button
                                        onClick={() => handleActive(prod._id)}
                                        className={prod.inSite ? 'active' : 'inactive'}>
                                        {prod.inSite ? 'Activo' : 'Inactivo'}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MarketSite;
