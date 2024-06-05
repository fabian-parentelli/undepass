import './cartBody.scss';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../../context/CartContext';

const CartBody = () => {

    const { cart } = useCartContext();

    return (
        <>
            {cart.length > 0 &&
                <Link to={'/cart'} className='cartBody'>
                    <Badge badgeContent={cart.length} color="success">
                        <ShoppingCartIcon color="action"  style={{fontSize: '2rem'}}/>
                    </Badge>
                </Link>
            }
        </>
    );
};

export default CartBody;