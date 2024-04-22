import './contactUsHelp.scss';

const ContactUsHelp = () => {

    return (
        <div className='contactUsHelp'>
            <div className='registerHelpUp'>
                <h5 id='registerHelp'>Contáctanos</h5>
                <p>Como puedes comunicarte con nosotros.</p>
                <a className='registerHelpVideo' href="">Video tutorial</a>
            </div>
            <div className='registerHelpCont'>
                <p>En la barra de navegación en la parte superior, vas a encontrar un menú desplegable llamado <strong>Usuario</strong>, ahí vas a encontrar la opción <strong>Contacto</strong>. Esto te dirigirá a la página de Contáctanos.
                    <br />
                    Si eres un nuevo visitante o aún no has iniciado sesión en nuestro sistema, por favor sigue estos pasos:<br/><br/>
                    1. Completa los campos obligatorios: <strong>Nombre completo</strong> y <strong>Correo electrónico.</strong> Estos son datos indispensables para poder comunicarnos contigo.<br/>
                    2. Opcionalmente, puedes proporcionar tu número de <strong>teléfono</strong> si lo deseas.<br/>
                    3. No es necesario completar el campo de Identificador si no has iniciado sesión.<br/>
                    4. A continuación, escribe tu <strong>mensaje</strong> en el área de texto designada. Este es el espacio donde puedes compartir tus consultas, comentarios o inquietudes con nosotros.<br/><br/>
                    Una vez que hayas enviado tu <strong>mensaje</strong>, nuestro equipo se pondrá manos a la obra. Nos comprometemos a responderte dentro de las próximas 48 horas hábiles.<br/><br/>
                    Por otro lado, si ya eres un usuario registrado y has iniciado sesión en nuestro sistema, ¡no te preocupes por completar tus datos! El sistema los autocompletará automáticamente para ti. Todo lo que necesitas hacer es escribir tu mensaje y enviárnoslo.
                </p>
                <div className='registerHelpImg'>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712706412/helps/y4tjacu0en0c2kxf0aog.png" alt="nav-register" />
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712706411/helps/dtiq3qjsygosq636hvff.png" alt="register" />
                </div>
            </div>
        </div>
    );
};

export default ContactUsHelp;