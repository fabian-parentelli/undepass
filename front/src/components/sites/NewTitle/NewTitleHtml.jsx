import { useState } from 'react';
import CityConf from '../../utils/CityConf/CityConf.jsx'
import SocialNetworks from './SocialNetworks/SocialNetworks.jsx';

const NewTitleHtml = ({ handleChange, handleSubmit, setValues }) => {

    const [optPhone, setOptPhone] = useState(false);
    const [optEmail, setOptEmail] = useState(false);
    const [optSites, setOptSites] = useState(false);

    return (
        <form className='newTitle' onSubmit={handleSubmit}>
            <h2>Crear tu sitio</h2>
            <p>Los datos que te pedimos son para crear tu página web y van a estar a la vista de tus usuraios. Te recomendamos no subir información confidencial o de indole no público. Algúnos de estos son opcionales, como teléfono, email y ubicación</p>

            <div className='tileSiteForm'>
                <label>Nombre de tu sitio</label>
                <input
                    type="text"
                    name='title'
                    onChange={handleChange}
                />
            </div>

            <div className='tileSiteForm'>
                <label>Categoría</label>
                <select name="category" className='inputSel' onChange={handleChange}>
                    <option value=""></option>
                    <option value="music">Banda musical/Solista</option>
                    <option value="movie">Cine</option>
                    <option value="theater">Teatro</option>
                    <option value="stundup">Stund Up</option>
                    <option value="dance">Danza</option>
                    <option value="studio">Sala ensayo/Estudio</option>
                    <option value="photography">Fotografía</option>
                    <option value="art">Arte</option>
                </select>
            </div>

            {!optPhone ?
                <p className='btnOption' onClick={() => setOptPhone(!optPhone)}>Telefono</p>
                :
                <div className='tileSiteForm'>
                    <label>Teléfono</label>
                    <input
                        type="text"
                        name='phone'
                        onChange={handleChange}
                        placeholder='Teléfono - es opcional'
                    />
                </div>
            }

            {!optEmail ?
                <p className='btnOption' onClick={() => setOptEmail(!optEmail)}>Email</p>
                :
                <div className='tileSiteForm'>
                    <label>Email artístico/laboral <span>No el personal</span></label>
                    <input
                        type="text"
                        name='email'
                        onChange={handleChange}
                        placeholder='Email - es opcional'
                    />
                </div>
            }

            {!optSites ?
                <p className='btnOption' onClick={() => setOptSites(!optSites)}>Ubicación</p>
                :
                <div className='tileSiteFormCity'>
                    <CityConf setValues={setValues} />
                </div>
            }

            <SocialNetworks setValues={setValues} />

            <div className='divBtnsite'><button>Crear</button></div>
        </form>
    );
};

export default NewTitleHtml;