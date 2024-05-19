import './vewSiteNotFound.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLoginContext } from '../../../../context/LoginContext';


const VewSiteNotFound = ({ values }) => {

    const { user } = useLoginContext();
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        if (values && user && values.userId && user.data._id) {
            if (values.userId == user.data._id) setIsUser(true);
        };
    }, [values, user]);

    return (
        <div className='vewSiteNotFound'>
            <h2>Esta página no se encuentra activa</h2>
            {isUser &&
                <div className='vewSiteNotFoundCont'>
                    <p>Hola {user.data.name}</p>
                    <p>Te vamos a dar opciones de info que esta faltando</p>
                    <ul>
                        {!values.active && <li>Tu página no esta activa</li>}
                        {values.img.length < 12 && <li>Faltan imágenes</li>}
                        {values.info.length < 6 && <li>Faltan Textos</li>}
                        {!values.location.province && <li>Falta la provincia</li>}
                        {!values.location.municipality && <li>Falta el partido</li>}
                        {!values.location.city && <li>Falta la ciudad</li>}
                    </ul>
                    <br />
                    <p>Eston son las posibles fallas, revisa Tu Página</p>
                    <Link to={`/newsite`}><button className='sitesShowTxt'>Tu página</button></Link>
                </div>
            }
        </div>
    );
};

export default VewSiteNotFound;