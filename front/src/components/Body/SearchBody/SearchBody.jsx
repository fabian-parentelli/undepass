import './searchBody.scss';
import { useState, useEffect } from 'react';
import SerachEvent from '../../event/SearchEvet/SearchEvent.jsx';
import { getEventCitysApi } from '../../../helpers/events/getEventCitys.api.js';
import { getAllEventsApi } from '../../../helpers/events/getAllEvents.api.js';


const SearchBody = ({ setEvents, setLoading }) => {

    const [filter, setFilter] = useState({ active: true, category: null, tickets: null, location: null });
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getEventCitysApi();
            setCities(response);
        }; fetchData();
    }, []);

    const handleChange = (e) => setFilter({ ...filter, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await getAllEventsApi(filter);
        if (response.status === 'success') setEvents(response.result.docs);
        setLoading(false);
    };

    return (
        <div className='searchBody'>

            <div>
                <label>Evento o Invitados</label>
                <SerachEvent setEvents={setEvents} setLoading={setLoading} />
            </div>

            <form onSubmit={handleSubmit} className='formBodyEvent'>

                <div className='getFormBodyEvent'>
                    <label>Categoria</label>
                    <select name="category" onChange={handleChange}>
                        <option value=""></option>
                        <option value="concert">Concierto</option>
                        <option value="discotheque">Discoteca</option>
                        <option value="theater">Teatro</option>
                        <option value="stundup">Stand Up</option>
                        <option value="cultural">Cultural</option>
                        <option value="sports">Deportes</option>
                        <option value="cinema">Cine</option>
                    </select>
                </div>

                <div className='getFormBodyEvent'>
                    <label>Tickets</label>
                    <select name="tickets" onChange={handleChange}>
                        <option value=""></option>
                        <option value="true">Pagos</option>
                        <option value="false">Gratuitos</option>
                    </select>
                </div>

                <div className='getFormBodyEvent'>
                    <label>Locación</label>
                    <select name="location" onChange={handleChange}>
                        <option value=""></option>
                        {cities && cities.map((cit, index) => (
                            <option value={cit} key={index}>{cit}</option>
                        ))}
                    </select>
                </div>

                <button className='btnBody'>Buscar</button>
            </form>
        </div>
    );
};

export default SearchBody;