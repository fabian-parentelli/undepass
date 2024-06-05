import { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useLoginContext } from '../../../../../context/LoginContext';
import { newFavoriteApi } from '../../../../../helpers/sites/newFavorite.api.js';

const FavoriteBox = ({ values, setValues, setLoading, setMessage }) => {

    const { user } = useLoginContext();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (user && user.data && user.data._id && values && values.favorites) {
            const result = values.favorites.some(res => res.userId === user.data._id);
            result ? setIsFavorite(true) : setIsFavorite(false);
        };
    }, [values]);

    const handleFavorite = async () => {
        if (user && user.data && user.data._id) {
            const response = await newFavoriteApi({ id: user.data._id, siteId: values._id });
            if (response.status === 'success') {
                setValues(response.result);
            };
        } else setMessage('Tienes que ser usuario para poder agregar este sitio a tus favoritos');
    };

    return (
        <button className='buttonBoxBtn' onClick={handleFavorite}>
            {!isFavorite
                ? <FavoriteBorderIcon />
                : <FavoriteIcon />
            }
            Favorito
        </button>
    );
};

export default FavoriteBox;