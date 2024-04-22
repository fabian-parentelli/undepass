import './searchVewUser.scss';
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useEffect, useState } from 'react';
import { getAllUsersApi } from '../../../../../helpers/users/getAllUsers.api.js';
import { getLookUsersApi } from '../../../../../helpers/users/getlookUsers.api.js';

const SearchVewUser = ({ setUsers }) => {

    const [values, setValues] = useState('');
    const handleChange = (e) => setValues(e.target.value);

    useEffect(() => {
        const fetchData = async () => {
            if (!values) {
                const response = await getAllUsersApi({});
                if (response.status === 'success') setUsers(response.users);
            } else {
                const response = await getLookUsersApi(values);
                if(response.status === 'success') setUsers(response.result);
            };
        }; fetchData();
    }, [values]);

    return (
        <div className='searchVewUser'>
            <div className='vUContainer'>

                <div className='vewUsersTitle'>
                    <PeopleAltIcon className='vUIcon' />
                    <div className='vUtitle'>
                        <h2>Usuarios</h2>
                        <p>Ver y activar usuarios</p>
                    </div>
                </div>

                <div className='vUsearch'>
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder='Buscar Usuarios'
                        name='values'
                        value={values}
                        onChange={handleChange}
                    />
                </div>

            </div>
            <div className='line'></div>
        </div>
    );
};

export default SearchVewUser;