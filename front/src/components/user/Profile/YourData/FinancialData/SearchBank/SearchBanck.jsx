import './searchBanck.scss';
import { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const SearchBanck = ({ values, setValues, isValued }) => {

    const [isOtro, setIsOtro] = useState(false);
    const [other, setOther] = useState('');

    const handleChange = (e, newValue) => {
        if (newValue) {
            if (newValue.label === 'otro') {
                setIsOtro(true);
                setValues({ ...values, bank: other })
            } else setValues({ ...values, bank: newValue.label });
        } else {
            setIsOtro(false);
            setValues({ ...values, bank: '' });
        };
    };

    const handleOtherChange = (e) => {
        setOther(e.target.value);
        setValues({ ...values, bank: e.target.value });
    };

    return (
        <div className='SearchBanck'>
            <div className='searchHelp' style={{ width: '250px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '6px' }}>
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
                    renderInput={(params) => <TextField {...params} label="Banco" required={!isValued}
                        InputLabelProps={{
                            style: { color: '#fff', fontSize: '13px', fontFamily: 'Pangolin, cursive' }
                        }}
                    />}
                />
            </div>
            {isOtro &&
                <input
                    type="text"
                    name='bank'
                    placeholder='Cual es la entidad financiera'
                    className='inputFD'
                    value={other}
                    onChange={handleOtherChange}
                    required
                />
            }
        </div>
    );
};

export default SearchBanck;


const data = [
    { label: "Galicia" },
    { label: "Nación" },
    { label: "Provincia" },
    { label: "ICBC" },
    { label: "Citi" },
    { label: "BBVA" },
    { label: "BanCor" },
    { label: "Superville" },
    { label: "Banco Ciudad" },
    { label: "Patagonia" },
    { label: "Hipotecario" },
    { label: "Municipal de Rosario" },
    { label: "Santander" },
    { label: "BCH" },
    { label: "Santa Cruz" },
    { label: "La Pampa" },
    { label: "BanCo" },
    { label: "BPN" },
    { label: "HSBC" },
    { label: "Crediccop" },
    { label: "Itau" },
    { label: "Tierra del Fuego" },
    { label: "Macro" },
    { label: "Comafi" },
    { label: "Piano" },
    { label: "Mercado Pago" },
    { label: "Cuenta DNI" },
    { label: "Valepei" },
    { label: "Ualá" },
    { label: "Modo" },
    { label: "Bimo" },
    { label: "Naranja X" },
    { label: "otro" }
];