import './carousel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ values }) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <>
            {values &&
                <Slider {...settings} className='sliderComp'>
                    <div>
                        <img className='imgCarousel' src={values.img[4].url} alt="Imagen 1" />
                    </div>
                    <div>
                        <img className='imgCarousel' src={values.img[5].url} alt="Imagen 2" />
                    </div>
                    <div>
                        <img className='imgCarousel' src={values.img[6].url} alt="Imagen 3" />
                    </div>
                    <div>
                        <img className='imgCarousel' src={values.img[7].url} alt="Imagen 4" />
                    </div>
                    <div>
                        <img className='imgCarousel' src={values.img[8].url} alt="Imagen 5" />
                    </div>
                </Slider>
            }
        </>
    );
};

export default Carousel;