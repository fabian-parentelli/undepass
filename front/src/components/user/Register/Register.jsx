import './register.scss';
import Load from '../../utils/Load';
import RegisterHtml from './RegisterHtml';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SnackBarAlert from '../../utils/SnackbarAlert';
import { useLoginContext } from '../../../context/LoginContext';

const Register = () => {

    const { register, loading, user } = useLoginContext();
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '', birthday: '', email: '', password: '', location: { province: '', municipality: '', city: '' }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.location.city) {
            register(values);
        } else {
            setOpen(true);
            setMessage({ status: 'error', mess: 'falta completar los campos de localidad' });
            setTimeout(() => { setOpen(false) }, 2000);
        };
    };

    useEffect(() => {
        if (user.error) {
            setMessage({ status: 'error', mess: user.error });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        };
        if (user.registered) {
            setMessage({ status: 'success', mess: 'Registro exitoso' });
            setOpen(true);
            setTimeout(() => { navigate('/login') }, 2000);
        };
    }, [user]);

    return (
        <>
            <RegisterHtml
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                setValues={setValues}
            />
            <Load loading={loading} />
            <SnackBarAlert message={message} open={open} />
        </>
    );
};

export default Register;