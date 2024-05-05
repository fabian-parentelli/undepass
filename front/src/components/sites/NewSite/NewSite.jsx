import './newSite.scss';
import Banner from './Banner/Banner';
import { Link } from 'react-router-dom';
import TxtArea from './TxtArea/TxtArea';
import AddVideo from './AddVideo/AddVideo';
import { useEffect, useState } from 'react';
import TitleNewSite from './TitleNewSite/TitleNewSite';
import { getSiteByUserId } from '../../../helpers/sites/getSiteByUserId.api.js';

const NewSite = ({ site, setLoading }) => {
    
    const [dark, setDark] = useState(site?.dark || false);

    return (
        <div className={`newSite ${dark ? 'newSiteDark' : ''}`}>

            <div className='newSiteBanner'>
                {site && <Banner folderName={`sites/${site.url}`} nameImg={'banner'} site={site} setLoading={setLoading} />}
            </div>

            <div className='newSiteLogoBorder'>
                <div className='newSiteLogo'>
                    {site && <Banner folderName={`sites/${site.url}`} nameImg={'logo'} site={site} setLoading={setLoading} />}
                </div>
            </div>

            <TitleNewSite site={site} dark={dark} setDark={setDark} />

            <div className='newSiteHelpssButton'>
                <Link className='newSiteHelpssEvents'>Administrar eventos</Link>
                <p>-</p>
                <Link className='newSiteHelpss'>Ayuda</Link>
            </div>

            <div className='newSiteCompA'>
                <div className='newSiteCompAdiv'>
                    <div className='newSiteTxt'>
                        <TxtArea site={site} nameTxt={'aboutUs'} placeholder={'Quienes somos... (600 caracteres)'} setLoading={setLoading} />
                    </div>
                    <div className='newSiteImgA'>
                        {site && <Banner folderName={`sites/${site.url}`} nameImg={'imgA'} site={site} setLoading={setLoading} />}
                    </div>
                </div>
                <div className='newSiteImgB'>
                    {site && <Banner folderName={`sites/${site.url}`} nameImg={'imgB'} site={site} setLoading={setLoading} />}
                </div>
            </div>

            <div className='newSiteOrigin'>
                <TxtArea site={site} nameTxt={'origin'} placeholder={'Cuenta de tus orígenes... ( 1.835 caracteres)'} setLoading={setLoading} />
            </div>

            <div className='newSiteCarousel'>
                <div className='newSiteCarouselImg'>
                    {site && <Banner folderName={`sites/${site.url}`} nameImg={'carouselA'} site={site} setLoading={setLoading} />}
                </div>
                <div className='newSiteCarouselImg'>
                    {site && <Banner folderName={`sites/${site.url}`} nameImg={'carouselB'} site={site} setLoading={setLoading} />}
                </div>
                <div className='newSiteCarouselImg'>
                    {site && <Banner folderName={`sites/${site.url}`} nameImg={'carouselC'} site={site} setLoading={setLoading} />}
                </div>
                <div className='newSiteCarouselImg'>
                    {site && <Banner folderName={`sites/${site.url}`} nameImg={'carouselD'} site={site} setLoading={setLoading} />}
                </div>
                <div className='newSiteCarouselImg'>
                    {site && <Banner folderName={`sites/${site.url}`} nameImg={'carouselE'} site={site} setLoading={setLoading} />}
                </div>
            </div>

            <div className='newSiteOrigin'>
                <TxtArea site={site} nameTxt={'objetives'} placeholder={'Habla de los objetivos... ( 1.835 caracteres)'} setLoading={setLoading} />
            </div>

            <div className='newSiteCards'>

                <div className='newSiteCard'>
                    <div className='newSiteCardImg'>
                        {site && <Banner folderName={`sites/${site.url}`} nameImg={'cardImgA'} site={site} setLoading={setLoading} />}
                    </div>
                    <div className='newSiteCardText'>
                        <TxtArea site={site} nameTxt={'cardTextA'} placeholder={'Habla de los objetivos... ( 1.835 caracteres)'} setLoading={setLoading} />
                    </div>
                </div>

                <div className='newSiteCard'>
                    <div className='newSiteCardImg'>
                        {site && <Banner folderName={`sites/${site.url}`} nameImg={'cardImgB'} site={site} setLoading={setLoading} />}
                    </div>
                    <div className='newSiteCardText'>
                        <TxtArea site={site} nameTxt={'cardTextB'} placeholder={'Habla de los objetivos... ( 1.835 caracteres)'} setLoading={setLoading} />
                    </div>
                </div>

                <div className='newSiteCard'>
                    <div className='newSiteCardImg'>
                        {site && <Banner folderName={`sites/${site.url}`} nameImg={'cardImgC'} site={site} setLoading={setLoading} />}
                    </div>
                    <div className='newSiteCardText'>
                        <TxtArea site={site} nameTxt={'cardTextC'} placeholder={'Habla de los objetivos... ( 1.835 caracteres)'} setLoading={setLoading} />
                    </div>
                </div>
            </div>

            <div className='newSiteHelpssButton'>
                <Link className='newSiteHelpssEvents'>Administrar mercado</Link>
                <p>-</p>
                <Link className='newSiteHelpss'>Ayuda</Link>
            </div>

            <div className='newSiteAddVideo'>
                {site && <AddVideo site={site} />}
            </div>
        </div>
    );
};

export default NewSite;