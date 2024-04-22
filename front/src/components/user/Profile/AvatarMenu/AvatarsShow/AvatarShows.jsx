import './avatarSwhows.scss';
import { useEffect, useState } from 'react';
import Load from '../../../../utils/Load.jsx';
import { vewAvatarApi } from '../../../../../helpers/avatars/vewAvatar.api.js';
import { updUserAvatar } from '../../../../../helpers/users/updUserAvatar.api.js';
import { useLoginContext } from '../../../../../context/LoginContext.jsx';

const AvatarSwhows = () => {

    const { current } = useLoginContext();

    const [avatars, setAvatars] = useState([]);
    const [loading, setLoading] = useState(false);

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
        const response = await updUserAvatar({ id });
        if (response.status === 'success') {
            localStorage.setItem('token', response.accesToken);
            await current();
            setLoading(false);
        };
    };

    return (
        <div className='avatarSwhows'>
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
            <Load loading={loading} />
        </div>
    );
};

export default AvatarSwhows;