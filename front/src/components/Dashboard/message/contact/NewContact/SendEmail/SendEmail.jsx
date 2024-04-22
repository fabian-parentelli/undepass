import './sendEmail.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { newContactRespApi } from '../../../../../../helpers/contacts/newContactResp.api.js';

const SendEmail = ({ setLoading }) => {

    const [values, setValues] = useState({ email: '', affair: '', message: '' });
    const navigate = useNavigate();

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newContactRespApi(values);
        if(response.status === 'success') {
            setLoading(false);
            navigate('/dashboard');
        };
    };

    return (
        <div className='sendEmail'>
            <h4>Enviar un email</h4>

            <form className='formSendEmail' onSubmit={handleSubmit}>
                <div className='divSendEmail'>
                    <label>Email</label>
                    <input
                        type="text"
                        name='email'
                        required
                        placeholder='ejemplo@ejemplo.com'
                        onChange={handleChange}
                    />
                </div>

                <div className='divSendEmail'>
                    <label>Asunto</label>
                    <input
                        type="text"
                        name='affair'
                        required
                        placeholder='Entradas gratis'
                        onChange={handleChange}
                    />
                </div>

                <div className='divSendEmail'>
                    <label>Mensaje</label>
                    <textarea
                        name="message"
                        id="" cols="30" rows="10"
                        required
                        placeholder='Mensaje'
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button className='btn'>Enviar</button>
            </form>
        </div>
    );
};

export default SendEmail;