import { useState } from "react";
import SweetAlert from '../../../utils/SweetAlert';
import { useCartContext } from "../../../../context/CartContext";
import { useNavigate } from 'react-router-dom';

const GetTicketForm = ({ events }) => {

    const { addToCart } = useCartContext()
    const [event, setEvent] = useState([]);
    const [isSweet, setIsSweet] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e, ticket, price, type) => {
        const { value } = e.target;
        setEvent((prevEvent) => {
            const exists = prevEvent.findIndex(tick => tick.ticketId === ticket);
            const updatedTickets = [...prevEvent];
            const obj = {
                description: type,
                photo: events.photo,
                is: 'event',
                name: events.name,
                price,
                quantity: +value,
                siteId: events._id,
                _id: ticket
            };
            if (exists > -1) {
                if (value === "") updatedTickets.splice(exists, 1);
                else updatedTickets[exists] = obj;
            } else if (value !== "") updatedTickets.push(obj);
            return updatedTickets;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSweet(true);
        event.forEach(eve => addToCart(eve));
        setIsSweet(true);
        setEvent([]);
        setTimeout(() => { navigate('/') }, 2000);
    };

    return (
        <form className='tableForm' onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Tipo de entrada</th>
                        <th>Valor</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>

                {events.tickets ? (
                    <tbody>
                        {events.ticketInfo && events.ticketInfo.map((tick) => (
                            <tr key={tick._id} className='tickets'>
                                <th>{tick.type} <br /> <span>{tick.description}</span></th>
                                <th>{tick.price}</th>
                                <th>
                                    {tick.quantity > 0 ?
                                        <select name="quantity" className='getTicketSelect'
                                            onChange={(e) => handleChange(e, tick._id, tick.price, tick.type)}>
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                        : <p className='soldOut'>Agotadas</p>
                                    }
                                </th>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    <tbody>
                        <tr className='tickets'>
                            <th>Entrada libre<br /> <span>Entrada sin cargo</span></th>
                            <th>$ 0</th>
                            <th>
                                <select name="quantity" className='getTicketSelect'
                                    onChange={(e) => handleChange(e, tick._id, tick.price)}>
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </th>
                        </tr>
                    </tbody>
                )}

            </table>

            <div className='getTicketButon'>
                <button
                    style={events.tickets && events.ticketInfo.every(ticket => ticket.quantity <= 0) ? { background: 'gray' } : {}}
                    disabled={events.tickets && events.ticketInfo.every(ticket => ticket.quantity <= 0) ? true : false}
                >
                    {events.tickets ?
                        (events.ticketInfo.every(ticket => ticket.quantity <= 0) ?
                            'Entradas agotadas' :
                            `Agregar al carrito`
                        ) : 'Adquirir Entradas'
                    }
                </button>
            </div>
            {isSweet && <SweetAlert onClose={() => setIsSweet(false)} message={'Evento agregado al carrito'} />}
        </form>
    );
};

export default GetTicketForm;