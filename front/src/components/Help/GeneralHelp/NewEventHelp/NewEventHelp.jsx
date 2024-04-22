import './newEventHelp.scss';

const NewEventHelp = () => {

    return (
        <div className='newEventHelps'>
            <div className='line'></div>
            <div className='registerHelpUp'>
                <h5 id='newEventHelp'>Crear un Evento</h5>
                <p>Los eventos pueden ser públicos o privados.</p>
                <a className='registerHelpVideo' href="">Video tutorial</a>
            </div>

            <div className='newEventHelpsCont'>

                <div className='newEventHelpsText'>
                    <p>Al momento de hacer clic en <strong>Crear evento</strong>, serás redirigido a la sección correspondiente. Si no has iniciado sesión, será necesario hacerlo. En caso de no estar registrado, se te llevará a la página de <strong>inicio de sesión</strong> para que puedas acceder. Una vez que hayas completado el proceso de inicio de sesión, volverás automáticamente al formulario de creación de eventos.</p>
                    <p>Una vez que hayas iniciado sesión, el sistema verificará si tus <strong>datos financieros</strong> están actualizados, ya que son necesarios para que UnderPass realice el pago al usuario creador del evento. Es importante destacar que estos datos son privados y en ningún caso serán compartidos públicamente. Si tus <strong>datos financieros</strong> no están completos, serás dirigido a actualizarlos. Una vez que lo hayas hecho, volverás al formulario de creación de eventos.</p><br />
                    <p>El proceso de creación de eventos consta de cuatro pasos:</p>
                    <p className='pOrange'>Datos del evento:</p>
                    <ul>
                        <li><strong>Tipo:</strong> Puede ser público, para que cualquier persona pueda adquirir entradas, o privado, restringido a un grupo de usuarios con una contraseña.</li>
                        <li><strong>Categoría:</strong> Elige una categoría para mejorar los filtros de búsqueda, como conciertos, teatro, deportes, etc.</li>
                        <li><strong>Nombre del evento:</strong> Describe el nombre del evento, ya sea el nombre de la obra de teatro, la banda principal, o el equipo que participa.</li>
                        <li><strong>Menores de 18 años:</strong> Indica si el evento es apto para menores de edad o es para todo público.</li>
                        <li><strong>Descripción:</strong> Proporciona información detallada sobre el evento, su contenido y cualquier otro detalle relevante.</li>
                        <li><strong>Inicio del evento:</strong> Indica la fecha y hora de inicio del evento para que los usuarios puedan visualizarlo.</li>
                        <li><strong>Fin del evento:</strong> Esta fecha es crucial para dar de baja el evento. Se utilizará para calcular el pago al usuario creador del evento, que se realizará dentro de 5 días hábiles.</li>
                        <li><strong>Localidad:</strong> Proporciona la ubicación del evento, incluyendo provincia, partido, ciudad, y en el caso de Buenos Aires, comuna y barrio.</li>
                        <li><strong>Dirección:</strong> Incluye el nombre de la calle y el número de puerta.</li>
                        <li><strong>Nombre del lugar:</strong> Indica el nombre del teatro, estadio, bar, etc.</li>
                        <li><strong>Invitados:</strong> Si hay más de un invitado, sepáralos con comas, sin espacios.</li>
                        <li><strong>Video de YouTube:</strong> Si deseas incluir un video promocional, simplemente copia el enlace de YouTube.</li>
                        <li><strong>Entradas pagas:</strong> Indica si las entradas al evento son pagas. Si son gratuitas, los usuarios podrán acceder a la información y obtener una entrada simbólica. Esto no afectará la disposición de los lugares en el evento.</li>
                    </ul>
                </div>

                <div className='registerHelpImg'>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1713635698/helps/nixfvodjwc4bm8zby9o3.png" alt="nav-register" />
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1713635698/helps/o5xggrzdgh4ox9t1ms1e.png" alt="register" />
                </div>
            </div>

            <div className='newEventHelpsCont2'>
                <div className='newEventHelpsCont2B'>
                    <div className='newEventHelpsText2'>
                        <p className='pOrange'>Subir Flyer</p>
                        <p>En esta etapa, puedes <strong>subir un flyer</strong> desde tu PC o dispositivo móvil. La imagen del flyer no debe exceder las dimensiones de 400px de ancho por 400px de alto, y su tamaño no debe superar 1MB.</p>
                        <p>Una vez que hayas cargado el flyer, podrás continuar con el siguiente paso del proceso.</p>
                        <p>Si no tienes un flyer disponible, te proporcionamos algunos <strong>presets</strong> para que elijas. Estos presets contienen la información brindada y puedes seleccionar el que más te guste para continuar. Más adelante, si deseas modificar o cambiar el preset por un flyer propio, puedes hacerlo sin problema.</p>
                    </div>
                    <img className='imgVert' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1713638096/helps/ldziyz59h1lhedlluigf.png" alt="nav-register" />
                </div>
                <img className='imgHor' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1713638096/helps/dubycjuulrj0sqolrqiy.png" alt="" />
            </div>

            <div className='newEventHelpsCont'>
                <div className='newEventHelpsText'>
                    <p className='pOrange'>Información del Ticket:</p>
                    <p>Esta sección solo aparecerá si en la información del evento se especificaron entradas pagas. Si el evento es gratuito, esta parte del proceso se omitirá.</p>
                    <p>En esta etapa, puedes crear diferentes tipos de entradas y agregarlos al evento. Cada entrada requiere la siguiente información:</p>
                    <ul>
                        <li><strong>Tipo de Entrada:</strong> Campo, Platea, etc.</li>
                        <li><strong>Descripción:</strong> Especificaciones sobre la entrada, como la ubicación en el lugar del evento (por ejemplo, desde la fila A hasta la fila F).</li>
                        <li><strong>Precio:</strong> Costo de la entrada.</li>
                        <li><strong>Cantidad Disponible:</strong> Número de entradas disponibles para la venta.</li>
                        <li><strong>Fecha y Hora de Venta:</strong> Hasta qué día y hora estarán disponibles las entradas para la venta.</li>
                    </ul>
                    <p>Puedes agregar la cantidad deseada de tipos distintos de entradas. Una vez que hayas completado esta etapa, podrás pasar al siguiente punto del proceso.</p>
                </div>
                <div className='registerHelpImg'>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1713639832/helps/h6yyhsozj5mpk4jvdkbc.png" alt="nav-register" />
                </div>
            </div>

            <div className='newEventHelpsCont'>
                <div className='newEventHelpsText'>
                    <p>En esta etapa final, revisaremos los detalles de tu evento y confirmaremos la información proporcionada. Aquí está lo que verás:</p>

                    <ul>
                        <li><strong>Flyer o Imagen del Evento:</strong> Verás la imagen que has subido o seleccionado como preset para tu evento.</li>
                        <li><strong>Información del Evento:</strong> Revisarás todos los detalles proporcionados anteriormente. Si hay algo que no coincida o desees cambiar, podrás hacerlo en esta etapa.</li>
                        <li><strong>Ubicación en el Mapa:</strong> Si el mapa no coincide exactamente con la dirección seleccionada, podrás buscar la dirección y ajustar el punto en el mapa.</li>
                    </ul>

                    <p>Una vez que confirmes el evento, quedará grabado en nuestro sistema y estará disponible para que los usuarios lo vean en el menú principal. Recuerda que siempre podrás modificar la información del evento desde tu perfil si es necesario. Por favor, recuerda no subir contenido ofensivo o inapropiado.</p>

                    <p>Te deseamos un excelente evento y esperamos que tengas una experiencia maravillosa. ¡No dudes en compartir fotos y videos con nosotros para que podamos promocionar tu evento en nuestras redes sociales!</p>
                </div>
                <div className='registerHelpImg'>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1713641616/helps/ztpjwovzjysdfqttar4c.png" alt="nav-register" />
                </div>
            </div>
        </div>
    );
};

export default NewEventHelp;