import './bannerSite.scss';
import { useEffect, useRef, useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { postSiteImgApi } from '../../../../helpers/sites/postSiteImg.api.js';

const Banner = ({ folderName, nameImg, site, setLoading }) => {

    const inputRef = useRef(null);
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        const existsImg = site.img.find((img) => img.name === nameImg);
        if (existsImg) setBackgroundImage(existsImg.url);
    }, []);

    const handleFileUpload = () => inputRef.current.click();

    const handleFileInputChange = async (event) => {
        setLoading(true);
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => setBackgroundImage(reader.result);
        if (file) reader.readAsDataURL(file);

        const formData = new FormData();
        formData.append('files', file);
        formData.append('folderName', folderName);
        formData.append('siteId', site._id);
        formData.append('name', nameImg);
        await postSiteImgApi(formData);
        setLoading(false);
    };

    return (
        <div className='bannerSite' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                ref={inputRef}
                style={{ display: 'none' }}
            />
            <button onClick={handleFileUpload}>
                <CameraAltIcon />
                Editar Foto
            </button>
        </div>
    );
};

export default Banner;