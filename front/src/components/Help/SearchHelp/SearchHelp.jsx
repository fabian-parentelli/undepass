import './searchHelp.scss';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';

const SearchHelp = () => {

    const navigate = useNavigate();
    const handleChange = (e, newValue) => { if (newValue) navigate(`/help#${newValue.data}`) };

    return (
        <div className='searchHelp' style={{ border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '6px' }}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={data}
                onChange={handleChange}
                clearOnBlur={true}
                sx={{
                    width: '100%',
                    '& .MuiInputBase-input': {
                        fontSize: '12px',
                        height: '100%',
                        borderRadius: '30px',
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        paddingLeft: '5px',
                        fontFamily: 'Pangolin, cursive',
                    },
                }}
                renderInput={(params) => <TextField {...params} label="Busqueda"
                    InputLabelProps={{
                        style: { color: '#fff', fontSize: '13px', fontFamily: 'Pangolin, cursive' }
                    }}
                />}
            />
        </div>
    );
};

export default SearchHelp;

const data = [
    { label: 'Registrarte', data: 'registerHelp' }, 
    { label: 'Iniciar sesión', data: 'loginHelp' },
    { label: 'Recuperar contraseña', data: 'recoverPassHelp' },
    { label: 'Modificar datos personales', data: 'updDataHelp' },
    { label: 'Foto de perfil o avatar', data: 'avatarHelp' },
    { label: 'Datos financieros', data: 'finaceDate' },
    { label: 'Crear eventos', data: 'newEventHelp' },
    { label: 'Configurar eventos', data: 'eventProfilHelp' }
];