import './priUser.scss';
import { useEffect, useState } from 'react';
import BaseDate from '../BaseDate/BaseDate.jsx';
import { getUserByIdApi } from '../../../../../helpers/users/getUserById.api.js';
import { updateUserApi } from '../../../../../helpers/users/updateUser.api.js';

const PriUser = ({ userId, setLoading, handleFinance, setFinanceData, handleAvatar }) => {

    const [user, setUser] = useState(null);
    const [values, setValues] = useState(null);

    useEffect(() => {
        const fetchData = async (userId) => {
            setLoading(true);
            const response = await getUserByIdApi(userId);
            setFinanceData(response.result.financeData);
            if (response.status === 'success') {
                setUser(response.result);
                setLoading(false);
            };
        }; fetchData(userId);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('location.')) {
            const locationField = name.split('.')[1];
            setUser(prevUser => ({
                ...prevUser, location: { ...prevUser.location, [locationField]: value }
            }));
        } else setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = { ...user, ...values }
        const response = await updateUserApi(data, data._id);
        if (response.status === 'success') {
            setUser(response.result);
            setLoading(false);
        };
    };

    return (
        <div className='priUser'>
            {user && <BaseDate
                user={user}
                handleChange={handleChange}
                setValues={setValues}
                handleSubmit={handleSubmit}
                handleFinance={handleFinance}
                handleAvatar={handleAvatar}
            />}
        </div>
    );
};

export default PriUser;