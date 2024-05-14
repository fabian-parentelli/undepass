import './doorPanel.scss';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactAmount from './ContactAmount/ContactAmount.jsx';
import UsersAmount from './UsersAmount/UsersAmount.jsx';
import EventQuantity from './EventQuantity/EventQuantity.jsx';
import SitesCount from './SitesCount/SitesCount.jsx';

const DoorPanel = () => {

   

    return (
        <div className='doorPanel'>
            <EventQuantity />
            <SitesCount />
            <p>Entradas Vendidas: 20</p>
            <p>Saldos Pendientes: 8</p>
            <UsersAmount />
            <ContactAmount />
            <Link to={'/dashboard'} className='btnDoorCont'>
                <DashboardIcon className='btnDoor' />
            </Link>
        </div>
    );
};

export default DoorPanel;