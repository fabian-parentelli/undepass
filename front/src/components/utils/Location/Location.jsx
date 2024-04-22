import './location.scss';
import { useState, useEffect } from 'react';
import RoomIcon from '@mui/icons-material/Room';

function Location() {

    const [city, setCity] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async position => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`);
                        if (!response.ok) {
                            throw new Error('Error en la solicitud');
                        }
                        const data = await response.json();
                        setCity(data.address.town + ' - ' + data.address.state);
                    } catch (error) {
                        console.error('Error obteniendo la ciudad:', error);
                    }
                },
                error => {
                    console.error('Error obteniendo la ubicación:', error);
                }
            );
        } else {
            console.error('Geolocalización no soportada');
        }
    }, []);

    return (
        <div className='location'>
            {city ? (
                <div><RoomIcon /> {city}</div>
            ) : (
                <div>Obteniendo ubicación...</div>
            )}
        </div>
    );
}

export default Location;