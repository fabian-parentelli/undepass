import { useState } from "react";
import SnackBarAlert from '../../../utils/SnackbarAlert.jsx';
import { isPrivateEventApi } from '../../../../helpers/events/isPrivateEvent.api.js';

const GetTicketPrivate = ({ events, setIsPublic, setLoading }) => {

    const [values, setValues] = useState('');
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);

    const handleChange = (e) => setValues(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values) {
            setLoading(true)
            const response = await isPrivateEventApi(events._id, values);
            if (response.status === 'success') {
                setIsPublic(true);
            } else {
                setOpen(true);
                setMessage({ status: 'error', mess: response.error })
                setTimeout(() => { setOpen(false) }, 2000)
            };
            setLoading(false);
        };
    };

    return (
        <>
            <form className='getTicketPrivate' onSubmit={handleSubmit}>
                <label>Contraseña</label>
                <input type="text" onChange={handleChange} />
                <button className="btnPrivate">Verificar</button>
            </form>
            <SnackBarAlert message={message} open={open} />
        </>
    );
};

export default GetTicketPrivate;