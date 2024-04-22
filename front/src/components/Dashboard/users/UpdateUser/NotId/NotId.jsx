import './notId.scss';
import { Autocomplete, TextField } from '@mui/material';
import { getNameIdUserApi } from '../../../../../helpers/users/getNameIdUser.api.js';
import { useEffect, useState } from 'react';

const NotId = ({ setLoading, setUserId }) => {

    const [users, setUsers] = useState([]);

    const handleChange = (e, user) => user && setUserId(user.id);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getNameIdUserApi();
            if (response.status === 'success') {
                const data = response.result.map((user) => ({ label: user.name, id: user.id }));
                setUsers(data);
                setLoading(false);
            };
        }; fetchData();
    }, []);

    return (
        <div className='notId'>
            <label>Buscar Usuario</label>
            <div className='searchHelp' style={{ width: '250px', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '6px' }}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={users}
                    onChange={handleChange}
                    clearOnBlur={true}
                    sx={{
                        width: '100%',
                        '& .MuiInputBase-input': {
                            fontSize: '12px',
                            height: '100%',
                            borderRadius: '30px',
                            backgroundColor: 'rgba(255, 255, 255, 0)',
                            paddingLeft: '5px',
                            fontFamily: 'Pangolin, cursive',
                        },
                    }}
                    renderInput={(params) => <TextField {...params} label="usuarios"
                        InputLabelProps={{
                            style: { fontSize: '13px', fontFamily: 'Pangolin, cursive' }
                        }}
                    />}
                />
            </div>
        </div>
    );
};

export default NotId;