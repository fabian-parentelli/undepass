import { useEffect, useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { addLikeSiteApi } from '../../../../../helpers/sites/addLikeSite.api.js';
import { useLoginContext } from '../../../../../context/LoginContext.jsx';

const AddLike = ({ values, setValues, setLoading, setMessage }) => {

    const [likes, setLikes] = useState(0);
    const { user } = useLoginContext();

    useEffect(() => { setLikes(values.likeCount.length) }, []);

    const handleLike = async () => {
        setLoading(true);
        const userId = user?.data?._id || '';
        const response = await addLikeSiteApi({ userId, siteId: values._id });
        if (response.status === 'error') {
            setMessage(response.error);
            setTimeout(() => { setMessage('') }, 2000)
        };
        if (response.status === 'success') setLikes(response.result.likeCount.length);
        setLoading(false);
    };

    return (
        <button className='buttonBoxBtn' onClick={handleLike}>
            <ThumbUpOffAltIcon />
            Me Gusta
            <p>{likes}</p>
        </button>
    );
};

export default AddLike;