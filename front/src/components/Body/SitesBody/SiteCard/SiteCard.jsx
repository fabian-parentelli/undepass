import './siteCard.scss';
import { Link } from 'react-router-dom';
import { englishToSpanish } from '../../../utils/englishToSpanish.js';

const SiteCard = ({ sit }) => {

    const category = englishToSpanish(sit.category);

    return (
        <Link to={`/site/${sit.url}`} className='siteCard'>

            <div className='sitesShowDivImg'>

                {sit.img && sit.img.length > 0 ? (
                    sit.img.some(img => img.name === "logo") ? (
                        sit.img.map((img, imgIndex) => {
                            if (img.name === "logo") {
                                return <img key={imgIndex} src={img.url} alt="Logo" />;
                            }
                            return null;
                        })
                    ) : (
                        <img style={{ backgroundColor: 'black' }} src='newLog.png' alt="Logo" />
                    )
                ) : (
                    <img style={{ backgroundColor: 'black' }} src='newLog.png' alt="Logo" />
                )}

            </div>

            <div className='siteCardText'>
                <p className='title'>{sit.title}</p>
                <p className='category'>{category}</p>
                <div className='like'>
                    {sit.likeCount.length > 0 && <p className='count'>{sit.likeCount.length}</p> }
                    <p>Me gusta</p>
                </div>
            </div>
        </Link>
    );
};

export default SiteCard;