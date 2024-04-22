import './CheckMap.scss';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { getSearchCoordApi } from '../../../../../helpers/cities/getSearchCoord.api.js';

const CheckMap = ({ values, setValues }) => {

    const [coord, setCoord] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearchCoordChange = async (event) => setSearchText(event.target.value);

    const handleSearchButtonClick = async () => {
        setLoading(true);
        const response = await getSearchCoordApi({ address: searchText });
        if (response.status === 'success') {
            setCoord(response.content);
            setLoading(false);
        };
    };

    const handleLatitud = (lat, lon) => {
        setValues(prevState => ({
            ...prevState, location: { ...prevState.location, coordinates: { lat: lat, lon: lon } }
        }));
    };
    const handleChange = () => { }

    return (
        <div className='CheckMap'>
            {values &&
                <div div className='divBetNewEvent'>
                    <div className='divInEvent'>
                        <label>Latitud</label>
                        <input className='inpSel' type="text" name='startEvent' value={values.location.coordinates.lat || ''} onChange={handleChange} />
                    </div>
                    <div className='divInEvent'>
                        <label>longitud</label>
                        <input className='inpSel' type="text" name='endEvent' value={values.location.coordinates.lon || ''} onChange={handleChange} />
                    </div>
                </div>
            }
            <div className='line'></div>
            <div div className='divBetNewEvent'>
                <div className='divInEvent'>
                    <label>Buscar dirección</label>
                    <input className='inpSel' type="text" onChange={handleSearchCoordChange} />
                </div>
                <p className='searchMap' onClick={handleSearchButtonClick}>Buscar</p>
            </div>

            <div className='divCities'>
                {loading &&
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                }
                {coord && coord.map((cor, index) => (
                    <div key={index} className='roads'>
                        <p>{cor.address.city || cor.address.town} - {cor.address.state}</p>
                        <p>{cor.address.road} {cor.address.house_number}</p>
                        {cor.name.length > 0 ? <p>{cor.name}</p> : <p>Sin nombre</p>}
                        <a href='#imgMap' className='choose' onClick={() => handleLatitud(cor.lat, cor.lon)}>elegir</a>
                        <div className='line'></div>
                    </div>
                ))
                }
            </div>
        </div >
    );
};

export default CheckMap;