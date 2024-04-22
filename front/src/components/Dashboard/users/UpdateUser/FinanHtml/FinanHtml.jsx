import './finanHtml.scss';

const FinanHtml = ({ handleFinance, values, handleSetChanges, handleSubmit }) => {

    return (
        <div className='finanHtml'>
            <h4>Datos Financieros</h4>

            {values &&
                <form onSubmit={handleSubmit}>
                    <div className='finDatCont'>
                        <div className='fiDaInp'>
                            <label>Titular de la Cuenta</label>
                            <input
                                type="text"
                                name='holder'
                                className='inputFD'
                                onChange={handleSetChanges}
                                value={values.holder}
                                required
                            />
                        </div>
                        <div className='fiDaInp'>
                            <label>Cuit/Cuil</label>
                            <input
                                type="text"
                                name='cuit'
                                className='inputFD'
                                onChange={handleSetChanges}
                                value={values.cuit}
                                required
                            />
                        </div>
                    </div>

                    <div className='finDatCont'>
                        <div className='fiDaInp'>
                            <label>Entidad Financiera</label>
                            <input
                                type="text"
                                name='bank'
                                className='inputFD'
                                onChange={handleSetChanges}
                                value={values.bank}
                                required
                            />
                        </div>
                        <div className='fiDaInp'>
                            <label>Activo</label>
                            <select name="active" className='inputFD'
                                onChange={handleSetChanges}
                                value={values.active}
                                required >
                                <option value="">Tipo</option>
                                <option value="true">Activo</option>
                                <option value="false">Inactivo</option>
                            </select>
                        </div>
                    </div>

                    <div className='finDatCont'>

                        <div className='fiDaInp'>
                            <label>Tipo de cuenta</label>
                            <select name="account" className='inputFD'
                                onChange={handleSetChanges}
                                value={values.account}
                                required >
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
                                className='inputFD'
                                onChange={handleSetChanges}
                                value={values.cbu}
                                required
                            />
                        </div>
                    </div>

                    <div className='finDatCont'>
                        <div className='fiDaInp'>
                            <label>Id</label>
                            <input
                                type="text"
                                name='_id'
                                className='inputFD'
                                onChange={handleSetChanges}
                                value={values._id}
                            />
                        </div>

                        <div className='btnCont'>
                            <button className='btn btnA'>Actualizar</button>
                            <button className='btn btnB'
                                onClick={handleFinance}>Cerrar</button>
                        </div>
                    </div>

                </form>
            }
        </div>
    );
};

export default FinanHtml;