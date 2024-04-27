import './newEventHtml.scss';
import { Link } from 'react-router-dom';
import CityConf from '../../../utils/CityConf/CityConf';
import DateHourConf from '../../../utils/DateHourConf/DateHourConf';
import MapVew from '../../../utils/MapVew/MapVew';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const NewEventHtml = ({ handleChange, setValues, handleSubmit, handleCoord, values, user }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isButton, setIsButton] = useState(false);
    const [showPasswordInput, setShowPasswordInput] = useState(false);

    const handleIeisOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleIsButton = (e) => {
        handleCoord();
        if (e.target.value !== '') setIsButton(true);
        else setIsButton(false);
    };

    useEffect(() => {
        if (values.type === 'private') setShowPasswordInput(true);
        else setShowPasswordInput(false);
    }, [values.type]);

    return (
        <div className='newEventHtml'>
            <Link to={'/help#newEventHelp'} className='newEventHelp'>Ayuda</Link>
            <div className='newEvent'>
                <form onSubmit={handleSubmit}>
                    <div className='divBetNewEvent'>
                        <div className='divInEvent'>
                            <label>Tipo</label>
                            <select className='inpSel' name="type" defaultValue={'elgir'} onChange={handleChange} required>
                                <option value="">elegir</option>
                                <option value="public">Publico</option>
                                <option value="private">Privado</option>
                            </select>
                        </div>
                        <div className='divInEvent'>
                            <label>Categoria</label>
                            <select className='inpSel' name="category" defaultValue={'elgir'} onChange={handleChange} required>
                                <option value="">elegir</option>
                                <option value="concert">Concierto</option>
                                <option value="discotheque">Discoteca</option>
                                <option value="theater">Teatro</option>
                                <option value="stundup">Stand Up</option>
                                <option value="cultural">Cultural</option>
                                <option value="sports">Deportes</option>
                                <option value="cinema">Cine</option>
                            </select>
                        </div>
                    </div>

                    {showPasswordInput &&
                        <div className='divBetNewEvent'>
                            <div className='divInEvent'>
                                <label>Contraseña del evento</label>
                                <input className='inpSel' type="text" name='password' placeholder='ej. amigos1234' onChange={handleChange} required />
                            </div>
                        </div>
                    }

                    <div className='divBetNewEvent'>
                        <div className='divInEvent'>
                            <label>Nombre del evento</label>
                            <input className='inpSel' type="text" name='name' placeholder='ej. Con amigos' onChange={handleChange} required />
                        </div>
                        <div className='divInEvent'>
                            <label>Menores de 18 años</label>
                            <select className='inpSel' name="minors" defaultValue={'elgir'} onChange={handleChange} required>
                                <option value="">elegir</option>
                                <option value="true">Apto todo Público</option>
                                <option value="false">No apto menores</option>
                            </select>
                        </div>
                    </div>

                    <div className='divBetNewEvent'>
                        <div className='divInEvent'>
                            <label>Descripción del evento</label>
                            <textarea name="description" cols="30" rows="10" onChange={handleChange} required></textarea>
                        </div>
                    </div>

                    <div className='divBetNewEvent'>
                        <div className='divInEvent'>
                            <label>Inicio del evento</label>
                            <DateHourConf name={'startEvent'} setValues={setValues} />
                        </div>
                        <div className='divInEvent'>
                            <label>Fin del evento</label>
                            <DateHourConf name={'endEvent'} setValues={setValues} />
                        </div>
                    </div>

                    <div className='divBetNewEvent'>
                        <div className='divInEvent'>
                            <CityConf setValues={setValues} />
                        </div>
                        <div className='divInEvent'>
                            <label>Invitados</label>
                            <input className='inpSel' name='guests' placeholder='Si es mas de uno separalo con una coma' type="text" onChange={handleChange} />
                        </div>
                    </div>

                    <div className='divBetNewEvent'>
                        <div className='divInEvent'>
                            <label>Dirección</label>
                            <input
                                className='inpSel'
                                name='address'
                                placeholder='ej. tucuman 1171'
                                type="text"
                                onChange={handleChange}
                                onBlur={handleIsButton}
                                required
                            />
                        </div>
                        <div className='divInEvent'>
                            <label>Nobre del lugar</label>
                            <input className='inpSel' name='place' placeholder='ej. teatro Colón' type="text" onChange={handleChange} required />
                        </div>
                    </div>

                    {isButton && <p className='btnMap' onClick={handleIeisOpen}>Ver Mapa</p>}

                    <Dialog open={isOpen} >
                        <p onClick={handleIeisOpen} className='closedMap'><CancelIcon className='pIcon' /></p>
                        <div style={{ width: '300px', height: '300px' }}>
                            {values.location.coordinates && <MapVew coordinates={values.location.coordinates} />}
                        </div>
                        {user && user.role !== 'admin' &&
                            <p style={{ textAlign: 'center', padding: '5px 0' }}>Si no es correcto preciona acá</p>
                        }
                    </Dialog>

                    <div className='divBetNewEvent'>
                        <div className='divInEvent'>
                            <label>Video de Yotube</label>
                            <input
                                className='inpSel'
                                name='video'
                                placeholder='https://www.youtube.com/watch?v=VxIdnivOrlU'
                                type="text"
                                onChange={handleChange}
                            />
                        </div>
                        <div className='divInEvent'>
                            <label>Identificador de Usuario</label>
                            <p className='inpSel tex'>{user && user._id}</p>
                        </div>
                    </div>

                    <div className='divBetNewEvent'>
                        <div className='divInEvent'>
                            <label>Entradas</label>
                            <select className='inpSel' name="tickets" defaultValue={'elgir'} onChange={handleChange} required>
                                <option value="">elegir</option>
                                <option value="true">Pagas</option>
                                <option value="false">Gratis</option>
                            </select>
                        </div>
                        <button className='btnEvent' disabled={!user._id}>Continuar</button>
                    </div>
                </form>

                {user && user.role !== 'admin' &&
                    <img className='imgEvenet' src={'https://res.cloudinary.com/dtjzfz2ex/image/upload/v1712788088/background/wy4cjxchevbax4tbuoyt.png'} alt="event" />
                }
            </div>
        </div >
    );
};

export default NewEventHtml;