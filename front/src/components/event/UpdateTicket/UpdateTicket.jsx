import './updateTickets.scss';
import { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getEventByIdApi } from '../../../helpers/events/getEventById.api.js';

const UpdateTickets = ({ events, setLoading }) => {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchData = async (id) => {
            setLoading(true);
            const response = await getEventByIdApi(id);
            if (response && response.ticketInfo) {
                setTickets(response);
            }
            setLoading(false);
        }; fetchData(events._id);
    }, []);

    const handleTicketInfoChange = (e, index) => {
        const { name, value } = e.target;
        const updatedTicketInfo = [...tickets.ticketInfo];
        updatedTicketInfo[index] = { ...updatedTicketInfo[index], [name]: value };
        setTickets(prevState => ({ ...prevState, ticketInfo: updatedTicketInfo }));
    };

    const deleteTicket = (index) => {
        const newTicketInfo = [...tickets.ticketInfo];
        newTicketInfo.splice(index, 1);
        setTickets({ ...tickets, ticketInfo: newTicketInfo });
    };

    const addRow = () => {
        setTickets((prevState) => ({
            ...prevState,
            ticketInfo: [...prevState.ticketInfo, { type: '', description: '', price: '', quantity: '' }],
        }));
    };

    return (
        <div className='updateTickets'>

            <div className='tableForm'>

                {tickets &&
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de entrada</th>
                                <th>Descripción</th>
                                <th>Valor</th>
                                <th>Cantidad</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {tickets && tickets.ticketInfo && tickets.ticketInfo.map((tick, index) => (
                                <tr key={tick._id} className='tickets'>

                                    <th> 
                                        <input 
                                            type="text" 
                                            value={tick.type} 
                                            className='ticketText' 
                                            name='type'
                                            onChange={(e) => handleTicketInfoChange(e, index)}
                                        /> 
                                    </th>

                                    <th>
                                        <input 
                                            type="text" 
                                            value={tick.description} 
                                            className='ticketText'
                                            name='description'
                                            onChange={(e) => handleTicketInfoChange(e, index)}
                                        />
                                    </th>

                                    <th>
                                        <input 
                                            type="text" 
                                            value={tick.price}
                                            name='price'
                                            className='ticketNumber'
                                            onChange={(e) => handleTicketInfoChange(e, index)}
                                        />
                                    </th>

                                    <th>
                                        <input 
                                            type='text' 
                                            value={tick.quantity}
                                            name='quantity'
                                            className='ticketNumber' 
                                            onChange={(e) => handleTicketInfoChange(e, index)}
                                        />  
                                    </th>

                                    <th className='ticketIcon'  onClick={() => deleteTicket(index)}><DeleteOutlineIcon/></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
                <button onClick={addRow}>Agregar fila</button>
                {/* 
                    Seguir aca -- 
                    - darlE estilo al boton en verde
                    - modificar la base de datos... 
                    - tener en cuenta que pasa si no hay entradas
                    - habría que crear una entrada con valor 0 en todo caso.... (esto sería al crear la entrada),
                      creo que lo soluciono en la base de datos con un default y listo ....
                    - agregar el campo de hora a cada entrada 
                    - Active e inactive entrada (supongo que dejarlo en quantity 0 esto ya estaría)
                */}
            </div>
        </div>
    );
};

export default UpdateTickets;