import './VewByProduct.scss';
import PrevImg from './PrevImg/PrevImg.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByIdApi } from '../../../../helpers/market/getProductById.api.js';
import VewImg from './VewImg/VewImg.jsx';
import VewDataprov from './VewDataprod/VewDataprod.jsx';

const VewByProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isImg, setIsImg] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getProductByIdApi(id);
            if (response.status === 'success') setProduct(response.result);
        }; fetchData();
    }, [id]);

    return (
        <div className='VewByProduct'>
            {product &&
                <>
                    <div className='VewByProductImgs'>
                        <PrevImg imgs={product.img} isImg={isImg} setIsImg={setIsImg} />
                        <VewImg img={product.img[isImg]} />

                    </div>
                    <VewDataprov product={product} />
                </>
            }
        </div>
    );
};

export default VewByProduct;