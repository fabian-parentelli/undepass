import './videoHelp.scss';
import Load from '../../utils/Load.jsx'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getVideoTutByNameApi } from '../../../helpers/avatars/getVideoTutByName.api.js';
import VideosVew from '../../utils/VideosVew/VideosVew.jsx';

const VideoHelp = () => {

    const { tutorial } = useParams();
    const [loading, setloading] = useState(false);
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            const response = await getVideoTutByNameApi(tutorial);
            if (response.status === 'success') {
                setVideoData(response.result);
                setloading(false);
            };
        }; fetchData();
    }, [tutorial]);

    console.log(videoData);

    return (
        <div className='videoHelp'>
            <h2>Video Tutoriales</h2>
            {videoData &&
                <>
                    <p>{videoData.title}</p>
                    <div className='videoDiv'>
                        <VideosVew url={videoData.url} />
                    </div>
                    <Link className='btnBack' to={`/help#${videoData.name}`}>Volver</Link>
                </>
            }
            <Load loading={loading} />
        </div>
    );
};

export default VideoHelp;