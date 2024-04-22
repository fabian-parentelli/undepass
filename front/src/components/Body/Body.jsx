import './body.scss';
import DoorPanel from './DoorPanel/DoorPanel';
import { useLoginContext } from '../../context/LoginContext';

const Body = () => {

    const { user } = useLoginContext();

    return (
        <div className='body'>
            {user && user.data && user.data.role === 'admin' && <DoorPanel />}
            <h2>body</h2>
        </div>
    );
};

export default Body;