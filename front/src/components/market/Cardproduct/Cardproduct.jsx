import './cardProduct.scss';
import Carousel from './Carousel/Carousel';

const CardProduct = ({ key, prod }) => {

    return (
        <div className="cardProduct">
            <div className="imgCont">
                <Carousel items={prod.img} />
            </div>
            <div className="cardProductData">
                <p>{prod.name}</p>
                <p className="decr">{prod.description}</p>
                <p className="price">${prod.price}</p>
                <button className="btnCard">Agregar</button>
            </div>
        </div>
    );
};

export default CardProduct;