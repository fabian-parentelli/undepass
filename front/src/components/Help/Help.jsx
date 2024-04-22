import './help.scss';
import Location from '../utils/Location/Location';
import SearchHelp from './SearchHelp/SearchHelp';
import UserHelp from './UsersHelp/UserHelp';
import GeneralHelp from './GeneralHelp/GeneralHelp';

const Help = () => {

    return (
        <div className='help'>
            <div className='helpHeader'>
                <div className='helpHCont'>
                    <div className='helpHTop'>
                        <h2>Información</h2>
                        <ul>
                            <li><a href="#userHelp">Usuario</a></li>
                            <li><a href="#">Mercado</a></li>
                            <li><a href="#">Plataforma</a></li>
                        </ul>
                    </div>
                    <div className='line'></div>
                </div>
                <div className='helpHContBottom'>
                    <h3>Toda la información al alcance de un click</h3>
                    <p>A demás podés apoyarte con nuestros videos tutoriales</p>
                    <SearchHelp />
                    <Location />
                </div>
            </div>
            <GeneralHelp />
            <UserHelp />
        </div>
    );
};

export default Help;