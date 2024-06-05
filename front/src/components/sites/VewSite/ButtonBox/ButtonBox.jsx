import './buttonBox.scss';
import { useState } from 'react';
import AddLike from './AddLike/AddLike.jsx';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBox from './FavoriteBox/FavoriteBox.jsx';

const ButtonBox = ({ values, setValues, setLoading }) => {

    const [message, setMessage] = useState('');

    return (
        <div className='buttonBox'>

            <div className='buttonBoxDIV'>
                <AddLike values={values} setValues={setValues} setLoading={setLoading} setMessage={setMessage} />

                <a href={`/site/${values.url}#messageSite`} style={{ textDecoration: 'none' }}>
                    <button className='buttonBoxBtn'>
                        <MessageIcon />
                        <p>Comentar</p>
                    </button>
                </a>

                <FavoriteBox values={values} setValues={setValues} setLoading={setLoading} setMessage={setMessage} />
            </div>
            
            <p>{message}</p>
        </div>
    );
};

export default ButtonBox;