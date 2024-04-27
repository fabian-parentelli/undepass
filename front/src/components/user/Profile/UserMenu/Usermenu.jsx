import './userMenu.scss';
import { Link } from 'react-router-dom';
import PhotoIcon from '@mui/icons-material/Photo';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import HomeIcon from '@mui/icons-material/Home';

const UserMenu = () => {

    return (
        <div className='userMenu'>

            <Link to={'/profile'} className='userMen'>
                <HomeIcon className='icon' />
                <p>Mi perfil</p>
            </Link>

            <Link to={'/profile/yourdata'} className='userMen'>
                <AccountBoxIcon className='icon' />
                <p>Tus Datos</p>
            </Link>
            
            <Link to={'/profile/avatarmenu'} className='userMen'>
                <PhotoIcon className='icon' />
                <p>Avatar</p>
            </Link>
            
            <Link to={'/profile/eventmenu'} className='userMen'>
                <TheaterComedyIcon className='icon' />
                <p>Eventos</p>
            </Link>

            <Link to={'/profile/whatyouremail'} className='userMen'>
                <LockIcon className='icon' />
                <p>Contraseña</p>
            </Link>
            
        </div>
    );
};

export default UserMenu;