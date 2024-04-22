import './YourCity.scss';

const YourCity = ({ values, setValues }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ 
            ...values,
            location: {
                ...values.location,
                [name]: value
            }
        });
    };

    return (
        <div className='YourCity'>
            <input
                type="text"
                name='province'
                value={values.location.province}
                placeholder='Provincia'
                onChange={handleChange}
            />
            <input
                type="text"
                name='municipality'
                value={values.location.municipality}
                placeholder='Municipio'
                onChange={handleChange}
            />
            <input
                type="text"
                name='city'
                value={values.location.city}
                placeholder='Localidad'
                onChange={handleChange}
            />
        </div>
    );
};

export default YourCity;