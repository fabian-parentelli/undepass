import './searchAvatar.scss';
import { useEffect, useState } from 'react';
import { vewAvatarApi } from '../../../../../../helpers/avatars/vewAvatar.api.js';
import { updUserAvatar } from '../../../../../../helpers/users/updUserAvatar.api.js';
import { getUserByIdApi } from '../../../../../../helpers/users/getUserById.api.js';

const SearchAvatar = ({ userId, setLoading, setAvatarsVew, setUser }) => {

    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await vewAvatarApi();
            if (response.status === 'success') {
                setAvatars(response.result);
                setLoading(false);
            };
        }; fetchData();
    }, []);

    const handleSelected = async (id) => {
        setLoading(true);
        const response = await updUserAvatar({ id }, userId);
        if (response.status === 'success') {
            const response = await getUserByIdApi(userId);
            if (response.status === 'success') {
                setUser(response.result.avatar[0]);
                setAvatarsVew(false);
                setLoading(false);
            };
        };
        setLoading(false);
    };

    return (
        <div className='searchAvatar'>
            <h3>Elige el avatar que más te guste</h3>

            <div className='vewAvatarCont'>
                {avatars && avatars.map((avat) => (
                    avat.active && (
                        <div key={avat._id} className='vAavatar'>
                            <div className='contImg'>
                                <img className='imgAvat' src={avat.avatarUrl} alt={avat.avatarName} />
                                <div className='vAcontImg'>
                                    <img src={avat.avatarUrl} alt={avat.avatarName} />
                                </div>
                            </div>
                            <p>{avat.avatarName.replace('.png', '')}</p>
                            <button onClick={() => handleSelected(avat._id)} className='btn'>
                                Elegir
                            </button>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default SearchAvatar;