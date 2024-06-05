import { getBySiteIdApi } from '../../../../../helpers/comments/getBySiteId.api.js';
import { useEffect, useState } from 'react';
import VewComment from './VewComment/VewComment.jsx';

const VewMessSite = ({ siteId, comments, setComments }) => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await getBySiteIdApi(siteId);
            if (response.status === 'success') {
                setComments(response.result);
            };
        }; fetchData();
    }, []);

    if(comments.length < 1) return <p>No hay comentarios</p>
    return <VewComment comments={comments} />
};

export default VewMessSite;