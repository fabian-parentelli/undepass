import './cartProducts.scss';
import Counter from '../Counter/Counter';
import CancelIcon from '@mui/icons-material/Cancel';
import { useCartContext } from '../../../../../context/CartContext';

const CartProducts = ({ prod }) => {

    const { removeItem, totalProduct } = useCartContext();

    return (
        <tr>
            <td className='tdProduct'>
                <CancelIcon className='icon' onClick={()=> removeItem(prod._id)}/>
                <img src={prod.img} alt={prod.name} />
                <p>{prod.name}</p>
                <p className='pID'>{prod._id}</p>
                <p>{prod.description}</p>
            </td>
            <td>${prod.price}</td>
            <td><Counter prod={prod} /></td>
            <td style={{width: '80px'}}>${totalProduct(prod._id)}</td>
        </tr>
    );
};

export default CartProducts;