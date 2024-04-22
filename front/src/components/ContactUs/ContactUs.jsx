import './contactUs.scss';
import Load from '../utils/Load.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SnackbarAlert from '../utils/SnackbarAlert.jsx';
import { useLoginContext } from '../../context/LoginContext';
import { newContactApi } from '../../helpers/contacts/newContact.api.js';

const ContactUs = () => {

    const { user } = useLoginContext();
    const [values, setValues] = useState({ name: '', email: '', phone: '', id: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ satatus: '', mess: '' });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (user && user.data && user.data._id) setValues(preValues => ({
            ...preValues, name: user.data.name, email: user.data.email, id: user.data._id, phone: user.data.phone || ''
        }));
        else setValues(preValues => ({ ...preValues, id: 'No eres usuario' }));
    }, [user.data]);

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (values.id === 'No eres usuario') {
            const response = await newContactApi(values);
            if (response.status === 'success') {
                setOpen(true);
                setMessage({ status: 'success', mess: 'Mensaje enviado correctamente' });
                setLoading(false);
                setTimeout(() => { navigate('/') }, 2000);
            };
        } else {
            setLoading(false);
            console.log('es uausario');
        };
    };

    return (
        <div className='contactUs'>
            <form onSubmit={handleSubmit}>
                <h2>Contáctanos</h2>
                <div className='divContactUs'>
                    <div>
                        <label>Nombre completo</label>
                        <input
                            className='inpContUs'
                            type="text"
                            placeholder='Campo obligatorio'
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            className='inpContUs'
                            type="email"
                            placeholder='Campo obligatorio'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className='divContactUs'>
                    <div>
                        <label>Teléfono</label>
                        <input
                            className='inpContUs'
                            type="text"
                            placeholder='Campo obligatorio'
                            name='phone'
                            value={values.phone || ''}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Identificador</label>
                        <input
                            className='inpContUs'
                            type="text"
                            name='id'
                            value={values.id}
                            onChange={handleChange}
                            readOnly={true}
                        />
                    </div>
                </div>

                <div className='cuTextArea'>
                    <label>Mensaje</label>
                    <textarea
                        name="message"
                        cols="30" rows="10"
                        placeholder='Campo Obligatorio'
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button className='btn'>Enviar</button>
                <Link to={'/help'} className='btnHelp'>Información general</Link>
                <p className='pcont'>¡Gracias por ponerte en contacto con nosotros!<br/>
                    Nos esforzamos por proporcionar respuestas oportunas y de calidad a todas las consultas que recibimos.<br/>
                    Recuerda que trabajamos arduamente para atender cada mensaje de manera exhaustiva. Esperamos poder brindarte una respuesta completa dentro de las próximas 48 horas hábiles.<br/>
                    Agradecemos tu paciencia y comprensión.<br/>
                    ¡Que tengas un excelente día!</p>
            </form>
            <Load loading={loading} />
            <SnackbarAlert open={open} message={message} />
        </div>
    );
};

export default ContactUs;