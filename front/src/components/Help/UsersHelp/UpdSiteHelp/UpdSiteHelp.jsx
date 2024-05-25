import './updSiteHelp.scss';
import { Link } from 'react-router-dom';

const UpdSiteHelp = () => {

    return (
        <div className='updSiteHelp'>
            <div className='updTicketHelpCont'>
                <div className='line'></div>
                <div className='updTicketHelpTitle'>
                    <h5 id='updSiteHelp'>Modificar Sitio</h5>
                    <p>Modificar tu sitio web.</p>
                    <Link to={'/videohelp/updTicketHelp'} className='registerHelpVideo'>Video tutorial</Link>
                </div>
            </div>

            <div className='updTicketHelpOne'>
                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712005328/helps/uznufzenetsl09painau.png" alt="avatardev" />
                <div class="container">
                    <h2>Pasos para Personalizar tu Página</h2><br /><br />
                    <p><strong>Explora Tu Espacio Personal:</strong> En el menú superior, encontrarás un desplegable llamado "Usuario". Haz clic en él y selecciona "Tu Perfil". ¡Ahí es donde comienza la magia!</p><br /><br />
                    <p><strong>Crea Tu Escenario Ideal:</strong> Dentro de tu panel de administración, navega hacia el ítem "Sitio". Aquí, encontrarás tres emocionantes opciones para dar forma a tu página:</p>
                </div>
                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1716417283/helps/kij17di8uqnayupdoq1i.png" alt="imgs" />
            </div>
            <img className='img2' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1716417283/helps/awbui0kcypfjbjisdv35.png" alt="img" />
            <div className='updTicketHelptwo'>
                <ul>
                    <li><strong>Info General:</strong> Da el primer paso hacia una página que refleje tu esencia. Actualiza el título, la categoría, tus datos de contacto y ¡mucho más! Con solo un clic en "Actualizar", tu página cobrará nueva vida.</li>
                    <li><strong>Fotos y Textos:</strong> Sumérgete en el mundo visual y textual de tu página. Desde fotos hasta textos, videos de YouTube e incluso elige entre el modo oscuro o claro. ¡Haz brillar tu creatividad y dale vida a tu página como nunca antes!</li>
                    <li><strong>Eventos y Mercado:</strong> Gestiona tus eventos y productos de merchandising con estilo y precisión. Aquí, puedes decidir qué eventos y productos quieres mostrar en tu página. ¡Haz que cada elemento cuente y cautiva a tu audiencia con una selección de primera!</li>
                </ul>
            </div>
            <div className='divImgHelp'>
                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1716417283/helps/kdfoykwi9w0y6gyttrmr.png" alt="img" />
                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1716417284/helps/vvz5ohkzhfhui7hflzv0.png" alt="img" />
            </div>

            <div className='updTicketHelptwo'>
                <p>Con estas herramientas a tu disposición, ¡tu página web será un reflejo perfecto de quién eres y lo que representas! ¡Que la creatividad y la inspiración te guíen en este emocionante viaje digital!</p>
            </div>
            
            <img className='img2' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1716417283/helps/upqkrm4klxljxyqepva4.png" alt="img" />
            <div className='updTicketHelptwo'></div>
        </div>
    );
};

export default UpdSiteHelp;






