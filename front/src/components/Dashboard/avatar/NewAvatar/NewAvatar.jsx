import './newAvatar.scss';
import { useState } from 'react';
import Load from '../../../utils/Load.jsx';
import { useNavigate } from 'react-router-dom';
import CloudFile from '../../../utils/CloudFile/CloudFile';
import { newAvatarApi } from '../../../../helpers/avatars/newAvatar.api.js';

const NewAvatar = () => {

    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formData) {
            setLoading(true);
            const response = await newAvatarApi(formData);
            if (response.status === 'success') {
                setTimeout(() => {
                    setLoading(false);
                    navigate('/dashboard');
                }, 2000);
            };
        };
    };
    const handleFileChange = (data) => setFormData(data);

    return (
        <>
            <form className='newAvatar' onSubmit={handleFormSubmit}>
                <h2>Nuevos Avatares</h2>
                <CloudFile onChange={handleFileChange} folderName="assets" contClass='cfRect' />
                <button className='newAvatarBtn'>Cargar</button>
            </form>
            <Load loading={loading} />
        </>
    );
};

export default NewAvatar;