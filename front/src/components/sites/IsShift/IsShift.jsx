import { useState } from 'react';
import Switch from '@mui/material/Switch';

const IsShift = ({ setValues }) => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [isShift, setIsShift] = useState(false);

    const handleChange = (e) => {
        setValues(prevState => ({ ...prevState, shift: { active: e.target.checked } }));
        setIsShift(e.target.checked);
    };

    return (
        <div className='isShift'>
            Sistema de turnos
            <Switch
                {...label}
                checked={isShift}
                onChange={handleChange}
            />
        </div>
    );
};

export default IsShift;