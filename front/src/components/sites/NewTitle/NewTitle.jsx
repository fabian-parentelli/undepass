import './newTitle.scss';
import { useState } from 'react';
import Load from '../../utils/Load.jsx';
import SnackbarAlert from '../../utils/SnackbarAlert.jsx';
import { newSiteTitleApi } from '../../../helpers/sites/newSiteTitle.api.js';

const NewTitle = ({ setNewSites, id }) => {

    const [siteTitle, setSiteTitle] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setSiteTitle(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const obj = { title: siteTitle, userId: id };
        const response = await newSiteTitleApi(obj);
        if (response.status === 'success') {
            setMessage({ status: 'success', mess: 'Titulo creado correctamente' });
            setOpen(true);
            setTimeout(() => { setNewSites(true) }, 2000);
        } else {
            setMessage({ status: 'error', mess: response });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        };
        setLoading(false);
    };

    return (
        <>
            <form className='newTitle' onSubmit={handleSubmit}>
                <h2>Crear tu sitio</h2>
                <div className='tileSiteForm'>
                    <label>Nombre de tu sitio</label>
                    <input
                        type="text"
                        name='title'
                        value={siteTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className='divBtnsite'><button>Crear</button></div>
            </form>
            <SnackbarAlert message={message} open={open} />
            <Load loading={loading} />
        </>
    );
};

export default NewTitle;