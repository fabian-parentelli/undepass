import './userHelp.scss';
import RegisterHelp from './RegisterHelp/RegisterHelp';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LoginHelp from './LoginHelp/LoginHelp';
import RecoverPassHelp from './RecoverPassHelp/RecoverPass';
import UpdDataHelp from './UpdDataHelp/UpdDataHelp';
import AvatarHelp from './AvatarHelp/AvatarHelp';
import SearchHelp from '../SearchHelp/SearchHelp';
import EventProfilHelp from './EventProfilHelp/EventProfilHelp';
import DeleteEventHelp from './DeleteEventHelp/DeleteEvenetHelp';
import UpdTicketHelp from './UpdTicketHelp/UpdTicketHelp';
import NewHelpSite from './NewSiteHelp/NewSiteHelp';
import UpdSiteHelp from './UpdSiteHelp/UpdSiteHelp';
import UpdCommentHelp from './UpdCommentHelp/UpdCommentHelp';

const UserHelp = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);


    return (
        <div className='userHelp'>
            <div className='userHelpHeader'>
                <h4 id='userHelp'>Usuarios</h4>
                <SearchHelp />
            </div>
            <RegisterHelp />
            <LoginHelp />
            <RecoverPassHelp />
            <UpdDataHelp />
            <AvatarHelp />
            <EventProfilHelp />
            <DeleteEventHelp />
            <UpdTicketHelp />
            <NewHelpSite />
            <UpdSiteHelp />
            <UpdCommentHelp />
        </div>
    );
};

export default UserHelp;