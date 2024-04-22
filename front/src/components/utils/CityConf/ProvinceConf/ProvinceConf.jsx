import './provinceConf.scss';
import { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { getProvincesApi } from '../../../../helpers/cities/getProvinces.api.js';

const ProvinceConf = ({ setSelectedProv, init }) => {

    const [province, setProvince] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getProvincesApi();
            if (response.status === 'success') {
                const provi = response.result.map((prov) => ({ label: prov.name, id: prov.id }));
                setProvince(provi)
            } else setProvince([{ label: 'no se puede cargar la provinvia' }]);
        }; fetchData();
    }, []);

    const handleChange = (e, value) => {
        const id = value ? value.id : null;
        setSelectedProv(id);
    };

    return (
        <div className='provinceConf'>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={province}
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
                renderInput={(params) => <TextField {...params} label="Provincia"
                    InputLabelProps={{
                        style: { color: 'gray', fontSize: '13px', fontFamily: 'Pangolin, cursive' }
                    }}
                />}
                onChange={handleChange}
            />
        </div>
    );
};

export default ProvinceConf;