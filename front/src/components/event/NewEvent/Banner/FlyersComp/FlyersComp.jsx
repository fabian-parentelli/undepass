import './flyersComp.scss';
import { useState } from 'react';
import CloudFile from '../../../../utils/CloudFile/CloudFile';
import { updFlyerApi } from '../../../../../helpers/events/updFlyer.api.js';

const FlyersComp = ({ setIsWindox, events, setLoading }) => {

    const [formData, setFormData] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (formData) {
            const response = await updFlyerApi(formData, events._id);
            if(response.status === 'success') {
                if(events.tickets) setIsWindox('tickets');
                else setIsWindox('chekOut');
            };
        };
        setLoading(false);
    };
    const handleFileChange = (data) => setFormData(data);

    return (
        <form className='flyersComp' onSubmit={handleFormSubmit}>
            <h3>Sube tu propio flyer</h3>
            <CloudFile onChange={handleFileChange} folderName={'flyers'} contClass={'cfRect'} />
            <p>La imágen no debe medir mas de 400px de ancho por 400px de alto y no pesar mas de un 1MB.</p>
            <button className='btn'>Enviár</button>
        </form>
    );
};

export default FlyersComp;