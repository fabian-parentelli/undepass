import './vewAvatar.scss';
import Load from '../../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import { vewAvatarApi } from '../../../../helpers/avatars/vewAvatar.api.js';
import { updActiveAvatarApi } from '../../../../helpers/avatars/updActiveAvatar.js';

const VewAvatar = () => {

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

    const handleActiveChange = async (id) => {
        setLoading(true);
        const response = await updActiveAvatarApi(id);
        if (response.status === 'success') {
            const response = await vewAvatarApi();
            setAvatars(response.result);
            setLoading(false);
        };
    };

    return (
        <div className='vewAvatar'>
            <h2>Ver y activar avatres</h2>
            <div className='vewAvatarCont'>
                {avatars && avatars.map((avat) => (
                    <div key={avat._id} className='vAavatar'>
                        <div className='contImg'>
                            <img className='imgAvat' src={avat.avatarUrl} alt={avat.avatarName} />
                            <div className='vAcontImg'>
                                <img src={avat.avatarUrl} alt={avat.avatarName} />
                            </div>
                        </div>
                        <p>{avat.avatarName}</p>
                        <button onClick={() => handleActiveChange(avat._id)} className='btn'>
                            {avat.active ? 'Desactivar' : 'Activar'}
                        </button>
                    </div>
                ))
                }
            </div>
            <Load loading={loading} />
        </div>
    );
};

export default VewAvatar;