import './oldPicture.scss';
import Load from '../../../../../utils/Load.jsx';
import { useLoginContext } from '../../../../../../context/LoginContext.jsx';
import { updOldAvatUserApi } from '../../../../../../helpers/users/upOldAvatUser.api.js';
import { useState } from 'react';

const OldPicture = () => {

    const [loading, setLoading] = useState(false);
    const { user, current } = useLoginContext();

    const HandleClick = async (avat) => {
        setLoading(true);
        const response = await updOldAvatUserApi({ avat });
        if (response.status === 'success') {
            localStorage.setItem('token', response.accesToken);
            await current();
            setLoading(false);
        };
    };

    return (
        <div className='oldPicture'>
            <h3>Tus imagenes Anteriores</h3>
            {user && user.data && user.data.avatar.map((avat, index) => (
                <div key={index} className='imgContainers'>
                    <div className='dimg'>
                        <img src={avat} className='panProImg' alt="avatar" />
                    </div>
                    <button className='btn' onClick={() => HandleClick(avat)}>Elegír</button>
                </div>
            ))}
            <Load loading={loading} />
        </div>
    );
};

export default OldPicture;