import './register.scss';
import { Link } from 'react-router-dom';
import DateConf from '../../utils/DateConf/DateConf';
import CityConf from '../../utils/CityConf/CityConf';

const RegisterHtml = ({ handleSubmit, handleInputChange, setValues }) => {

    return (
        <div className='register'>

            <div className='registerLeft'>
                <div className='registerLeftUp'>
                    <h1>Registrate</h1>
                    <h2>Nueva Cuenta</h2>
                    <p>¿estás registrado? <Link className='pLink' to={'/login'}>Login</Link></p>
                </div>
                <div className='registerLeftLine'></div>
                <p className='registerLeftP'>¡Únete a UnderPass y experimenta la emoción de ser parte de nuestra comunidad exclusiva de amantes de la arte y eventos en vivo! Al registrarte, desbloquearás una serie de beneficios increíbles</p>
            </div>

            <form className='registerRight' onSubmit={handleSubmit}>
                <div className='registerRightCont'>

                    <h2>Registro</h2>

                    <div className='registerRightDiv'>
                        <label>Nombre</label>
                        <input
                            type="text"
                            name='name'
                            placeholder='Campo requerido'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='registerRightDiv hourDiv'>
                        <div className='rrd'>
                            <label>Cumpleaños</label>
                            <DateConf setValues={setValues} />
                        </div>
                    </div>

                    <div className='registerRightDiv'>
                        <label>Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder='Campo requerido'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='registerRightDiv'>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Campo requerido'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <CityConf setValues={setValues} />
                    <input className='btn' type="submit"/>
                </div>
            </form>
        </div>
    );
};

export default RegisterHtml;