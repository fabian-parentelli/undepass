import './deleteEventHelp.scss';
import { Link } from 'react-router-dom';

const DeleteEventHelp = () => {

    return (
        <div className='deleteEventHelp' id='deleteEventHelp'>
            <div className='line'></div>

            <div className='eventProfilHelpUp'>
                <h5>Eliminar entradas</h5>
                <p>Pasos para eliminar un tipo o varios de entrada</p>
                <Link to={'/videohelp/deleteEventHelp'} className='registerHelpVideo'>Video tutorial</Link>
            </div>

            <div className='eventProfilHelpText'>
                <p>
                    Cuando estás creando un evento y te das cuenta de que has creado un tipo de entrada por error, o simplemente cambias de opinión por algún motivo, puedes eliminar ese tipo de entrada fácilmente. Para hacerlo, sigue estos pasos:<br/><br/>

                    1- Dirígete a la sección de edición de tu evento.<br/>
                    2- Localiza el tipo de entrada que deseas eliminar.<br/>
                    3- En la parte superior izquierda de cada entrada, verás un icono de un bote de basura.<br/><br/>
                    Haz clic en este icono para eliminar el tipo de entrada seleccionado.<br/>
                    Es importante tener en cuenta que si ya existen órdenes de compra asociadas a ese tipo de entrada al momento de eliminarlo, estas órdenes no desaparecerán automáticamente. Es tu responsabilidad comunicarte con los usuarios afectados para informarles sobre cualquier cambio y, si es necesario, reasignar sus entradas.<br/><br/>

                    Recuerda que la devolución del valor de la entrada a un cliente solo se realiza si el evento como tal se elimina o se desactiva. Por lo tanto, asegúrate de confirmar tus decisiones antes de realizar cambios significativos en tu evento.
                </p>
                <img className='deleteEventHelpImg' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1714311274/helps/vl15fqzlgyxsmfpt4dan.png" alt="help1" />
            </div>

        </div>
    );
};

export default DeleteEventHelp;