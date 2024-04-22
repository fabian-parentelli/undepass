import './VewContact.scss';
import Load from '../../../../utils/Load.jsx';
import { useEffect, useState } from 'react';
import VewContactHtml from './VewContactHtml/VewContactHtml.jsx';
import { getContactsApi } from '../../../../../helpers/contacts/getContacts.api.js';
import { updActiveContactApi } from '../../../../../helpers/contacts/updActiveContact.api.js';

const VewContact = () => {

    const [contacts, setContact] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await getContactsApi();
            if (response.status === 'success') {
                setContact(response.result);
            };
            setLoading(false);
        }; fetchData();
    }, []);

    const handleChangeActive = async (id) => {
        setLoading(true);
        const response = await updActiveContactApi(id);
        console.log(response);
        if (response.status === 'success') {
            const response = await getContactsApi();
            setContact(response.result);
        };
        setLoading(false);
    };

    return (
        <div className='vewContact'>

            <div className='vcTitle'>
                <h2>Mensajes</h2>
                <div className='line'></div>
            </div>
            
            {contacts.length > 0 ?
                <VewContactHtml
                    contacts={contacts}
                    handleChangeActive={handleChangeActive}
                />
                : <p>No hay mensajes</p>
            }
            <Load loading={loading} />
        </div>
    );
};

export default VewContact;