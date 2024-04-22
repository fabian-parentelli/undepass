import './tiketInput.scss';
import { useRef, useState } from 'react';
import DateHourConf from '../../../../utils/DateHourConf/DateHourConf';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TiketInput = ({ tickets, setTikets }) => {

    const [values, setValues] = useState({ type: '', description: '', price: '', quantity: '', hourEnd: '' });

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTikets([...tickets, values]);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className='tiketInput' onSubmit={handleSubmit}>

            <div className='divTikets'>
                <label>Tipo de entrada</label>
                <input className='inpuTik' type="text" name='type' placeholder='General, vip, platea' onChange={handleChange} required />
            </div>

            <div className='divTikets'>
                <label>Descripción</label>
                <input className='inpuTik' type="text" name='description' placeholder='Ej. desde la fila 6 a la 18' onChange={handleChange} required />
            </div>

            <div className='tick-data'>
                <div className='divTikets'>
                    <label>Precio</label>
                    <input className='inpuTik' type="text" name='price' placeholder='Pesos Argentinos' onChange={handleChange} required />
                </div>
                <div className='divTikets'>
                    <label>Cantidad Disponible</label>
                    <input className='inpuTik' type="text" name='quantity' placeholder='ej. 300' onChange={handleChange} required />
                </div>
            </div>

            <div className='divTikets'>
                <label htmlFor="">Entadas a la venta hasta</label>
                <DateHourConf name={'hourEnd'} setValues={setValues} />
            </div>

            <button className='btnAdd' disabled={!values.hourEnd}><AddCircleOutlineIcon /> Agrgar entrada</button>
        </form>
    );
};

export default TiketInput;