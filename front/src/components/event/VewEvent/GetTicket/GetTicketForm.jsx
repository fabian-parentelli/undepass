const GetTicketForm = ({ events }) => {

    return (
        <form className='tableForm'>
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
                                        <select name="" className='getTicketSelect'>
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
                                <select name="" className='getTicketSelect'>
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
                            `Comprar entradas`
                        ) : 'Adquirir Entradas'
                    }
                </button>
            </div>
        </form>
    );
};

export default GetTicketForm;