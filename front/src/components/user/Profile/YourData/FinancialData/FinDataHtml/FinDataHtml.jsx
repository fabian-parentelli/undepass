import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Load from '../../../../../utils/Load.jsx';
import SearchBanck from '../SearchBank/SearchBanck.jsx';
import SnackbarAlert from '../../../../../utils/SnackbarAlert.jsx';
import { newUserFinanApi } from '../../../../../../helpers/userFinan/newUserFinan.api.js';
import { updUserFinanApi } from '../../../../../../helpers/userFinan/updUserFinan.api.js';

const FinDataHtml = ({ values, setValues, setIsVew, loading, setLoading, isValued }) => {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const navigate = useNavigate();

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const habdleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!isValued) {
            const response = await newUserFinanApi(values);
            if (response.status === 'success') {
                setOpen(true);
                setMessage({ status: 'success', mess: 'Datos financieros creados correctamente' });
                setTimeout(() => {
                    setLoading(false);
                    setIsVew(false);
                }, 2000);
            } else {
                setLoading(false);
                setOpen(true);
                setMessage({ status: 'error', mess: response.error });
            };
        } else {
            const result = await updUserFinanApi(values);
            if (result.status === 'success') {
                setOpen(true);
                setMessage({ status: 'success', mess: 'Datos financieros actualizados correctamente' });
                setTimeout(() => {
                    setLoading(false);
                    setIsVew(false);
                }, 2000);
            } else {
                setLoading(false);
                setOpen(true);
                setMessage({ status: 'error', mess: response.error });
            };
        };

        const location = localStorage.getItem('location');
        if (location) {

            localStorage.removeItem('location');
            navigate(`/${location}`);
        };
    };

    return (
        <div className='financialData'>
            <p>La información proporcionada será tratada de manera confidencial.<br /> En el evento se mencionará únicamente el nombre de tu evento.<br /> Estos detalles serán empleados para la elaboración de las facturas relacionadas con los resultados de tu evento.</p>

            <form onSubmit={habdleSubmit}>
                <div className='finDatCont'>
                    <div className='fiDaInp'>
                        <label>Titular de la Cuenta</label>
                        <input
                            type="text"
                            name='holder'
                            placeholder='Ej. Rachel Green'
                            className='inputFD'
                            onChange={handleChange}
                            value={values.holder}
                            required
                        />
                    </div>
                    <div className='fiDaInp'>
                        <label>Cuit/Cuil</label>
                        <input
                            type="text"
                            name='cuit'
                            placeholder='Ej. 20123456789'
                            className='inputFD'
                            onChange={handleChange}
                            value={values.cuit}
                            required
                        />
                    </div>
                </div>

                <div className='finDatCont'>
                    <div className='fiDaInp'>
                        <label>Entidad Financiera</label>
                        <SearchBanck values={values} setValues={setValues} isValued={isValued} />
                    </div>
                </div>

                <div className='finDatCont'>
                    <div className='fiDaInp'>
                        <label>Tipo de cuenta</label>
                        <select name="account" className='inputFD' onChange={handleChange} required value={values.account} >
                            <option value="">Tipo</option>
                            <option value="wallet">Billetera Digital</option>
                            <option value="savingsBox">Caja de ahorro</option>
                            <option value="currentAccount">Cuenta Corriente</option>
                        </select>
                    </div>
                    <div className='fiDaInp'>
                        <label>CBU/CVU - Alias</label>
                        <input
                            type="text"
                            name='cbu'
                            placeholder='Ej. 20123456789'
                            className='inputFD'
                            onChange={handleChange}
                            value={values.cbu}
                            required
                        />
                    </div>
                </div>
                <button className='btn'>
                    {isValued ? 'Actualizar' : 'Enviar'}
                </button>
            </form>
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default FinDataHtml;