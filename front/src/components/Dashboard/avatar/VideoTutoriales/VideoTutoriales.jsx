import './videoTutoriales.scss';
import { useState } from 'react';
import VewVideoTut from './VewVideoTut/VewVideoTut';
import NewVideoTut from './NewVideoTut/NewVideoTut';
import Load from '../../../utils/Load';

const VideoTutoriales = () => {

    const [isNew, setIsNew] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className='videoTutoriales'>
            <h2>Video Tutoriales</h2>
            <div className='line'></div>

            <button className='btnVideoT' onClick={() => setIsNew(!isNew)}>
                {!isNew ? 'Video nuevo' : 'Ver Videos'}
            </button>

            {!isNew
                ? <VewVideoTut setLoading={setLoading} />
                : <NewVideoTut setLoading={setLoading} setIsNew={setIsNew} />
            }

            <Load loading={loading} />
        </div>
    );
};

export default VideoTutoriales;