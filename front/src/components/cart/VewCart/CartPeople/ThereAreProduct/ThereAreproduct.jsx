import CityConf from '../../../../utils/CityConf/CityConf';

const ThereAreproduct = ({ values, setValues }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState, location: { ...prevState.location, [name]: value }
        }));
    };

    return (
        <>
            {values && !values.userId && < CityConf setValues={setValues} />}

            {values && values.location && values.location.city &&
                <>
                    <input
                        type="text"
                        placeholder='Calle-N° de puerta'
                        required
                        name='address'
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder='Código postal'
                        required
                        name='postalCode'
                        onChange={handleChange}
                    />
                </>
            }
        </>
    );
};

export default ThereAreproduct;