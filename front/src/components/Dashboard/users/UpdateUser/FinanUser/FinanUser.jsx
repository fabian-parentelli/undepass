import { useEffect, useState } from 'react';
import FinanHtml from '../FinanHtml/FinanHtml.jsx';
import { getUsFinByIdApi } from '../../../../../helpers/userFinan/getUsFinById.api.js';
import { updUserFinanApi } from '../../../../../helpers/userFinan/updUserFinan.api.js';

const FinanUser = ({ financeData, handleFinance, setLoading, setVewFinance, userId }) => {

    const [values, setValues] = useState({ holder: '', cuit: '', bank: '', active: '', account: '', cbu: '', _id: '', userId });
    const handleSetChanges = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    useEffect(() => {
        if (financeData) {
            const fetchData = async (financeData) => {
                setLoading(true);
                const response = await getUsFinByIdApi(financeData);
                if (response.status === 'success') {
                    setValues(response.financeData);
                    setLoading(false);
                };
            }; fetchData(financeData);
        };
    }, []);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const response = await updUserFinanApi(values);
        if (response.status === 'success') {
            setLoading(false);
            setVewFinance(false);
        };
    };

    return (
        <>
            <FinanHtml
                handleFinance={handleFinance}
                values={values}
                handleSetChanges={handleSetChanges}
                handleSubmit={handleSubmit}
            />
        </>
    );
};

export default FinanUser;