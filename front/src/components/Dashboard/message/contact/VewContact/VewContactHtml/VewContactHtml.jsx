import './vewContactHtml.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VewContactHtml = ({ contacts, handleChangeActive }) => {

    const [openContactId, setOpenContactId] = useState(null);
    const navigate = useNavigate();

    const handleIsOpen = (id) => setOpenContactId(openContactId === id ? null : id);

    const handleResponse = (id) => navigate(`/dashboard/newcontact/${id}`);

    return (
        <div className='vewContactHtml'>
            {contacts &&
                contacts.map((cont) => (
                    <div key={cont._id} className='cvHmessage'>

                        <div className='cvHmessageIn'>
                            <div>
                                <p>{cont.date}</p>
                                <p>{cont.name}</p>
                            </div>
                            <p>{cont.email}</p>
                            <p>{cont.id}</p>
                            {cont.phone ? <p>{cont.phone}</p> : <p>No hay teléfono</p>}
                            <button onClick={() => handleIsOpen(cont._id)} className='btn A'>Mensaje</button>
                            <button onClick={() => handleChangeActive(cont._id)} className='btn C'>Visto</button>
                            <button onClick={() => handleResponse(cont._id)} className='btn B'>Responder</button>
                        </div>

                        <div className={`cvMess ${openContactId === cont._id && 'cvMessOpen'}`}>
                            <p>{cont.message}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default VewContactHtml;
