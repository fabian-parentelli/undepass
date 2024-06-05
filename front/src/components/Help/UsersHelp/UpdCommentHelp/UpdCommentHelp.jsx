import './updCommentHelp.scss';
import { Link } from 'react-router-dom';

const UpdCommentHelp = () => {

    return (
        <div className='updCommentHelp'>
            <div className='updTicketHelpCont'>
                <div className='line'></div>
                <div className='updTicketHelpTitle'>
                    <h5 id='updCommentHelp'>Desactivar Comentarios</h5>
                    <p>Puedes dejar de mostrar comentarios que te hallan realizado en tú página.</p>
                    <Link to={'/videohelp/updCommentHelp'} className='registerHelpVideo'>Video tutorial</Link>
                </div>
            </div>

            <div className='updTicketHelptwo'>
                <p>
                    Una vez que hayas <strong>iniciado sesión</strong>, dirígete a la barra de navegación en la parte superior. Allí, encontrarás un menú desplegable llamado <strong>Usuario</strong>. Selecciona la opción <strong>Tu Perfil</strong>.
                </p>
                <p>
                    En el menú lateral de la izquierda, localiza y haz clic en <strong>Sitio</strong>.
                </p>
                <p>
                    Dentro del panel de sitio, encontrarás un apartado denominado <strong>Mensajes</strong>. Aquí podrás ver todos los comentarios en tu sitio, incluidos los tuyos. Si deseas que algún comentario no aparezca, puedes desactivarlo y desaparecerá de tu sitio.
                </p>
            </div>


            <img className='img2' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1716927412/helps/kyuxodizxp93jma5zewp.png" alt="img" />
        </div>
    );
};

export default UpdCommentHelp;