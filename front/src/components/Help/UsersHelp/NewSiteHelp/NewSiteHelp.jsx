import './newHelpSite.scss';

const NewHelpSite = () => {

    return (
        <div className='newHelpSite'>
            <div className='updTicketHelpCont'>
                <div className='line'></div>
                <div className='updTicketHelpTitle'>
                    <h5 id='newSiteHelp'>Crear tu sitio</h5>
                    <p>Crear y modificar tu sitio</p>
                    <a className='updTicketHelpVideo' href="">Video tutorial</a>
                </div>
            </div>

            <div className='newHelpSiteContA'>

                <p>
                    Una vez que ya hayas <strong>Iniciado sesión</strong>, en la barra de navegación en la parte superior, vas a encontrar un menú desplegable llamado <strong>Usuario</strong>, ahí vas a encontrar la opción <strong>Tu pagina</strong>.<br/><br/>

                    Los datos que te pedimos son para crear tu página web y van a estar a la vista de tus usuraios. Te recomendamos no subir información confidencial o de indole no público. Algúnos de estos son opcionales, como teléfono, email y ubicación.<br/><br/>

                    Para comenzar a crear tu sitio, lo primero es elegir un <strong>nombre</strong>, por ejemplo "Tu Página". Una vez que presiones <strong>"crear"</strong>, verificaremos que este nombre no esté ya en nuestra base de datos, ya que no pueden existir dos sitios con el mismo nombre. Luego, deberás seleccionar una <strong>categoría</strong> que servirá para que los usuarios puedan filtrar por el tipo de página. Hay tres elementos opcionales: <strong>Teléfono</strong>, <strong>Email</strong> y <strong>Ubicación</strong>. Al hacer clic en el título correspondiente, se abrirá un campo para que ingreses la información. Recuerda que estos datos son visibles para los usuarios, así que no incluyas información personal, solo datos públicos. Por último, también de manera opcional, encontrarás casillas para las <strong>redes sociales</strong>. Puedes marcar las que tenga tu proyecto y al hacer clic se abrirá un campo para que ingreses el enlace.
                </p>

                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1715125319/helps/bysupghyd1unzfz6meis.png" alt="yourSite" />
            </div>

            
        </div>
    );
};

export default NewHelpSite;