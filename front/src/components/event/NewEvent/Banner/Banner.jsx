import './banner.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FlyersComp from './FlyersComp/FlyersComp';
import PresetsComp from './PresetsComp/PresetsComp';

const Banner = ({ user, setIsWindox, events, setLoading }) => {

    const [flayers, setFlayers] = useState(false);
    const [presets, setPresets] = useState(false);

    const handleFlayers = () => {
        setFlayers(!flayers);
        setPresets(false);
    };
    
    const handlePresets = () => {
        setFlayers(false);
        setPresets(!presets);
    };

    return (
        <div className='banner'>
            <Link className='newEventHelp'>Ayuda</Link>
            <div className='btnsBanner'>
                <button onClick={handleFlayers}>Subir flyers</button>
                <button onClick={handlePresets}>Presets</button>
            </div>

            {flayers && <FlyersComp setIsWindox={setIsWindox} events={events} setLoading={setLoading} /> }
            {presets && <PresetsComp user={user} setIsWindox={setIsWindox} events={events} setLoading={setLoading} /> }
        </div>
    );
};

export default Banner;