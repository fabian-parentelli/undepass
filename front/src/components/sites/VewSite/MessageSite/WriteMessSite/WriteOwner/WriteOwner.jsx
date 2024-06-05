import './writeOwner.scss';

const WriteOwner = ({ user, handleChange }) => {

    return (
        <div className='writeOwner'>
            <img className='writeOwnerAvatar' src={user.avatar[0]} alt="img" />
            <div className='writeOwnerDIv'>
                <p>{user.name} dice:</p>
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

export default WriteOwner;