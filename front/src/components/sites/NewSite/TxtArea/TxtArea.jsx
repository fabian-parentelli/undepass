import './txtArea.scss';
import { useState } from "react";
import { updateSiteApi } from '../../../../helpers/sites/updateSite.api.js';

const TxtArea = ({ site, nameTxt, placeholder, setLoading }) => {

    if (!site) return null;
    
    const texts = site.info.find(tx => tx.text === nameTxt);
    const content = texts ? texts.content : '';

    const [values, setValues] = useState({ _id: site._id, text: nameTxt, content });

    const handleChange = (e) => {
        setValues({ ...values, content: e.target.value });
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        await updateSiteApi(values);
        setLoading(false);
    };

    return (
        <form className='txtArea' onSubmit={handleSubmit}>

            <textarea
                name={nameTxt}
                cols="30"
                rows="10"
                placeholder={placeholder}
                onChange={handleChange}
                value={values.content}
            ></textarea>

            <button type="submit" className="btnTextArea">Actualizar</button>
        </form>
    );
};

export default TxtArea;