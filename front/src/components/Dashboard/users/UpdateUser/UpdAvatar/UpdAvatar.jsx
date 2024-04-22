import './updAvatar.scss';
import { useState, useEffect } from 'react';
import OldAvatar from './OldAvatar/OldAvatar.jsx';
import SearchAvatar from './SearchAvatar/SearchAvatar.jsx';
import { getUserByIdApi } from '../../../../../helpers/users/getUserById.api.js';
import FileAvatar from './FileAvatar/FileAvatar.jsx';


const UpdAvatar = ({ userId, setLoading }) => {

    const [isOld, setIsOld] = useState(false);
    const [avatarVew, setAvatarsVew] = useState(false);
    const [isFile, setIsFile] = useState(false);
    const [user, setUser] = useState(null);

    const handleIsOld = () => { setIsOld(!isOld); setAvatarsVew(false); setIsFile(false) };
    const handleAvatar = () => { setIsOld(false); setAvatarsVew(!avatarVew); setIsFile(false) };
    const handleFiles = () => { setIsOld(false); setAvatarsVew(false); setIsFile(!isFile) };

    useEffect(() => {
        const fetchData = async (userId) => {
            setLoading(true);
            const response = await getUserByIdApi(userId);
            if (response.status === 'success') {
                setUser(response.result.avatar[0]);
                setLoading(false);
            };
        }; fetchData(userId);
    }, []);

    return (
        <div className='updAvatar'>
            <h3>Avatares</h3>
            {user &&
                <div className='avatarImgDiv'>
                    <img className='avatarImg' src={user} alt="avatar" />
                </div>
            }
            <div className='updAvatarBtn'>
                <button className='btn' onClick={handleIsOld} >Historial</button>
                <button className='btn' onClick={handleAvatar} >Avatares</button>
                <button className='btn' onClick={handleFiles} >Subir Imagen</button>
            </div>
            {isOld && <OldAvatar userId={userId} setLoading={setLoading} setUser={setUser} />}

            {avatarVew &&
                <SearchAvatar
                    userId={userId}
                    setLoading={setLoading}
                    setAvatarsVew={setAvatarsVew}
                    setUser={setUser}
                />
            }

            {isFile &&
                <FileAvatar
                    userId={userId}
                    setUser={setUser}
                    setLoading={setLoading}
                />
            }
        </div>
    );
};

export default UpdAvatar;