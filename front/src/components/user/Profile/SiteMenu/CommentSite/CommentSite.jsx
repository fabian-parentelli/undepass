import './commentSite.scss';
import { useEffect, useState } from 'react';
import { getBySiteIdApi } from '../../../../../helpers/comments/getBySiteId.api.js';
import { updActiveCommentApi } from '../../../../../helpers/comments/updActiveComment.api.js';

const CommentSite = ({ siteId, setLoading }) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getBySiteIdApi(siteId);
            if (response.status === 'success') setComments(response.result);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveCommentApi(id);
        if (response.status === 'success') {
            const res = await getBySiteIdApi(siteId);
            if (res.status === 'success') setComments(res.result);
        } else console.log(response);
        setLoading(false);
    };

    return (
        <div className='commentSite'>
            <h3>Activar y desactivar comentarios</h3>
            {comments && comments.map((com, index) => (
                <div
                    key={index} className='vewCommentMess'
                    style={com.type === 'owner' ? { backgroundColor: '#6f7357' } : {}}
                >
                    <img
                        src={com.avatar}
                        alt="img"
                        style={com.type === 'guest' ? { backgroundColor: 'black' } : {}}
                    />

                    <div className='commentSiteCont'>
                        <div className='commentSiteTxt'>
                            <p className='vewCommentName'>{com.userName} dijo:</p>
                            <p>{com.message}</p>
                            <p className='vewCommentDate'>{com.date}</p>
                        </div>

                        <button className='commentSiteBtn'
                            style={com.active ? { backgroundColor: '#3f8880' } : { backgroundColor: '#b38471' }}
                            onClick={() => handleActive(com._id)}
                        >
                            {com.active ? 'Activo' : 'Inactivo'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentSite;