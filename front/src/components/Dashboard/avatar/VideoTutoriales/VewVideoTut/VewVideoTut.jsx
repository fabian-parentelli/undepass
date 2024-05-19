import './vewVideoTut.scss';
import { useEffect, useState } from 'react';
import { getVideoTutApi } from '../../../../../helpers/avatars/getVideoTut.api.js';
import VideosVew from '../../../../utils/VideosVew/VideosVew.jsx';

const VewVideoTut = ({ setLoading }) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getVideoTutApi();
            if (response.status === 'success') setVideos(response.result);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='vewVideoTut'>
            <h3>Ver videos</h3>
            <div className='videosCards'>
                {videos && videos.map((vid, index) => (
                    <div key={index} className='videosCard'>
                        <p>{vid.title}</p>
                        <div className='divVideoCon'><VideosVew url={vid.url} /></div>
                        <p>{vid.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VewVideoTut;