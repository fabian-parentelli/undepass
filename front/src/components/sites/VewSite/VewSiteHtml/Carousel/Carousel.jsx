import './carousel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { useEffect } from 'react';

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

    const [screen, setScreen] = useState(settings);
    
    useEffect(() => {
        if (window.innerWidth < 426) {
            setScreen({...screen, slidesToShow: 1})
        } else {
            setScreen({...screen, slidesToShow: 3})
        }
    }, [window.innerWidth]);

    return (
        <>
            {values && screen &&
                <Slider {...screen} className='sliderComp'>
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