import './newEventUser.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewEvent from '../NewEvent/NewEvent.jsx';
import { useLoginContext } from '../../../context/LoginContext';
import { getUserByIdApi } from '../../../helpers/users/getUserById.api.js';

const NewEventUser = () => {

    const [message, setMessage] = useState({ mess: '', type: null });
    const { user } = useLoginContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchaData = async () => {
            if (user.logged !== true) {
                setMessage({ mess: 'Debes iniciar sesión antes de crear un evento.', type: 'session' });
                localStorage.setItem('location', 'newevent_user');
                setTimeout(() => { navigate('/login') }, 3000);
            } else {
                const response = await getUserByIdApi(user.data._id);
                if (response.result.financeData) setMessage({ mess: '', type: 'isOk' });
                else {
                    setMessage({ mess: 'no tienes datos financieros', type: 'financeDate' });
                    localStorage.setItem('location', 'newevent_user');
                    setTimeout(() => { navigate('/profile/yourdata') }, 3000);
                };
            };
        }; fetchaData();
    }, [user]);

    return (
        <div className='newEventUser'>
            <h2>Crear un evento</h2>

            {message.type === 'session' &&
                <div className='divSession'>
                    <p>{message.mess}</p>
                    <img className='imgSession' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712777566/background/g5bxhgwyln4tzedwmlez.png" alt="alert" />
                </div>
            }

            {message.type === 'isOk' && <NewEvent user={user.data} />}

            {message.type === 'financeDate' &&
                <div className='divSession'>
                    <p>{message.mess}</p>
                    <img className='imgSession' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712781276/background/bzqvfiulnuqw0t0oxsws.png" alt="alert" />
                </div>
            }

        </div>
    );
};

export default NewEventUser;