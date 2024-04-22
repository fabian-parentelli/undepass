import './registerHelp.scss';

const RegisterHelp = () => {

    return (
        <div className='registerHelp'>
            <div className='registerHelpUp'>
                <h5 id='registerHelp'>Registro</h5>
                <p>A continuación te mostraremos como puedes registrarte.</p>
                <a className='registerHelpVideo' href="">Video tutorial</a>
            </div>
            <div className='registerHelpCont'>
                <p>En la barra de navegación en la parte superior, vas a encontrar un menú desplegable llamado <strong>Usuario</strong>, ahí vas a encontrar la opción <strong>Registrarte</strong>. Esto te dirigirá a la página de registros.
                    <br />
                    En esta página vas a encontrar  un formulario en el cual vas a tener que completar. El primer campo es <strong>Nombre</strong>, como lo indica debes completar tu nombre completo, ejemplo “Rachel Green”.
                    <br />
                    El segundo campo es <strong>Cumpleaños</strong>, en el cual vas a ingresar tu fecha de nacimiento, son tres campos, día, mes y año. Ejemplo 8 febrero 1971.
                    <br />
                    El tercer campo es el <strong>email</strong>, ten en cuenta de verificar que esté bien escrito. Te pasamos el ejemplo reachelgreen@email.com
                    <br />
                    <strong>Contraseña</strong>, es el campo donde ingresas una contraseña única y de uso privado. Evita publicarlo o difundirlo. Te damos un ejemplo reachel_green1971.
                    <br />
                    <strong>Localidad</strong>, la idea de este campo es que ingreses la ubicación de dónde vives. Este dato sirve para agrupar los eventos más cercanos a tu zona de residencia. El campo inicial es <strong>Provincia</strong> en donde vas a ingresar la provincia en donde vives, ejemplo Buenos Aires. Esto dará paso a crear un campo nuevo que te dará los municipios de esa provincia. En el campo <strong>Municipalidad</strong> el ejemplo es Morón. Esto dará paso a un último campo a completar estas son las <strong>localidades</strong> que se encentran dentro de esa municipalidad, ejemplo Castelar.
                    <br />
                    Todos los campos son obligatorios no podrás enviar el formulario hasta que estén todos los campos con los datos ingresados.
                </p>
                <div className='registerHelpImg'>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711748757/helps/urdll2po9vh5xizjorua.png" alt="nav-register" />
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711748757/helps/pzoi9bvevseu3p0lxuxy.png" alt="register" />
                </div>
            </div>
        </div>
    );
};

export default RegisterHelp;