import './updDataHelp.scss';

const UpdDataHelp = () => {

    return (
        <div className='updDataHelp'>
            <div className='line'></div>

            <div className='registerHelpUp'>
                <h5 id='updDataHelp'>Modifíca tus datos</h5>
                <p>Datos del registro</p>
                <a className='registerHelpVideo' href="">Video tutorial</a>
            </div>

            <div className='registerHelpCont'>
                <p>
                    Una vez que ya hayas <strong>Iniciado sesión</strong>, en la barra de navegación en la parte superior, vas a encontrar un menú desplegable llamado <strong>Usuario</strong>, ahí vas a encontrar la opción <strong>Tu perfil</strong>. Eso te llevará a tu <strong>Panel de administración</strong>. En la parte izquierda vas a encontrar un menú interno. Ingresa a <strong>Tus Datos</strong>.
                </p>
                <div className='registerHelpImg'>
                    <img className='updDataImg1' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712005328/helps/uznufzenetsl09painau.png" alt="help1" />
                    <img className='updDataImg2' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712005329/helps/nfgzwjievchewwwuzmtj.png" alt="help2" />
                </div>
            </div>

            <div className='updDataHelpIN'>
                <p>
                    Una vez que ingreses a <strong>Tus Datos</strong>, vas a poder encontrar los datos ingresados en la sección de registro, nombre, email, fecha de cumpleaños y tu ubicación. Puedes simplemente verificar que se encuentren correctos o modificarlos de ser necesario.<br /><br />
                    La fecha de cumpleaños es solicitada para verificar si eres mayor de edad, ya que necesitamos de este dato para poder realizar transacciones económicas dentro de la plataforma.<br />
                    Lo siguiente es las ubicaciones, este dato te lo pedimos para poder ofrecerte los eventos más cercanos a tu ubicación.<br /><br />
                    La sección de la imagen de perfil o avatar se encuentra en otra sección que lo pasamos a explicar en la siguiente sección.
                </p>
                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712005329/helps/k1l9dgulam0hkh5hmgt8.png" alt="datos" />
            </div>

            <div className='financeData'>
                <h2 id='finaceDate'>Instrucciones para completar tus datos financieros:</h2>
                <p>Al hacer clic en el menú "Tus datos" encontrarás un botón denominado "Datos financieros". Al hacer clic en este botón, se desplegará una ventana en la que encontrarás un formulario para completar tus datos financieros.</p>

                <h3>Confidencialidad de la información:</h3>
                <p>La información que proporciones será tratada de manera confidencial. En el evento solo se mencionará el nombre del mismo. Estos detalles son necesarios para la elaboración de facturas relacionadas con los resultados del evento.</p>

                <h3>Datos requeridos:</h3>
                <ol>
                    <li><strong>Titular de la cuenta bancaria o billetera digital:</strong> Ingresa el nombre del titular de la cuenta o billetera digital.</li>
                    <li><strong>Cuit/Cuil:</strong> Proporciona tu número de CUIT o CUIL.</li>
                    <li><strong>Entidad financiera:</strong> Selecciona tu entidad financiera de una lista proporcionada. Si no encuentras la tuya, selecciona "Otro" y se abrirá un campo de texto donde podrás ingresar el nombre de la entidad.</li>
                    <li><strong>Tipo de cuenta:</strong> Selecciona el tipo de cuenta entre las opciones: "Caja de ahorro", "Cuenta corriente" o "Billetera digital".</li>
                    <li><strong>CBU o Alias:</strong> Ingresa tu número de CBU o Alias (cualquiera de los dos).</li>
                </ol>

                <h3>Envío de los datos:</h3>
                <p>Una vez completados los datos, presiona el botón "Enviar". Es importante tener en cuenta que estos datos son necesarios para poder cobrar las entradas vendidas a través de esta plataforma. Además, recuerda que debes ser mayor de edad para completar este formulario.</p>

                <h3>Actualización de datos:</h3>
                <p>Si ya has ingresado tus datos anteriormente, al presionar nuevamente el botón "Datos financieros", la ventana que se abre mostrará los datos que ya has ingresado. En lugar de "Enviar", el botón mostrará "Actualizar", lo que te permitirá modificar y actualizar la información si es necesario.</p>

                <p>Espero que esta guía te ayude a completar tus datos financieros de manera correcta y sin problemas. Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en comunicarte con nosotros. ¡Gracias por tu colaboración!</p>
                <img className='updDataImg1' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712176315/helps/ythp3792atfnam7ijxul.png" alt="help1" />
            </div>
        </div>
    );
};

export default UpdDataHelp;