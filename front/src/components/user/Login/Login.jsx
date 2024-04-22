import Load from '../../utils/Load';
import LoginHtml from './LoginHtml';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SnackbarAlert from '../../utils/SnackbarAlert'
import { useLoginContext } from '../../../context/LoginContext';

const Login = () => {

    const { loading, login, user } = useLoginContext();
    const [values, setValues] = useState({ email: '', password: '' });
    const [message, setMessage] = useState({ status: '', mess: '' });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        login(values);
    };

    useEffect(() => {
        if (user.logged) {
            setMessage({ status: 'success', mess: 'Inicio de sesión exitoso' });
            setOpen(true);
            const location = localStorage.getItem('location');
            if (location) {
                localStorage.removeItem('location');
                setTimeout(() => { navigate(`/${location}`) }, 2000);
            } else setTimeout(() => { navigate('/') }, 2000);
        };
        if (user.error) {
            setMessage({ status: 'error', mess: user.error });
            setOpen(true);
            setTimeout(() => { setOpen(false) }, 2000);
        };
    }, [user]);

    return (
        <>
            <LoginHtml
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                values={values}
            />
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </>
    );
};

export default Login;