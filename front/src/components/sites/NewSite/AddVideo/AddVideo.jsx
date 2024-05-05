import './addVideo.scss';
import { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { addVideoSiteApi } from '../../../../helpers/sites/addVideosSite.api.js';

const AddVideo = ({ site }) => {

    
    const [videos, setVideos] = useState(site.videos || []);

    const handleAddVideo = () => setVideos([...videos, '']);

    const handleDeleteVideo = (index) => {
        const updatedVideos = [...videos.slice(0, index), ...videos.slice(index + 1)];
        setVideos(updatedVideos);
    };

    const handleChangeVideo = (index, value) => {
        const updatedVideos = [...videos];
        updatedVideos[index] = value;
        setVideos(updatedVideos);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const videoArray = Object.values(videos);
        await addVideoSiteApi(site._id, videoArray);
    };

    return (
        <form className='addVideo' onSubmit={handleSubmit}>
            <p>Copia un link de youtube</p>
            {videos.map((vid, index) => (
                <div className='AddVideoDiv' key={index}>
                    <input
                        type="text"
                        value={vid}
                        onChange={(e) => handleChangeVideo(index, e.target.value)}
                    />
                    <DeleteIcon className='icon' onClick={() => handleDeleteVideo(index)} />
                    {index === videos.length - 1 && <AddBoxIcon className='icon' onClick={handleAddVideo} />}
                </div>
            ))}
            {videos.length === 0 && (
                <div className='AddVideoDiv'>
                    <input
                        type="text"
                        value={''}
                        onChange={(e) => setVideos([e.target.value])}
                    />
                    <DeleteIcon className='icon' />
                    <AddBoxIcon className='icon' onClick={handleAddVideo} />
                </div>
            )}
            <button className='addVideoBtn'>Modificar</button>
        </form>
    );
};

export default AddVideo;


