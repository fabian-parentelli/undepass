import './yourData.scss';
import Load from '../../../utils/Load';
import YourCity from './YourCity/YourCity.';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../../../utils/AlertDialog';
import YourBirthday from './YorBirthday/YourBirthday';
import FinancialData from './FinancialData/FinancialData';
import { useLoginContext } from '../../../../context/LoginContext';

const YourData = ({ user }) => {

    const [values, setValues] = useState({
        name: user.name,
        birthday: user.birthday,
        email: user.email,
        location: {
            province: user.location.province,
            municipality: user.location.municipality,
            city: user.location.city
        },
        phone: user.phone || ''
    });
    const [open, setOpen] = useState(false);
    const [okUpdate, setOkUpdate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isVew, setIsVew] = useState(false);

    const navigate = useNavigate();

    const { updateUser } = useLoginContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    useEffect(() => {
        if (okUpdate) {
            setLoading(true);
            const fetchData = async () => {
                const response = await updateUser(values, user._id);
                if (response.status === 'success') {
                    setLoading(false);
                    setTimeout(() => { navigate('/profile') }, 1000);
                };
            }; fetchData();
        };
    }, [okUpdate]);

    const handleIsVew = () => {
        const age = calculateAge(values.birthday);
        if (age >= 18) {
            setIsVew(!isVew);
        } else {
            alert("Debes ser mayor de edad para acceder a los datos financieros.");
        }
    };

    return (
        <div className='yourData'>

            <div className='yourDataTitle'>
                <h2>Tus Datos</h2>
                <p>Verifica y modifica tus datos.</p>
                <div className='line'></div>
            </div>

            <div className='yourDataBody'>

                {values &&
                    <form className='yourDataForm' onSubmit={handleSubmit}>
                        <div className='yDDivLabe'>
                            <label>Nombre</label>
                            <input
                                type="text"
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='yDDivLabe'>
                            <label>Email</label>
                            <input
                                type="email"
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className='yDDivLabe'>
                            <label>Teléfono</label>
                            <input
                                type="text"
                                name='phone'
                                value={values.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='yDDivLabe'>
                            <label>Cumpleaños</label>
                            <YourBirthday user={user} setValues={setValues} />
                        </div>

                        <div className='yDDivLabe'>
                            <label>Tu Ubicación</label>
                            <YourCity values={values} setValues={setValues} />
                        </div>
                        <p>Tu n° identificador {user._id}</p>

                        <div className='yourdataAvatar'>
                            <div className='dimg'>
                                <img src={user.avatar[0]} className='panProImg' />
                            </div>
                            <label>Avatar</label>
                        </div>
                        <button className='btn'>Modificar Datos</button>
                    </form>
                }
                <div className='yourDataFinancial'>
                    <button className='btn' onClick={handleIsVew}>Datos Financieros</button>
                    {isVew && <FinancialData user={user} setIsVew={setIsVew} />}
                </div>
            </div>
            <Load loading={loading} />
            <AlertDialog open={open} setOpen={setOpen} message={message} setOkUpdate={setOkUpdate} />
        </div>
    );
};

export default YourData;

const message = {
    title: '¿Quieres modificar los datos?',
    text: 'Recuerda que al modificar datos como la ubicación puede alterar la visualización de los eventos.',
    isButton: true,
    buttonYes: 'modificar',
    buttonNo: 'volver'
};

const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    return age;
};