import './dashboard.scss';
import Fields from './Fields/Fields';
import { Routes, Route, Link } from 'react-router-dom';

import Panel from './Panel/Panel';
import NewAvatar from './avatar/NewAvatar/NewAvatar';
import VewAvatar from './avatar/VewAvatar/VewAvatar';
import VewUsers from './users/VewUsers/VewUsers';
import VewContact from './message/contact/VewContact/VewContact';
import Newcontact from './message/contact/NewContact/NewContact';
import UpdateUser from './users/UpdateUser/UpdateUser';
import NewImEvent from './avatar/NewImgEvent/NewImgEvent';
import GetEvents from './event/GetEvents/GetEvents';
import NewEvents from './event/NewEvents/NewEvents';
import UpdateEventAd from './event/UpdateEventAd/UpdateEventAd';

const Dashboard = () => {

    return (
        <div className='dashboard'>
            <div className='dashboardCont'>
                <Link to={'/dashboard'} className='dashboardH2'><h2>Panel</h2></Link>
                <Fields
                    title={'Imagenes'} category={[{ name: 'Nuevo avatar', path: 'newavatar' }, { name: 'Ver avatares', path: 'vewavatar' }, { name: 'Nuevo Evento', path: 'newimgevent' }]} />
                <Fields title={'Usuarios'} category={[{ name: 'Ver', path: 'vewuser' }, { name: 'Modificar', path: 'upadUser' }, { name: 'x', path: '' }]} />
                <Fields title={'Mensajes'} category={[{ name: 'Contactos sin ver', path: 'vewcontact' }, { name: 'Enviar email', path: 'newcontact' }]} />
                <Fields title={'Eventos'} category={[{ name: 'Ver eventos', path: 'getevent' }, { name: 'Crear evento', path: 'newevent' }]} />
                <Fields title={'x'} category={[{ name: 'sin ver', path: 'unseenorders' }, { name: 'historicos', path: '' }]} />
                <Fields title={'x'} category={[{ name: 'mensajes', path: 'newsMessage' }, { name: 'ofertas', path: '' }]} />
            </div>
            <Routes>
                <Route path='/' element={<Panel />} />
                <Route path='/newavatar' element={<NewAvatar />} />
                <Route path='/vewavatar' element={<VewAvatar />} />
                <Route path='/newimgevent' element={<NewImEvent />} />

                <Route path='/vewuser' element={<VewUsers />} />
                <Route path='/upadUser/:id?' element={<UpdateUser />} />

                <Route path='/vewcontact' element={<VewContact />} />
                <Route path='/newcontact/:id?' element={<Newcontact />} />

                <Route path='/getevent' element={<GetEvents />} />
                <Route path='/newevent' element={<NewEvents />} />
                <Route path='/updevent/:id' element={<UpdateEventAd />}/>
            </Routes>
        </div>
    );
};

export default Dashboard;