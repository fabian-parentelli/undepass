import './usersVew.scss';
import Adult from './Adult';
import { useState } from 'react';
import FinanUsData from './FinanUsData/FinanUsData';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Pager from '../../../../utils/Pager/Pager';
import { Link } from 'react-router-dom';

const UsersVew = ({ users, setLoading, handleIsActive, HandleChangePage }) => {

    const [selectedUserId, setSelectedUserId] = useState(null);
    const handleIsFinanUsData = (id) => setSelectedUserId(id === selectedUserId ? null : id);

    return (
        <div className='usersVew'>
            {users && users.docs && users.docs.map((user) => (
                <div key={user._id} className='onOff'>
                    <div className='uVCont'>

                        <div className='uVimg'>
                            <img src={user.avatar[0]} alt={user.name} />
                            <div className='uVimg-cont'>
                                <img src={user.avatar[0]} alt={user.name} />
                            </div>
                        </div>

                        <div>
                            <p className='user-name'>{user.name}</p>
                            <p className='user_id'><strong>Id:</strong>{user._id}</p>
                        </div>

                        <div>
                            <Adult birthday={user.birthday} />
                            {user.phone && <p>{user.phone}</p>}
                        </div>


                        <ul>
                            <li>{user.location.province}</li>
                            <li>{user.location.municipality}</li>
                            <li>{user.location.city}</li>
                        </ul>

                        <button
                            className={`btn ${!user.financeData ? 'colorA' : 'colorB'}`}
                            onClick={() => handleIsFinanUsData(user._id)}
                            disabled={!user.financeData}
                        >
                            Financiera
                        </button>

                        <button
                            className={`btn ${!user.active ? 'colorA' : 'colorB'}`}
                            onClick={() => handleIsActive(user._id)}
                        >
                            {user.active ? 'Descativar' : 'Activar'}
                        </button>

                        <Link to={`/dashboard/upadUser/${user._id}`}>
                            <button className='btnPen'><BorderColorIcon className='btnPenIcon' /></button>
                        </Link>

                    </div>

                    {selectedUserId === user._id &&
                        <FinanUsData
                            financeData={user.financeData}
                            setLoading={setLoading}
                            handleIsFinanUsData={handleIsFinanUsData}
                            setSelectedUserId={setSelectedUserId}
                        />
                    }
                </div>
            ))}
            {users && <Pager users={users} HandleChangePage={HandleChangePage} />}
        </div>
    );
};

export default UsersVew;