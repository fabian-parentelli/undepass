import './updateUser.scss';
import { useEffect, useState } from 'react';
import Load from '../../../utils/Load';
import { useParams } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotId from './NotId/NotId';
import PriUser from './PriUser/PriUser';
import FinanUser from './FinanUser/FinanUser';
import UpdAvatar from './UpdAvatar/UpdAvatar';

const UpdateUser = () => {

    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null);
    const [vewFinance, setVewFinance] = useState(false);
    const [vewAvatar, setVewAvatar] = useState(false);
    const [financeData, setFinanceData] = useState(null);
    const { id } = useParams();

    useEffect(() => { if (id) setUserId(id) }, []);
    const handleFinance = () => setVewFinance(!vewFinance);
    const handleAvatar = () => setVewAvatar(!vewAvatar);

    return (
        <div className='updateUser'>
            <div className='upUser'>
                <PeopleAltIcon className='upUT' />
                <div className='uptitle'>
                    <h2>Usuarios</h2>
                    <p>Modificar usuario</p>
                    <div className='line'></div>
                </div>
            </div>

            {!id && <NotId setLoading={setLoading} setUserId={setUserId} />}

            {userId && <PriUser
                userId={userId}
                setLoading={setLoading}
                handleFinance={handleFinance}
                setFinanceData={setFinanceData}
                handleAvatar={handleAvatar}
            />}

            {vewFinance && <FinanUser
                financeData={financeData}
                handleFinance={handleFinance}
                setLoading={setLoading}
                setVewFinance={setVewFinance}
                userId={userId}
            />}

            {vewAvatar && <UpdAvatar 
                userId={userId}
                setLoading={setLoading}
            />}

            <Load loading={loading} />
        </div>
    );
};

export default UpdateUser;