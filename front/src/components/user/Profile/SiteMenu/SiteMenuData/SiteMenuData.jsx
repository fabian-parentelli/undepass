import './siteMenuData.scss';
import { updateSiteApi } from '../../../../../helpers/sites/updateSite.api.js';
import { Link } from 'react-router-dom';


const SiteMenuData = ({ values, setValues, setLoading, setVew }) => {

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });
    const handleLocation = (e) => setValues({ ...values, location: { ...values.location, [e.target.name]: e.target.value } });
    const handleSocial = (e) => setValues({ ...values, socialNetworks: { ...values.socialNetworks, [e.target.name]: e.target.value } });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        await updateSiteApi(values);
        setLoading(false);
        setVew('');
    };

    if (!values) {
        return <div style={{marginTop: '1rem', }}>
            <p>No hay datos disponibles, dirígete a tu página.</p>
            <Link to={'/newsite'} style={{textDecoration: 'none', color: '#f45c14'}}>Tu Página</Link>
        </div>
    }

    return (
        <div className='siteMenuData'>
            <h6>Información general</h6>

            <form onSubmit={handleSubmit}>

                <div className='formDiv'>
                    <div className='divInputs'>
                        <label>Título</label>
                        <input
                            type="text"
                            name='title'
                            value={values.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='divInputs'>
                        <label>Categoría</label>
                        <select name="category" className='inputSel' value={values.category} onChange={handleChange}>
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

                    <div className='divInputs'>
                        <label>Email</label>
                        <input
                            type="text"
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='divInputs'>
                        <label>Teléfono</label>
                        <input
                            type="text"
                            name='phone'
                            value={values.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='divInputs'>
                        <label>Provincia</label>
                        <input
                            type="text"
                            name='province'
                            value={values.location.province}
                            onChange={handleLocation}
                        />
                    </div>

                    <div className='divInputs'>
                        <label>Municipalidad/Comuna</label>
                        <input
                            type="text"
                            name='municipality'
                            value={values.location.municipality}
                            onChange={handleLocation}

                        />
                    </div>

                    <div className='divInputs'>
                        <label>Ciudad/Barrio</label>
                        <input
                            type="text"
                            name='city'
                            value={values.location.city}
                            onChange={handleLocation}
                        />
                    </div>
                </div>

                <div className='formDiv'>
                    <div className='divInputs'>
                        <label>Facebook</label>
                        <input
                            type="text"
                            name='facebook'
                            value={values.socialNetworks.facebook}
                            onChange={handleSocial}
                        />
                    </div>

                    <div className='divInputs'>
                        <label>Instagrame</label>
                        <input
                            type="text"
                            name='instagram'
                            value={values.socialNetworks.instagram}
                            onChange={handleSocial}
                        />
                    </div>

                    <div className='divInputs'>
                        <label>Spotify</label>
                        <input
                            type="text"
                            name='spotify'
                            value={values.socialNetworks.spotify}
                            onChange={handleSocial}
                        />
                    </div>

                    <div className='divInputs'>
                        <label>Tiktok</label>
                        <input
                            type="text"
                            name='tiktok'
                            value={values.socialNetworks.tiktok}
                            onChange={handleSocial}
                        />
                    </div>

                    <div className='divInputs'>
                        <label>X</label>
                        <input
                            type="text"
                            name='twitter'
                            value={values.socialNetworks.twitter}
                            onChange={handleSocial}
                        />
                    </div>

                    <div className='divInputs'>
                        <label>Youtube</label>
                        <input
                            type="text"
                            name='youtube'
                            value={values.socialNetworks.youtube}
                            onChange={handleSocial}
                        />
                    </div>

                    <div className='divInputs'>
                        <br />
                        <button>Actualizar</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default SiteMenuData;