import './twonConf.scss';
import { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { getTownsApi } from '../../../../helpers/cities/getTwons.api.js';

const TwonConf = ({ selectedProv, setSelectedTown }) => {

    const [towns, setTowns] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getTownsApi(selectedProv);
            if (response.status === 'success') {
                const twon = response.result.municipios.map((tow) => ({ label: tow.nombre, id: tow.id }));
                setTowns(twon);
            } else setProvince([{ label: 'no se puede cargar la provinvia' }]);
        }; fetchData();
    }, []);

    const handleChange = (e, value) => {
        const id = value ? value.id : null;
        setSelectedTown(id);
    };

    return (
        <div className='twonConf'>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={towns}
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
                renderInput={(params) => <TextField {...params} label="Municipalidad"
                    InputLabelProps={{
                        style: { color: 'gray', fontSize: '13px', fontFamily: 'Pangolin, cursive' }
                    }}
                />}
                onChange={handleChange}
            />
        </div>
    );
};

export default TwonConf;