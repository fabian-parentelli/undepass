import './baseDate.scss';
import YourBirthday from '../../../../user/Profile/YourData/YorBirthday/YourBirthday.jsx'

const BaseDate = ({ user, handleChange, setValues, handleSubmit, handleFinance, handleAvatar }) => {

    return (
        <form className='baseDate' onSubmit={handleSubmit}>

            <div className='bDContainer'>

                <div className='bdContInput'>
                    <label>Nombre</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </div>

                <div className='bdContInput'>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} />
                </div>

            </div>

            <div className='bDContainer'>
                <div className='bdContInput'>
                    <label>Identificador</label>
                    <p>{user._id}</p>
                </div>
                <div className='bdContInput'>
                    <label>Estado</label>
                    <select name="active" value={user.active} onChange={handleChange} className='setSelect'>
                        <option value="">si/no</option>
                        <option value="true">Activo</option>
                        <option value="false">Desactivo</option>
                    </select>
                </div>
            </div>

            <div className='bDContainer'>
                <div className='bdContInput'>
                    <label>Fecha cumpleaños</label>
                    <YourBirthday setValues={setValues} user={user} />
                </div>
                <div className='bdContInput'>
                    <label>Provincia</label>
                    <input type="text" name="location.province" value={user.location.province} onChange={handleChange} />
                </div>
            </div>

            <div className='bDContainer'>
                <div className='bdContInput'>
                    <label>Localidad</label>
                    <input type="text" name="location.municipality" value={user.location.municipality} onChange={handleChange} />
                </div>

                <div className='bdContInput'>
                    <label>Ciudad</label>
                    <input type="text" name="location.city" value={user.location.city} onChange={handleChange} />
                </div>
            </div>

            <div className='bdButton'>
                <button className='btn A'>Enviar</button>
                <button onClick={handleFinance} className='btn B'>Info financiera</button>
                <button onClick={handleAvatar} className='btn C'>Avatar</button>
            </div>
        </form>
    );
};

export default BaseDate;