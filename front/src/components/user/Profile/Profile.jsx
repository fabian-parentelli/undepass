import './profile.scss';
import { useEffect } from "react";
import UserMenu from './UserMenu/Usermenu';
import { Route, Routes } from 'react-router-dom';
import { useLoginContext } from "../../../context/LoginContext";

import PanelProfile from './PanelProfile/PanelProfile';
import YourData from './YourData/YourData';
import WhatEmail from '../recoverPassword/WhatEmail/WhatEmail';
import AvatarMenu from './AvatarMenu/AvatarMenu';

const Profile = () => {

    const { user, current } = useLoginContext();
    useEffect(() => { current() }, []);

    return (
        <div className="profile">
            <UserMenu />

            <Routes>
                <Route path='/' element={<PanelProfile user={user.data} />} />
                <Route path="/yourdata" element={<YourData user={user.data} />} />
                <Route path='/whatyouremail' element={<WhatEmail />} />
                <Route path='/avatarmenu' element={<AvatarMenu user={user.data} />} />
            </Routes>
        </div>
    );
};

export default Profile;