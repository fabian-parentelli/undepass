import './newProductForm.scss';

const NewProductForm = ({ handleChange }) => {

    return (
        <div className='newProductForm'>

            <div className='divForm'>
                <label>Nombre</label>
                <input
                    type="text"
                    name='name'
                    required
                    onChange={handleChange}
                />
            </div>

            <div className='divForm'>
                <label>Descripción</label>
                <input
                    type="text"
                    name='description'
                    required
                    onChange={handleChange}
                />
            </div>

            <div className='divForm'>
                <label>Precio</label>
                <input
                    type="text"
                    name='price'
                    required
                    onChange={handleChange}
                />
            </div>

            <div className='divForm'>
                <label>Stock</label>
                <input
                    type="text"
                    name='quantity'
                    required
                    onChange={handleChange}
                />
            </div>

        </div>
    );
};

export default NewProductForm;