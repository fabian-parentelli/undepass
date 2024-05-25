import './vewSiteHtml.scss';
import Carousel from './Carousel/Carousel';
import SocialMedia from './SocialMedia/SocialMedia';
import VewEventSite from '../VewEventSite/VewEventSite';
import VideosVew from '../../../utils/VideosVew/VideosVew';
import VewSiteNotFound from '../VewSiteNotFound/VewSiteNotFound';
import VewUserProducts from '../../../market/vewProducts/VewUserProducts/VewUserProducts';

const VewSiteHtml = ({ values }) => {

    const isValid = values && values.info && values.info.length >= 6 && values.img && values.img.length >= 12;

    if (!isValid) return <VewSiteNotFound values={values} />

    return (
        <div className={`vewSiteHtml ${values && values.dark && 'vewSiteHtmlDark'}`}>
            {values &&
                <>
                    <div className='bannerSite'>
                        <div className='imgBanner' style={{ backgroundImage: `url(${values.img[0].url})` }}></div>
                        <img className='logo' src={values.img[1].url} alt="data" />
                        <h2>{values.title}</h2>
                    </div>

                    {values.events && values.events.length > 0 && <VewEventSite siteEvents={values.events} />}

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

                    <p className='vewSitText'>{values.info[2].content}</p>

                    <div className='vewSitCards'>
                        <div className='vewSitCard'>
                            <img src={values.img[9].url} alt="aaa" />
                            <p>{values.info[3].content}</p>
                        </div>
                        <div className='vewSitCard'>
                            <img src={values.img[10].url} alt="aaa" />
                            <p>{values.info[4].content}</p>
                        </div>
                        <div className='vewSitCard'>
                            <img src={values.img[11].url} alt="aaa" />
                            <p>{values.info[5].content}</p>
                        </div>
                    </div>

                    <VewUserProducts userId={values.userId} />

                    <div className='videoSites'>
                        {values.videos && values.videos.map((vid, index) => (
                            <div key={index} className='videoSite'>
                                <VideosVew url={vid} />
                            </div>
                        ))}
                    </div>

                    <SocialMedia values={values} />
                </>
            }
        </div>
    );
};

export default VewSiteHtml;