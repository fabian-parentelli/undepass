import './fileAvatar.scss';
import { useState } from 'react';
import CloudFile from '../../../../../utils/CloudFile/CloudFile';
import { upUserFilesApi } from '../../../../../../helpers/users/upUserFiles.api.js';
import { getUserByIdApi } from '../../../../../../helpers/users/getUserById.api.js';

const FileAvatar = ({ userId, setUser, setLoading }) => {

    const [formData, setFormData] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (formData) {
            const response = await upUserFilesApi(formData, userId);
            if (response.status === 'success') {
                const data = await getUserByIdApi(userId);
                if (data.status === 'success') {
                    setUser(data.result.avatar[0]);
                };
            };
        };
        setLoading(false);
    };

    const handleFileChange = (data) => setFormData(data);

    return (
        <div className='fileAvatar'>
            <form onSubmit={handleFormSubmit}>
                <h3>Sube la imagen para el usuario</h3>
                <CloudFile onChange={handleFileChange} folderName={'user'} contClass={'cfCircle'} />
                <button className='btn'>Subir</button>
            </form>
        </div>
    );
};

export default FileAvatar;