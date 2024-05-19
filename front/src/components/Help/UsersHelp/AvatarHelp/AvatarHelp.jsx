import './avatarHelp.scss';
import { Link } from 'react-router-dom';

const AvatarHelp = () => {

    return (
        <div className='avatarHelp'>
            <div className='registerHelpUp'>
                <div className='line'></div>
                <div className='registerHelpUp'>
                    <h5 id='avatarHelp'>Avatar</h5>
                    <p>Puedes elegir una foto de pefil o un Avatar</p>
                    <Link to={'/videohelp/avatarHelp'} className='registerHelpVideo'>Video tutorial</Link>
                </div>
            </div>
            <div className='avatHelpInfo'>
                <p>
                    Una vez que ya hayas <strong>Iniciado sesión</strong>, en la barra de navegación en la parte superior, vas a encontrar un menú desplegable llamado <strong>Usuario</strong>, ahí vas a encontrar la opción <strong>Tu perfil</strong>. Eso te llevará a tu <strong>Panel de administración</strong>. En la parte izquierda vas a encontrar un menú interno. Ingresa a <strong>Avatar</strong>.<br />
                    Una vez que ingreses a <strong>Tu imagen de perfil</strong>, puedes visualizar la imagen que viene por default. Sobre la parte superior del menú vas a encontrar dos botones en el cual vas a poder elegir entre utilizar un <strong>Avatar</strong> o <strong>Tu foto</strong> de perfil.
                </p>
                <div className='avHeInImg'>
                    <img className='avHeInImgzz' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712005328/helps/uznufzenetsl09painau.png" alt="helpA" />
                    <img className='avHeInImgB' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712008535/helps/zybmnfm0ihxgawvwd9am.png" alt="helpB" />
                    <img className='avHeInImgB' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712008675/helps/yttpl1apdvlyrmvk0xbm.png" alt="helpC" />
                </div>
                <p className='avHeInImgPB'>
                    Simplemente una vez que le das clcik al botón de <strong>Avatar</strong> se abrirá en la pantalla una lista de avatares selecciona elegir el que más te guste y listo.
                </p>
                <img className='avatSel' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712010754/helps/jxajywjxeg7soyfvop0j.png" alt="imgC" />

                <div className='avHeInContC'>
                    <p>
                        Cuando haces clic en <strong>Tu foto</strong>, se abrirá en la pantalla un pequeño espacio para actualizar tu imagen de perfil. Esto te permitirá mantener tu perfil fresco y personalizado. ¿Cómo funciona? Es simple: simplemente selecciona la opción para cargar una foto desde tu dispositivo haciendo clic en el icono de la nube, luego selecciona la imagen que deseas usar y presiona el botón 'Subir'. En cuestión de segundos, tu nueva foto de perfil estará lista y actualizada, ¡así de fácil!
                    </p>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712011954/helps/uegxwo8ees7xo17mycv3.png" alt="avatardev" />
                </div>

                <div className='avHeInContC'>
                    <p>
                        En nuestra página web, te ofrecemos la comodidad de acceder a un historial de avatares y fotos de perfil que has utilizado anteriormente. Esto significa que puedes revisar las imágenes que has utilizado en el pasado y, si lo deseas, seleccionar una de ellas para tu perfil actual. ¿Cómo funciona? Muy sencillo: simplemente navega por tu historial de avatares y fotos de perfil anteriores. Al encontrar una imagen que te guste, puedes previsualizarla antes de seleccionarla haciendo clic en el botón 'Elegir'. En cuestión de segundos, tu foto de perfil se actualizará con la imagen que has seleccionado previamente. ¡Es una forma rápida y conveniente de mantener tu perfil actualizado con una imagen que ya te ha gustado antes!
                    </p>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712012605/helps/xjlzmooz0xekqbpdqjqo.png" alt="avatardev" />
                </div>
            </div>
        </div>
    );
};

export default AvatarHelp;