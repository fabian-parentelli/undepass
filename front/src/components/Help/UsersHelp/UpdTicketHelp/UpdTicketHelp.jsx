import './updTicketHelp.scss';

const UpdTicketHelp = () => {

    return (
        <div className='updTicketHelp' id='updTicketHelp'>
            <div className='updTicketHelpCont'>
                <div className='line'></div>
                <div className='updTicketHelpTitle'>
                    <h5 id='avatarHelp'>Modificar entradas</h5>
                    <p>Modificar, crear o eliminar entradas.</p>
                    <a className='updTicketHelpVideo' href="">Video tutorial</a>
                </div>
            </div>

            <div className='updTicketHelpOne'>
                <div>
                    <p>Para modificar, eliminar o agregar entradas a tus eventos, sigue estos pasos:</p>
                    <br />
                    <p>Ir al panel de administración del perfil:</p>
                    <p>1. Abre tu navegador web y ve a la solapa <strong>"Usuarios"</strong> en la parte superior.</p>
                    <p>2. Busca y haz clic en <strong>"Tu Perfil"</strong> para acceder al panel de administración de tu perfil.</p>
                    <br />
                    <p>Acceder a la configuración de eventos:</p>
                    <p>Una vez en el panel de administración de tu perfil, sigue estos tres pasos:</p>
                    <ol>
                        <li>En el navegador situado en la parte izquierda de tu pantalla, busca la opción <strong>"Eventos"</strong>.</li>
                        <li>Haz clic en el botón que dice <strong>"Ver"</strong>. Esto abrirá una ventana con todos tus eventos activos, donde encontrarás datos iniciales y opciones para gestionarlos.</li>
                        <li>Dentro de los detalles de tu evento, busca y haz clic en <strong>"Entradas"</strong>. Esto te llevará a la sección donde puedes ver y gestionar las entradas disponibles para tu evento.</li>
                    </ol>
                </div>
                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712005328/helps/uznufzenetsl09painau.png" alt="avatardev" />
            </div>

            <div className='updTicketHelpTwo'>
                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1714512297/helps/x544rn8983p0a55l9umo.png" alt="avatardev" />
            </div>

            <div className='updTicketHelpThree'>

                <p>Una vez que hagas clic en <strong>"Entradas"</strong>, se mostrarán todas las entradas disponibles que hayan sido creadas previamente. Aquí encontrarás cuatro opciones importantes:</p>

                <ol>
                    <li>
                        <strong>Modificar campos existentes:</strong><br />
                        Puedes editar cualquier campo que desees, como el tipo de entrada, descripción, valor, cantidad o el cierre de venta. Es importante mencionar que en el campo de cierre de venta, se debe ingresar la fecha con el formato DD-MM-AAAA seguido de la hora en formato de 24 horas (por ejemplo, 22:00) <strong>Ejemplo "28-01-2024 22:00"</strong>.
                    </li>
                    <li>
                        <strong>Eliminar entradas:</strong><br />
                        Si deseas eliminar una entrada, puedes hacerlo y esta desaparecerá. Sin embargo, ten en cuenta que las entradas vendidas hasta el momento seguirán activas. Es recomendable comunicarte con los clientes que poseen estas entradas para reubicarlos o devolverles las entradas personalmente. Nosotros solo devolvemos las entradas en caso de que el evento se suspenda.
                    </li>
                    <li>
                        <strong>Agregar más entradas:</strong><br />
                        Utiliza el botón de <strong>"+"</strong> para agregar más entradas, por ejemplo, si necesitas añadir un remanente de entradas de último momento.
                    </li>
                    <li>
                        <strong>Indicar entradas agotadas:</strong><br />
                        Si alguna de las entradas tiene una cantidad de 0, aparecerán como agotadas y los clientes no podrán comprarlas. Una vez que hayas realizado los cambios deseados, simplemente haz clic en el botón de "Actualizar" para guardarlos.
                    </li>
                </ol>

                <p>¡Y listo! Con estas opciones, podrás gestionar fácilmente las entradas de tus eventos de manera efectiva.</p>
            </div>

            <div className='updTicketHelpTwo'>
                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1714512712/helps/d1ntvzv1qteme9xgnxup.png" alt="avatardev" />
            </div>

        </div>
    );
};

export default UpdTicketHelp;