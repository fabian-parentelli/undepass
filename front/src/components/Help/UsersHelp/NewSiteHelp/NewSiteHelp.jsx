import './newHelpSite.scss';
import { Link } from 'react-router-dom';

const NewHelpSite = () => {

    return (
        <div className='newHelpSite'>
            <div className='updTicketHelpCont'>
                <div className='line'></div>
                <div className='updTicketHelpTitle'>
                    <h5 id='newSiteHelp'>Crear tu sitio</h5>
                    <p>Crear y modificar tu sitio</p>
                    <Link to={'/videohelp/newSiteHelp'} className='registerHelpVideo'>Video tutorial</Link>
                </div>
            </div>

            <div className='newHelpSiteContA'>
                <p>
                    Una vez que ya hayas <strong>Iniciado sesión</strong>, en la barra de navegación en la parte superior, vas a encontrar un menú desplegable llamado <strong>Usuario</strong>, ahí vas a encontrar la opción <strong>Tu pagina</strong>.<br /><br />

                    Los datos que te pedimos son para crear tu página web y van a estar a la vista de tus usuraios. Te recomendamos no subir información confidencial o de indole no público. Algúnos de estos son opcionales, como teléfono e email.<br /><br />

                    Para comenzar a crear tu sitio, lo primero es elegir un <strong>nombre</strong>, por ejemplo "Tu Página". Una vez que presiones <strong>"crear"</strong>, verificaremos que este nombre no esté ya en nuestra base de datos, ya que no pueden existir dos sitios con el mismo nombre. Luego, deberás seleccionar una <strong>categoría</strong> que servirá para que los usuarios puedan filtrar por el tipo de página. Hay dos elementos opcionales: <strong>Teléfono</strong> e <strong>Email</strong>. Al hacer clic en el título correspondiente, se abrirá un campo para que ingreses la información. Recuerda que estos datos son visibles para los usuarios, así que no incluyas información personal, solo datos públicos. Por último, también de manera opcional, encontrarás casillas para las <strong>redes sociales</strong>. Puedes marcar las que tenga tu proyecto y al hacer clic se abrirá un campo para que ingreses el enlace.
                </p>
                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1715125319/helps/bysupghyd1unzfz6meis.png" alt="yourSite" />
            </div>

            <div className='newHelpSiteContD'>

                <h5>Instrucciones para el Uso del Switch "Sistema de Turnos"</h5>
                <div>
                    <p>Entre la opción de categoría y teléfono, encontrarás un switch que estará inicialmente en la posición "off". Este switch se llama <strong>Sistema de turnos</strong>.</p>

                    <h6>Recomendaciones de Uso</h6>

                    <ul>
                        <li>
                            <strong>Venta de Entradas para Eventos:</strong>
                            <p>Si deseas vender entradas para tus eventos, como conciertos, obras de teatro o espectáculos de cualquier índole, te recomendamos dejar el switch en "off". Esto asegura que tu perfil se mantenga optimizado para la venta de entradas.</p>
                        </li>
                        <li>
                            <strong>Alquiler de Horarios para Negocios:</strong>
                            <p>Si tienes un negocio que involucra el alquiler de horarios, como una sala de ensayos, un estudio de danza, un estudio de grabación o una sala de teatro para ensayar, puedes beneficiarte de nuestro sistema de turnos. En este caso, te recomendamos encender el switch (ponerlo en "on").</p>
                        </li>
                    </ul>

                    <p>Una vez encendido, podrás ajustar las configuraciones del sistema de turnos en tu perfil según tus necesidades específicas.</p>

                    <p>Este sistema te ayudará a gestionar mejor los horarios de tus instalaciones, facilitando el proceso de alquiler y mejorando la experiencia de tus clientes.</p>
                </div>
                <div className='divImgShifts'>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1715897512/helps/q4zjx06swwzr6jfqk3ot.png" alt="yourSite" />
                </div>
            </div>

            <div className='newHelpSiteContB'>

                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1715727204/helps/ceuzsdvidtth3omnsy06.png" alt="yourSite" />

                <p>
                    ¡Bienvenido! Estás a punto de embarcarte en la emocionante aventura de crear tu propia página web. En esta segunda fase, te encontrarás con una serie de pasos simples pero cruciales para dar vida a tu sitio.<br /><br />

                    Al ingresar a este paso, te recibirán 12 inputs, específicamente diseñados para imágenes. Simplemente presiona el botón <strong>"Editar Foto"</strong>, selecciona la imagen desde tu dispositivo y verás cómo se actualizan automáticamente. Estas imágenes incluyen tanto el logo como el banner de tu página, elementos fundamentales para transmitir tu identidad visual.<br /><br />

                    Además, encontrarás 6 inputs de texto, cada uno con una sugerencia de número de caracteres para optimizar la visibilidad. Después de completar cada texto, asegúrate de hacer clic en el botón de <strong>"Actualizar"</strong> para guardar los cambios en el input correspondiente.<br /><br />

                    A un lado del título, verás un botón con una <strong>lámpara</strong>. Este botón te permite alternar entre el modo oscuro y el modo claro, para adaptar la apariencia de tu página según tus preferencias.<br /><br />

                    También encontrarás dos enlaces importantes: <strong>"Administrar Eventos"</strong> y <strong>"Administrar Mercado"</strong>. El primero te llevará al panel de administración de eventos, donde podrás gestionar qué eventos deseas mostrar en tu página. El segundo te dará acceso a la gestión del merchandising que desees poner a la venta en tu sitio.<br /><br />

                    Por último, tienes un input destinado a pegar uno o varios <strong>enlaces de YouTube</strong>. Aquí podrás seleccionar los videos que deseas que aparezcan en tu página. No olvides hacer clic en <strong>"Modificar"</strong> para que estos videos se guarden en la base de datos y estén listos para su visualización.<br /><br />

                    ¡Estás a punto de crear algo increíble! Sigue estos pasos y verás cómo tu página web cobra vida con tu propio estilo y personalidad.
                </p>
            </div>

            <div className='newHelpSiteContC'>
                <img className='newHelpImgA' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1715727204/helps/vo8rwi5ypqxsb9bfj8u6.png" alt="imgB" />
                <img className='newHelpImgC' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1715727203/helps/dxpdfzf035zfrh44rngj.png" alt="imgA" />
            </div>
        </div>
    );
};

export default NewHelpSite;