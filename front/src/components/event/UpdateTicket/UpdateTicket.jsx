import './updateTickets.scss';
import { useEffect, useState } from 'react';
import QueueIcon from '@mui/icons-material/Queue';
import SnackbarAlert from '../../utils/SnackbarAlert.jsx';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { getEventByIdApi } from '../../../helpers/events/getEventById.api.js';
import { checkOutEventApi } from '../../../helpers/events/checkOutEvent.api.js';

const UpdateTickets = ({ events, setLoading }) => {

    const [tickets, setTickets] = useState({ ticketInfo: [] });
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState({ status: '', mess: '' });

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
            ticketInfo: [...prevState.ticketInfo, { type: '', description: '', price: '', quantity: '', hourEnd: '' }],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await checkOutEventApi(tickets, tickets._id);
        if (response.status === 'success') {
            setOpen(true);
            setMessage({ status: 'success', mess: 'Entradas modificadas correctamente' })
        };
        setLoading(false);
        setTimeout(() => { setOpen(false) }, 2000);
    };

    return (
        <div className='updateTickets'>

            {tickets && <h2>{tickets.name}</h2>}<br />

            <div className='tableForm'>
                {tickets &&
                    <form onSubmit={handleSubmit}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo de entrada</th>
                                    <th>Descripción</th>
                                    <th>Valor</th>
                                    <th>Cantidad</th>
                                    <th>Cierre de Venta</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {tickets && tickets.ticketInfo && tickets.ticketInfo.map((tick, index) => (
                                    <tr key={index} className='tickets'>

                                        <th>
                                            <label>Tipo</label>
                                            <input
                                                type="text"
                                                value={tick.type}
                                                className='ticketText'
                                                name='type'
                                                onChange={(e) => handleTicketInfoChange(e, index)}
                                                placeholder='ej. pre-venta'
                                            />
                                        </th>

                                        <th>
                                            <label>Descripción</label>
                                            <input
                                                type="text"
                                                value={tick.description}
                                                className='ticketText'
                                                name='description'
                                                onChange={(e) => handleTicketInfoChange(e, index)}
                                                placeholder='ej. hasta agotar stock'
                                            />
                                        </th>

                                        <th>
                                            <label>Precio</label>
                                            <input
                                                type="text"
                                                value={tick.price}
                                                name='price'
                                                className='ticketNumber'
                                                onChange={(e) => handleTicketInfoChange(e, index)}
                                                placeholder='ej. 2000'
                                            />
                                        </th>

                                        <th>
                                            <label>Cantidad</label>
                                            <input
                                                type='text'
                                                value={tick.quantity}
                                                name='quantity'
                                                className='ticketNumber'
                                                onChange={(e) => handleTicketInfoChange(e, index)}
                                                placeholder='ej. 150'
                                            />
                                        </th>

                                        <th>
                                            <label>Cierre de venta</label>
                                            <input
                                                type='text'
                                                value={tick.hourEnd}
                                                name='hourEnd'
                                                className='ticketText'
                                                onChange={(e) => handleTicketInfoChange(e, index)}
                                                placeholder='ej. 01-01-2024 22:00'
                                            />
                                        </th>

                                        <th className='ticketIcon' onClick={() => deleteTicket(index)}><DeleteOutlineIcon /></th>
                                        <th className='ticketIcon' onClick={addRow}><QueueIcon /></th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='getTicketButon'>
                            <button>Actualizar</button>
                        </div>
                    </form>
                }
            </div>
            <SnackbarAlert open={open} message={message} />
        </div>
    );
};

export default UpdateTickets;