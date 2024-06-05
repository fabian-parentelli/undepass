import { Link } from 'react-router-dom';
import './cardProduct.scss';
import Carousel from './Carousel/Carousel';

const CardProduct = ({ prod }) => {

    return (
        <div className="cardProduct">
            <div className="imgCont">
                <Carousel items={prod.img} />
            </div>
            <div className="cardProductData">
                <p>{prod.name}</p>
                <p className="decr">{prod.description}</p>
                <p className="price">${prod.price}</p>
                <Link to={`product/${prod._id}`}><button className="btnCard">Agregar</button></Link>
            </div>
        </div>
    );
};

export default CardProduct;