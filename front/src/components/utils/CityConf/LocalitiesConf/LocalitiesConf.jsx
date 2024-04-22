import './localitiesConf.scss';
import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { getPartiesApi } from '../../../../helpers/cities/getParties.api.js';

const LocalitiesConf = ({ selectedTown, selectedProv, setSelectedCity }) => {

    const [localities, setLocalities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPartiesApi(selectedTown, selectedProv);
            const city = response.map((cit) => ({ label: cit.nombre, id: cit.id }));
            setLocalities(city);
        }; fetchData();
    }, []);

    const handleChange = (e, value) => {
        const name = value ? value.label : null;
        if (name) setSelectedCity(name);
    };

    return (
        <div className='localitiesConf'>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={localities}
                sx={{
                    width: '100%',
                    '& .MuiInputBase-input': {
                        fontSize: '12px',
                        height: '1px',
                        borderRadius: '12px',
                        border: 'none',
                        paddingLeft: '5px',
                        backgroundColor: '$colorD',
                        color: '#fff',
                        fontFamily: 'Pangolin, cursive'
                    },
                }}
                renderInput={(params) => <TextField {...params} label="Localidad"
                    InputLabelProps={{
                        style: { color: 'gray', fontSize: '13px', fontFamily: 'Pangolin, cursive' }
                    }}
                />}
                onChange={handleChange}
            />
        </div>
    );
};

export default LocalitiesConf;