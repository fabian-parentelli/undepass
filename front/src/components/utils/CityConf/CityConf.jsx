import './cityConf.scss';
import { useEffect, useState } from 'react';
import TwonConf from './TwonConf/TwonConf.jsx';
import ProvinceConf from './ProvinceConf/ProvinceConf.jsx';
import LocalitiesConf from './LocalitiesConf/LocalitiesConf.jsx';

const CityConf = ({ setValues }) => {

    const [selectedProv, setSelectedProv] = useState(null);
    const [selectedTown, setSelectedTown] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        if (selectedProv && selectedTown && selectedCity) {
            setValues(prevState => ({
                ...prevState,
                location: {
                    province: selectedProv,
                    municipality: selectedTown,
                    city: selectedCity
                }
            }));
        };
    }, [selectedCity]);

    return (
        <div className='cityConf'>
            <p>Localidad</p>
            <div className='cityConfDiv'>
                <ProvinceConf setSelectedProv={setSelectedProv} />
                {selectedProv && <TwonConf selectedProv={selectedProv} setSelectedTown={setSelectedTown} />}
                {selectedTown &&
                    <LocalitiesConf selectedTown={selectedTown} selectedProv={selectedProv} setSelectedCity={setSelectedCity} />
                }
            </div>
        </div>
    );
};

export default CityConf;