import './writeGuest.scss';

const WriteGuest = ({ handleChange }) => {

    return (
        <div className='WriteGuest'>
            <img className='writeOwnerAvatar' src="/public/newLog.png" alt="img" />
            <div className='writeOwnerDIv'>
                <p>Usuario dice:</p>
                <input
                    type="text"
                    placeholder='Ingresar comentario'
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    );
};

export default WriteGuest;