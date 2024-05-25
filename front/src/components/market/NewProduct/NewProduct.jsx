import './newProduct.scss';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import NewProductForm from './NewProdForm/NewProductForm';
import CloudFile from '../../utils/CloudFile/CloudFile';
import { newProductsApi } from '../../../helpers/market/newProduct.api.js'
import Load from '../../utils/Load.jsx';

const NewProduct = ({ user }) => {

    const openValues = {
        userId: user, name: '', description: '', price: '', quantity: '', files: [], folderName: `products/${user}`
    };
    const [values, setValues] = useState(openValues);
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);

    const handleChange = (data) => {
        if (data instanceof FormData) {
            const files = data.getAll('files');
            const formDataWithFolder = new FormData();
            files.forEach(file => formDataWithFolder.append('files', file));
            setValues(prevState => ({ ...prevState, files }));
        } else {
            const { name, value, files } = data.target;
            if (files) setValues(prevState => ({ ...prevState, [name]: Array.from(files) }));
            else setValues(prevState => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        for (const key in values) {
            if (key === 'files') {
                values[key].forEach(file => { formData.append(key, file) });
            } else formData.append(key, values[key]);
        };
        const response = await newProductsApi(formData);
        if(response.status === 'success') {
            setValues(openValues);
            formRef.current.reset();
        };
        setLoading(false);
    };

    return (
        <form className='newProduct' onSubmit={handleSubmit} ref={formRef}>

            <div className='newProductTitle'>
                <h2>Crear producto</h2>
                <Link className='newProductHel'>Ayuda</Link>
            </div>
            <div className='line'></div>

            <div className='newProductDiv'>
                <div className='newProductDivImg'>
                    <CloudFile onChange={handleChange} folderName={`product/${user}`} contClass={'cfRect'} />
                    <p>Agrega hasta 5 imagenes</p>
                </div>
                <NewProductForm handleChange={handleChange} />
            </div>

            <div className='btnNewProductBTN'>
                <button className='btnNewProduct'>Agregar</button>
            </div>
            <Load loading={loading} />
        </form>
    );
};

export default NewProduct;