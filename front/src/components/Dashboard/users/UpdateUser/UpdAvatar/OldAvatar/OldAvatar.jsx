import './oldAvatar.scss';
import { useEffect, useState } from 'react';
import { getUserByIdApi } from '../../../../../../helpers/users/getUserById.api.js';
import { updOldAvatUserApi } from '../../../../../../helpers/users/upOldAvatUser.api.js';

const OldAvatar = ({ userId, setLoading, setUser }) => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchData = async (userId) => {
            setLoading(true);
            const response = await getUserByIdApi(userId);
            if (response.status === 'success') {
                setUsers(response.result);
                setLoading(false);
            };
        }; fetchData(userId);
    }, []);

    const handleSelected = async (avat) => {
        setLoading(true);
        const response = await updOldAvatUserApi({ avat }, userId);
        if (response.status === 'success') {
            const response = await getUserByIdApi(userId);
            if (response.status === 'success') {
                setUsers(response.result);
                setUser(response.result.avatar[0]);
            };
        };
        setLoading(false);
    };

    return (
        <div className='oldAvatar'>
            <div className='avtHist'>
                {users && users.avatar.map((avat, index) => (
                    <div key={index} className='avHistImg'>
                        <div className='divImg'>
                            <img src={avat} alt='imagen' />
                        </div>
                        <button onClick={() => handleSelected(avat)}>{index} Seleccionar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OldAvatar;