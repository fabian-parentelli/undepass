import './isUser.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { newContactRespApi } from '../../../../../../helpers/contacts/newContactResp.api.js';

const IsUser = ({ user, setLoading }) => {

    const [values, setValues] = useState({ reqId: '', affair: '', message: '', email: '' });

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    useEffect(() => { setValues({ ...values, reqId: user._id, email: user.email }) }, [user]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newContactRespApi(values);
        if (response.status === 'success') {
            setLoading(false);
            navigate(-1);
        };
    };

    return (
        <div className='isUser'>
            {user &&
                <form onSubmit={handleSubmit}>
                    <div className='data'>
                        <div className='dataIcon'>
                            <CalendarMonthIcon />
                            <p> {user.date}</p>
                        </div>
                        <div className='dataIcon'>
                            <PersonIcon />
                            <p> {user.name}</p>
                        </div>
                        <div className='dataIcon'>
                            <AlternateEmailIcon />
                            <p> {user.email}</p>
                        </div>
                    </div>

                    <div className='divInp'>
                        <label>Asunto</label>
                        <input
                            type="text"
                            name='affair'
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className='divInp'>
                        <label>Mensaje</label>
                        <textarea
                            name="message" id="" cols="30" rows="10"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button className='btn'>Enviar</button>
                </form>
            }
        </div>
    );
};

export default IsUser;