import './loginHtml.scss';
import { Link } from 'react-router-dom';

const LoginHtml = ({ handleSubmit, handleInputChange, values }) => {

    return (
        <div className='loginHtml'>
            <img className='imgLogin' src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1711754710/background/pufre6fuzbrlj8q5yqtm.png" alt="login" />

            <form className='formLogin' onSubmit={handleSubmit}>
                <h2>Iniciar sesión en <span>UnderPass</span></h2>

                <div className='loginInputs'>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Este campo debe ser completado"
                        value={values.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className='loginInputs'>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Este campo debe ser completado"
                        value={values.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button className='btn'>Iniciar sesión</button>

                <div className='butDivLogin'>
                    <Link className='btn-A' to={'/register'}>Registrate</Link>
                    <Link className='btn-A' to={'/what_email'}>Recuperar contraseña</Link>
                </div>

            </form>
        </div>
    );
};

export default LoginHtml;