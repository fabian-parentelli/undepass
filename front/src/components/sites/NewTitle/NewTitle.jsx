import './newTitle.scss';
import { useState } from 'react';
import Load from '../../utils/Load.jsx';
import SnackbarAlert from '../../utils/SnackbarAlert.jsx';
import { newSiteTitleApi } from '../../../helpers/sites/newSiteTitle.api.js';
import NewTitleHtml from './NewTitleHtml.jsx';

const NewTitle = ({ setNewSites, id }) => {

    const [values, setValues] = useState({
        userId: id, title: '', category: '', phone: '', email: '',
        location: { province: '', municipality: '', city: '' },
        socialNetworks: {
            facebook: '', instagram: '', youtube: '', spotify: '', twitter: '', tiktok: ''
        },
        shift: { active: false }
    });

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newSiteTitleApi(values);
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
            <NewTitleHtml
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                setValues={setValues}
            />

            <SnackbarAlert message={message} open={open} />
            <Load loading={loading} />
        </>
    );
};

export default NewTitle;