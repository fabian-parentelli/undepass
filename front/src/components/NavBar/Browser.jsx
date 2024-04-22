import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useLoginContext } from '../../context/LoginContext';
import { useEffect } from 'react';

const Browser = ({ handleMenuClick, menuVisible, listElementsRef, setMenuVisible }) => {

    const { user, logout } = useLoginContext();

    const handleInsideClick = () => { setMenuVisible(false) };
    const handleLogout = () => logout();

    const handleItemClick = (e) => {
        const listItem = e.currentTarget;
        const nestedMenu = listItem.querySelector('.menu_nesting');
        const inside = listItem.querySelector('.menu_inside');

        if (listItem && nestedMenu) {
            listItem.classList.toggle('menu_item--active');
            if (listItem.classList.contains('menu_item--active')) {
                nestedMenu.style.height = `${nestedMenu.scrollHeight}px`;
            } else {
                nestedMenu.style.height = '0';
            };
        };
        if (inside && e.target.classList.contains('menu_inside')) {
            handleInsideClick();
        };
    };

    return (
        <div className="browser">
            <div className='prentation'>
                <Link to={'/'}><img src='underPassNT.png' alt='Pasarela' /></Link>
                <p>UnderPass</p>
            </div>
            <ul className={`menu_links ${menuVisible ? 'menu_links--show' : ''}`} ref={listElementsRef}>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>
                    <a href='#' className='menu_link'>Información <img src="arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to='/help' className='menu_link menu_link--inside'>General</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><Link to='/help#userHelp' className='menu_link menu_link--inside'>Usuario</Link></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Mercado</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Plataforma</a></li>
                    </ul>
                </li>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>
                    <a href='#' className='menu_link'>Mercado <img src="arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Ver Mercado</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Publicar</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Información</a></li>
                    </ul>
                </li>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>
                    <a href='#' className='menu_link'>Usuario <img src="arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        {!user.logged &&
                            <>
                                <li className='menu_inside loginDiv' onClick={handleInsideClick}><Link to={'/login'} className='menu_link menu_link--inside' >Iniciar Sesión</Link></li>
                                <li className='menu_inside registerId' onClick={handleInsideClick}><Link to={'/register'} className='menu_link menu_link--inside' href='#'>Registrarte</Link></li>
                            </>
                        }
                        <li className='menu_inside' onClick={handleInsideClick}><Link to={'/newevent_user'} className='menu_link menu_link--inside' href='#'>Crear Evento</Link></li>
                        {user.logged &&
                            <>
                                <li className='menu_inside updateUserDiv' onClick={handleInsideClick}><Link to={'/profile'} className='menu_link menu_link--inside'>Tu Perfil</Link></li>
                                <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Tu Página</a></li>
                                <li className='menu_inside' onClick={handleInsideClick}><Link onClick={handleLogout} to={('/')} className='menu_link menu_link--inside' >Cerrar sesión</Link></li>
                            </>
                        }
                        <li className='menu_inside' onClick={handleInsideClick}><Link to={('/contactus')} className='menu_link menu_link--inside' >Contacto</Link></li>
                    </ul>
                </li>
            </ul>
            <div className="menu_hamburguer" onClick={handleMenuClick}>
                <MenuIcon className="menu_img" fontSize='large' />
            </div>
        </div>
    );
};

export default Browser;