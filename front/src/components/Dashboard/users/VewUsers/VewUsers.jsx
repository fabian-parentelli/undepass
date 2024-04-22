import './vewUsers.scss';
import Load from '../../../utils/Load.jsx'
import { useEffect, useState } from 'react';
import UsersVew from './UsersVew/UsersVew.jsx';
import SearchVewUser from './SearchVewUser/SearchVewUser.jsx';
import { getAllUsersApi } from '../../../../helpers/users/getAllUsers.api.js';
import { updActiveUserApi } from '../../../../helpers/users/updActiveUser.api.js';

const VewUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllUsersApi({});
            if (response.status === 'success') {
                setUsers(response.users);
                setLoading(false);
            };
        }; fetchData();
    }, []);

    const HandleChangePage = async (page) => {
        const response = await getAllUsersApi({ page: page });
        setUsers(response.users);
    };
    
    const handleIsActive = async (id) => {
        setLoading(true);
        const response = await updActiveUserApi(id);
        if (response.status === 'success') {
            const response = await getAllUsersApi({});
            setUsers(response.users);
        };
        setLoading(false);
    };

    return (
        <div className='vewUsers'>
            <SearchVewUser setUsers={setUsers} />
            <UsersVew users={users}
                setLoading={setLoading}
                handleIsActive={handleIsActive}
                HandleChangePage={HandleChangePage}
            />
            <Load loading={loading} />
        </div>
    );
};

export default VewUsers;