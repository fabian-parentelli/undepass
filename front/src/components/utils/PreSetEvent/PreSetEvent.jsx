import './preSetEvent.scss';

const PreSetEvent = ({ comp, data }) => {

    return (
        <>
            {data && comp &&
                <div className={comp}>
                    {!data.minors &&
                        <img className='isMinors' width="96" height="96" src="https://img.icons8.com/color/96/18-plus.png" alt="18-plus" />
                    }
                    <div className='cameraBody'>
                        <h3>{data.name}</h3>
                        <div className='cameraGuests'>
                            {data.guests.map((gue, index) => (
                                <p key={index}>{gue}</p>
                            ))}
                        </div>
                        <p className='description'>{data.description}</p>
                        <p className='date'>{data.startEvent} - {data.location.place}</p>
                        <p className='location'>{data.location.city} - {data.location.province}</p>
                    </div>
                </div>
            }
        </>
    );
};

export default PreSetEvent;