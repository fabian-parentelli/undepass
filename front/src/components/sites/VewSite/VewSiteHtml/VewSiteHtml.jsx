import './vewSiteHtml.scss';
import Carousel from './Carousel/Carousel';

const VewSiteHtml = ({ values }) => {
    if (values && !values.active) return <h2>El sitio no esta activo</h2>

    return (
        <div className={`vewSiteHtml ${values && values.dark && 'vewSiteHtmlDark'}`}>
            {values &&
                <>
                    <div className='bannerSite'>
                        <div className='imgBanner' style={{ backgroundImage: `url(${values.img[0].url})` }}></div>
                        <img className='logo' src={values.img[1].url} alt="data" />
                        <h2>{values.title}</h2>
                    </div>

                    {/* Eventos - acá van los eventos */}

                    <div className='vewSiteHtmlA'>
                        <div className='vewSitImgAa'>
                            <p>{values.info[0].content}</p>
                            <img className='vewSitImgAA' src={values.img[2].url} alt="aaa" />
                        </div>
                        <img className='vewSitImgA' src={values.img[3].url} alt="aaa" />
                    </div>

                    <p className='vewSitText'>{values.info[1].content}</p>

                    <div className='carousel'>
                        <Carousel values={values} />
                    </div>

                </>
            }
        </div>
    );
};

export default VewSiteHtml;