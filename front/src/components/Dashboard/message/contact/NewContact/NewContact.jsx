import './newcontact.scss';
import IsUser from './IsUser/IsUser.jsx';
import Load from '../../../../utils/Load';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SendEmail from './SendEmail/SendEmail.jsx';
import { getContactByIdApi } from '../../../../../helpers/contacts/getContactById.api.js';

const Newcontact = () => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchData = async (id) => {
                setLoading(true);
                const response = await getContactByIdApi(id);
                if (response.email) setUser(response);
                setLoading(false);
            }; fetchData(id);
        };
    }, []);

    return (
        <div className='newcontact'>

            <div className='ncTitle'>
                <h2>Nuevo mensaje</h2>
                <div className='line'></div>
            </div>
            {user && <IsUser user={user} setLoading={setLoading} />}
            {!user && <SendEmail setLoading={setLoading} />}
            <Load loading={loading} />
        </div>
    );
};

export default Newcontact;