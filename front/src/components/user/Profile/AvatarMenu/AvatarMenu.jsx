import './avatarMenu.scss';
import { useState } from 'react';
import AvatarSwhows from './AvatarsShow/AvatarShows';
import ProfileShow from './ProfileShow/ProfileShow';

const AvatarMenu = ({ user }) => {

    const [showAvatar, setShowAvatar] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const handleChangeAvatar = () => {
        setShowProfile(false);
        setShowAvatar(true);
    };

    const handleChangeProfile = () => {
        setShowAvatar(false);
        setShowProfile(true);
    };

    return (
        <div className='avatarMenu'>
            <div className='panProUser'>
                <div className='dimg'>
                    {user && <img src={user.avatar[0]} className='panProImg' alt="avatar" />}
                </div>
                <div className='panProTitle'>
                    <h2>Tu imagen de peril</h2>
                    <p>Puedes elegir un avatar o una imagen propia</p>
                    <div className='line'></div>
                    <div className='avatMenuButton'>
                        <button onClick={handleChangeAvatar}>Avatar</button>
                        <button onClick={handleChangeProfile} >Tu foto</button>
                    </div>
                </div>
            </div>
            {showAvatar && <AvatarSwhows />}
            {showProfile && <ProfileShow />}
        </div>
    );
};

export default AvatarMenu;