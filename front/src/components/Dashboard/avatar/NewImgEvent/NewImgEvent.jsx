import './newImEvent.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import YardIcon from '@mui/icons-material/Yard';
import CloudFile from '../../../utils/CloudFile/CloudFile';
import { newImgEventApi } from '../../../../helpers/avatars/newImgEvent.api.js';
import Load from '../../../utils/Load.jsx';

const NewImEvent = () => {
    const [formData, setFormData] = useState(null);
    const [component, setComponent] = useState('');
    const [style, setStyle] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formData) {
            setLoading(true);
            formData.append('component', component);
            formData.append('style', style);
            formData.append('category', category);
            const response = await newImgEventApi(formData);
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
        <div className='newImEvent'>
            <div className='title'>
                <YardIcon className='icon' />
                <div className='textTitle'>
                    <h2>Subir Imagenes</h2>
                    <p>Imagenes de eventos</p>
                </div>
            </div>
            <div className='line'></div>

            <form className='bodyNewImEvent' onSubmit={handleFormSubmit}>
                <CloudFile onChange={handleFileChange} folderName="events" contClass='cfRect' />
                <div className='newImEventData'>
                    <div className='newIData'>
                        <label>Componente</label>
                        <input className='inp' type="text" value={component} onChange={(e) => setComponent(e.target.value)} />
                    </div>
                    <div className='newIData'>
                        <label>Estilo</label>
                        <input className='inp' type="text" value={style} onChange={(e) => setStyle(e.target.value)} />
                    </div>
                    <div className='newIData'>
                        <label>Categoria</label>
                        <select className='inp' name="category" onChange={(e) => setCategory(e.target.value)} >
                            <option value="">elegir</option>
                            <option value="concert">Concierto</option>
                            <option value="discotheque">Discoteca</option>
                            <option value="theater">Teatro</option>
                            <option value="stundup">Stand Up</option>
                            <option value="cultural">Cultural</option>
                            <option value="sports">Deportes</option>
                            <option value="cinema">Cine</option>
                        </select>
                    </div>
                    <button>Subir</button>
                </div>
            </form>
            <Load loading={loading} />
        </div>
    );
};

export default NewImEvent;
