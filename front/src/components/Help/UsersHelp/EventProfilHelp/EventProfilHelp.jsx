import './eventProfilHelp.scss';

const EventProfilHelp = () => {

    return (
        <div className='eventProfilHelp'>

            <div className='line'></div>

            <div className='eventProfilHelpUp' id='eventProfilHelp'>
                <h5>Configurar tus eventos</h5>
                <p>Ver, modificar y activar eventos</p>
                <a className='registerHelpVideo' href="">Video tutorial</a>
            </div>

            <div className='eventProfilHelpCont'>
                <p>
                    Una vez que ya hayas <strong>Iniciado sesión</strong>, en la barra de navegación en la parte superior, vas a encontrar un menú desplegable llamado <strong>Usuario</strong>, ahí vas a encontrar la opción <strong>Tu perfil</strong>. Eso te llevará a tu <strong>Panel de administración</strong>. En la parte izquierda vas a encontrar un menú interno. Ingresa a <strong>Eventos</strong>.
                </p>
                <div className='registerHelpImg'>
                    <img className='updDataImg1' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712005328/helps/uznufzenetsl09painau.png" alt="help1" />
                    <img className='updDataImg2' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1714224416/helps/nvte2jeivi0a92bpdc6m.png" alt="help2" />
                </div>
            </div>

            <div className='eventProfilHelpText'>
                <p>
                    Dentro de esta sección, encontrarás varios elementos que te permitirán gestionar tus eventos de manera eficiente. Aquí te explicamos cada uno de ellos:<br />
                    <strong>Crear:</strong><br />
                    Al seleccionar esta opción, serás dirigido al menú de creación de eventos. 
                    <a href="#newEventHelp"><strong> Aquí</strong></a> encontrarás toda la información necesaria para crear un nuevo evento de manera sencilla y rápida.<br />
                    <strong>Ver:</strong><br />
                    En esta sección podrás visualizar todos tus eventos activos.<br /> Te proporcionaremos una previsualización del nombre del evento, la fecha de inicio, la ciudad y la provincia donde se llevará a cabo. Además, tendrás la posibilidad de realizar varias acciones:<br />
                    <strong>Desactivar:</strong> Si por algún motivo deseas dar de baja un evento, simplemente haz clic en "Desactivar". Es importante destacar que al desactivar un evento, cualquier pago realizado por entradas hasta ese momento será reembolsado a los clientes.<br />
                    <strong>Modificar:</strong> Esta opción te llevará a un menú donde podrás realizar modificaciones en todos los datos ingresados para el evento.<br />
                    <strong>Ver:</strong> Utiliza este botón para visualizar el evento tal como lo ven los usuarios.
                </p>
                <img className='evProImg' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1714229789/helps/cdxjteba97eovmk2iupy.png" alt="help1" />
            </div>

        </div>
    );
};

export default EventProfilHelp;