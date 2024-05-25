import './marketUser.scss';
import { useLoginContext } from "../../../context/LoginContext";
import NewProduct from "../NewProduct/NewProduct";

const MarketUser = () => {

    const { user } = useLoginContext();

    return (
        <div className='marketUser'>
            <NewProduct user={user.data._id} />
        </div>
    );
};

export default MarketUser;