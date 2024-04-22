import './profileShow.scss';
import { useState } from 'react';
import Load from '../../../../utils/Load.jsx';
import { useNavigate } from 'react-router-dom';
import CloudFile from '../../../../utils/CloudFile/CloudFile';
import { upUserFilesApi } from '../../../../../helpers/users/upUserFiles.api.js';
import { useLoginContext } from '../../../../../context/LoginContext.jsx';
import OldPicture from './OldPicture/OldPicture.jsx';

const ProfileShow = () => {

    const { current, user } = useLoginContext();

    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formData) {
            setLoading(true);
            const response = await upUserFilesApi(formData);
            if (response.status === 'success') {
                localStorage.setItem('token', response.accesToken);
                await current();
                setTimeout(() => {
                    navigate('/profile');
                    setLoading(false);
                }, 2000);
            };
        };
    };
    const handleFileChange = (data) => setFormData(data);

    return (
        <>
            <div className='profileShow'>
                <form onSubmit={handleFormSubmit}>
                    <h3>Sube tu imagen de perfil</h3>
                    <CloudFile onChange={handleFileChange} folderName={'user'} contClass={'cfCircle'} />
                    <button className='btn'>Subir</button>
                </form>
                <OldPicture />
            </div>
            <Load loading={loading} />
        </>
    );
};

export default ProfileShow;