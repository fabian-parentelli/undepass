import './chekOut.scss';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import CheckMap from './CheckMap/CheckMap.jsx';
import ChekPhoto from "./CheckPhoto/CheckPhoto.jsx";
import MapVew from '../../../utils/MapVew/MapVew.jsx';
import SnackbarAlert from '../../../utils/SnackbarAlert.jsx';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getEventByIdApi } from '../../../../helpers/events/getEventById.api.js';
import { checkOutEventApi } from '../../../../helpers/events/checkOutEvent.api.js';

const ChekOut = ({ events, setLoading }) => {

    const [values, setValues] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [coorMap, setCoorMap] = useState(null);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });
    const navigate = useNavigate();

    const handleIsOpen = () => setIsOpen(!isOpen);

    useEffect(() => {
        const fetchData = async (id) => {
            setLoading(true);
            const response = await getEventByIdApi(id);
            setValues(response);
            setCoorMap(response.location.coordinates);
            setLoading(false);
        }; fetchData(events._id);
    }, []);

    useEffect(() => {
        if (values?.location?.coordinates) {
            setCoorMap({
                lat: values.location.coordinates.lat,
                lon: values.location.coordinates.lon
            });
        };
    }, [values?.location?.coordinates?.lat, values?.location?.coordinates?.lon]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({ ...prevState, [name]: value }));
    };

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({ ...prevState, location: { ...prevState.location, [name]: value } }));
    };

    const handleTicketInfoChange = (e, index) => {
        const { name, value } = e.target;
        const updatedTicketInfo = [...values.ticketInfo];
        updatedTicketInfo[index] = { ...updatedTicketInfo[index], [name]: value };
        setValues(prevState => ({ ...prevState, ticketInfo: updatedTicketInfo }));
    };

    const handleGuestChange = (index, value) => {
        const updatedGuests = [...values.guests];
        updatedGuests[index] = value;
        setValues(prevState => ({ ...prevState, guests: updatedGuests }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await checkOutEventApi(values, events._id);
        if (response.status === 'success') {
            setOpen(true);
            setMessage({ status: 'success', mess: 'Evento creado correctamente' });
            setTimeout(() => {
                setLoading(false);
                navigate('/');
            }, 2000);
        };
    };

    const deleteTicket = (index) => {
        const newTicketInfo = [...values.ticketInfo];
        newTicketInfo.splice(index, 1);
        setValues({ ...values, ticketInfo: newTicketInfo });
    };

    return (

        <div className='chekOut'>
            {values &&
                <form className='chekOutBody' onSubmit={handleSubmit}>

                    <div className='divImages'>
                        <ChekPhoto values={values} />
                        <div className='boxMap' id='imgMap'>
                            {coorMap && <MapVew coordinates={coorMap} />}
                        </div>
                        <p className='searchMap' onClick={handleIsOpen}>Si el mapa no aparaece pudes revisar los datos acá.</p>
                        {isOpen && <CheckMap values={values} setValues={setValues} />}
                    </div>

                    {/* ****************** */}

                    <div className='chekOutDiv'>
                        <div className='divBetNewEvent'>

                            <div className='divInEvent'>
                                <label>Tipo</label>
                                <select className='inpSel' name="type" defaultValue={values.type} onChange={handleFormChange} required>
                                    <option value="">elegir</option>
                                    <option value="public">Publico</option>
                                    <option value="private">Privado</option>
                                </select>
                            </div>

                            <div className='divInEvent'>
                                <label>Categoria</label>
                                <select className='inpSel' name="category" defaultValue={values.category} onChange={handleFormChange} required>
                                    <option value="">elegir</option>
                                    <option value="concert">Concierto</option>
                                    <option value="discotheque">Discoteca</option>
                                    <option value="theater">Teatro</option>
                                    <option value="stundup">Stand Up</option>
                                    <option value="cultural">Cultural</option>
                                    <option value="sports">Deportes</option>
                                    <option value="cinema">Cine</option>
                                </select>
                            </div>
                        </div>

                        <div className='divBetNewEvent'>
                            <div className='divInEvent'>
                                <label>Nombre del evento</label>
                                <input className='inpSel' type="text" name='name' placeholder='ej. Con amigos' onChange={handleFormChange} required value={values.name} />
                            </div>
                            <div className='divInEvent'>
                                <label>Menores de 18 años</label>
                                <select className='inpSel' name="minors" defaultValue={values.minors} onChange={handleFormChange} required>
                                    <option value="">elegir</option>
                                    <option value="true">Apto todo Público</option>
                                    <option value="false">No apto menores</option>
                                </select>
                            </div>
                        </div>

                        <div className='divBetNewEvent'>
                            <div className='divInEvent'>
                                <label>Descripción del evento</label>
                                <textarea name="description" cols="30" rows="10" value={values.description} onChange={handleFormChange} required></textarea>
                            </div>
                        </div>


                        <div className='divBetNewEvent'>
                            <div className='divInEvent'>
                                <label>Inicio del evento</label>
                                <input className='inpSel' type="text" name='startEvent' value={values.startEvent} onChange={handleFormChange} />
                            </div>
                            <div className='divInEvent'>
                                <label>Fin del evento</label>
                                <input className='inpSel' type="text" name='endEvent' value={values.endEvent} onChange={handleFormChange} />
                            </div>
                        </div>

                        <div className='divBetNewEvent'>
                            <div className='divInEvent'>
                                <label>Provincia</label>
                                <input className='inpSel' style={{ width: '170px' }} type="text" name='province' onChange={handleLocationChange} value={values.location.province} />
                            </div>
                            <div className='divInEvent'>
                                <label>Localidad</label>
                                <input className='inpSel' style={{ width: '170px' }} type="text" name='municipality' onChange={handleLocationChange} value={values.location.municipality} />
                            </div>
                            <div className='divInEvent'>
                                <label>Ciudad</label>
                                <input className='inpSel' style={{ width: '170px' }} type="text" name='city' onChange={handleLocationChange} value={values.location.city} />
                            </div>
                        </div>


                        <div className='divBetNewEvent'>
                            <div className='divInEvent'>
                                <label>Dirección</label>
                                <input
                                    className='inpSel'
                                    name='address'
                                    placeholder='ej. tucuman 1171'
                                    type="text"
                                    value={values.location.address}
                                    required
                                    onChange={handleLocationChange}
                                />
                            </div>
                            <div className='divInEvent'>
                                <label>Nobre del lugar</label>
                                <input className='inpSel' name='place' placeholder='ej. teatro Colón' type="text" onChange={handleLocationChange} value={values.location.place} required />
                            </div>
                        </div>

                        <div className='divBetNewEvent'>
                            <div className='divInEvent'>
                                <label>Entradas</label>
                                <select className='inpSel' name="tickets" defaultValue={values.tickets} onChange={handleFormChange} required>
                                    <option value="">elegir</option>
                                    <option value="true">Pagas</option>
                                    <option value="false">Gratis</option>
                                </select>
                            </div>
                        </div>

                        <div className='divBetNewEvent'>
                            {values.guests && values.guests.map((guest, index) => (
                                <div className='divInEvent' key={index}>
                                    <label>Invitado {index + 1}:</label>
                                    <input className='inpSel' style={{ width: '100px' }} type="text" name='guests' onChange={(e) => handleGuestChange(index, e.target.value)} value={guest} />
                                </div>
                            ))}
                        </div>

                        <div className='divBetNewEvent'>
                            <div className='divInEvent'>
                                <label>Video de Yotube</label>
                                <input
                                    className='inpSel'
                                    name='video'
                                    placeholder='https://www.youtube.com/watch?v=VxIdnivOrlU'
                                    type="text"
                                    value={values.video}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className='divInEvent'>
                                <label>Identificador de Usuario</label>
                                <p className='inpSel tex'>{values.userId}</p>
                            </div>
                        </div>

                        {values.tickets && values.ticketInfo &&

                            values.ticketInfo.map((tik, index) => (
                                <div key={index}>
                                    <div className='line'></div>
                                    <DeleteOutlineIcon onClick={() => deleteTicket(index)} />

                                    <div className='divBetNewEvent'>
                                        <div className='divInEvent'>
                                            <label>Tipo de entrada</label>
                                            <input className='inpSel' type="text" name='type' onChange={(e) => handleTicketInfoChange(e, index)} value={tik.type} />
                                        </div>
                                        <div className='divInEvent'>
                                            <label>Descripción</label>
                                            <input
                                                className='inpSel'
                                                name={`description`}
                                                value={tik.description}
                                                onChange={(e) => handleTicketInfoChange(e, index)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className='divBetNewEvent'>
                                        <div className='divInEvent'>
                                            <label>Precio</label>
                                            <input className='inpSel' type="text" name='price' onChange={(e) => handleTicketInfoChange(e, index)} value={tik.price} />
                                        </div>
                                        <div className='divInEvent'>
                                            <label>Cupos</label>
                                            <input className='inpSel' type="text" name='quantity' onChange={(e) => handleTicketInfoChange(e, index)} value={tik.quantity} />
                                        </div>
                                    </div>

                                    <div className='divBetNewEvent'>
                                        <div className='divInEvent'>
                                            <label>Hora de cierre de venta</label>
                                            <input className='inpSel' type="text" name='hourEnd' onChange={(e) => handleTicketInfoChange(e, index)} value={tik.hourEnd} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className='divBetNewEvent'>
                            <button className='btnEvent'>Confirmar</button>
                        </div>
                    </div>
                </form>
            }
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default ChekOut;