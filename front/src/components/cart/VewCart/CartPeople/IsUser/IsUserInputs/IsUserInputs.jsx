import './isUserInputs.scss';
import ThereAreproduct from '../../ThereAreProduct/ThereAreproduct';

const IsUserInputs = ({ values, setValues, thereAreP }) => {

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    return (
        <div className='isUserInputs'>

            {values && !values.phone &&
                <input
                    type="text"
                    placeholder='Teléfono'
                    required
                    name='phone'
                    onChange={handleChange}
                />
            }

            <input
                type="text"
                placeholder='Documento de Identidad'
                required
                name='dni'
                onChange={handleChange}
            />

            {thereAreP && <ThereAreproduct values={values} setValues={setValues} /> }

        </div>
    );
};

export default IsUserInputs;