import './listEventMenu.scss';
import { Link } from 'react-router-dom';
import Pager from '../../../../utils/Pager/Pager';
import { getAllEventsApi } from '../../../../../helpers/events/getAllEvents.api.js';
import { updActiveEventApi } from '../../../../../helpers/events/updateActiveEvent.api.js';

const ListEventMenu = ({ values, setValues, setVew, setThisEvent, setLoading }) => {

    const handleChangePage = async (page) => {
        const response = await getAllEventsApi({ page: page, active: true, userId: values.userId });
        setValues(response.result);
    };

    const handleSetEvent = (index) => {
        setThisEvent(values.docs[index]);
        setVew('checkOut');
    };

    const handleSetTick = (index) => {
        setThisEvent(values.docs[index]._id);
        setVew('tickets');
    };

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveEventApi(id);
        if (response.status === 'success') {
            const response = await getAllEventsApi({ active: true, userId: values.docs[0].userId });
            setValues(response.result);
        };
        setLoading(false);
    };

    console.log(values.docs);

    return (
        <div className='listEventMenu'>
            <table className='table'>

                <thead>
                    <tr>
                        <th>Nombre del Evento</th>
                        <th>Fecha de Inicio</th>
                        <th>Ciudad - Provincia</th>
                        <th>Entrada</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                {values &&
                    <tbody>
                        {values.docs.map((event, index) => (
                            <tr key={index}>
                                <th>{event.name}</th>
                                <th>{event.startEvent}</th>
                                <th>{event.location.city} - {event.location.province}</th>
                                <th>{event.tickets ? 'Pago' : 'Gratis'}</th>
                                <th>
                                    <button onClick={() => handleActive(event._id)}>Desactivar</button>
                                </th>
                                <th>
                                    <button onClick={() => handleSetEvent(index)}>
                                        Modificar
                                    </button>
                                </th>

                                {event.tickets ?
                                    <th>
                                        <button onClick={() => handleSetTick(index)}>Entradas</button>
                                    </th>
                                    : <th><button >Entradas</button></th>
                                }
                                <th>
                                    <Link to={`/vewevent/${event._id}`}>
                                        <button>Ver</button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                }
            </table>
            <Pager users={values} HandleChangePage={handleChangePage} />
        </div >
    );
};

export default ListEventMenu;