import './newSite.scss';
import { useState } from 'react';
import Banner from './Banner/Banner';
import TitleNewSite from './TitleNewSite/TitleNewSite';
import TxtArea from './TxtArea/TxtArea';

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
        </div>
    );
};

export default NewSite;