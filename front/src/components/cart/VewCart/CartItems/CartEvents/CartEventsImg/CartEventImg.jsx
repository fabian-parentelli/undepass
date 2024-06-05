import { useEffect, useState } from 'react';
import { getImgEventByNameApi } from '../../../../../../helpers/avatars/getImgEventByName.api.js';

const CartEventImg = ({ prod }) => {

    const [picture, setPicture] = useState(null);

    useEffect(() => {
        if (prod && prod.photo) {
            if (prod.photo.isFlyer) {
                setPicture(prod.photo.img);
            } else {
                setPicture(prod.photo.img);
                const fetchData = async () => {
                    const response = await getImgEventByNameApi(prod.photo.img);
                    if (response.status === 'success') setPicture(response.result.imagesUrl);
                }; fetchData();
            }
        }
    }, [prod.photo]);

    return (
        <div>
            {picture && <img src={picture} alt="flyer" />}
        </div>
    );
};

export default CartEventImg;