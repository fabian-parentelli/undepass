import { useEffect, useState } from 'react';
import FinanUsDataHtml from './FinanUsDataHtml/FinanUsDataHtml.jsx';
import { getUsFinByIdApi } from '../../../../../../helpers/userFinan/getUsFinById.api.js';
import { updUserFinanApi } from '../../../../../../helpers/userFinan/updUserFinan.api.js';

const FinanUsData = ({ financeData, setLoading, handleIsFinanUsData, setSelectedUserId }) => {

    const [values, setValues] = useState({
        account: '', active: '', bank: '', cbu: '', cuit: '', holder: '', _id: '', userId: ''
    });

    useEffect(() => {
        const fetchData = async (financeData) => {
            setLoading(true);
            const response = await getUsFinByIdApi(financeData);
            if (response.status === 'success') {
                const { account, active, bank, cbu, cuit, holder, _id, userId } = response.financeData;
                setValues({
                    account, active, bank, cbu, cuit, holder, _id, userId
                });
            };
            setLoading(false);
        }; fetchData(financeData);
    }, []);

    const handleSetChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const response = await updUserFinanApi(values);
        if (response.status === 'success') {
            setLoading(false);
            setSelectedUserId(null);
        };
    };

    return (
        <FinanUsDataHtml
            values={values}
            handleSetChanges={handleSetChanges}
            handleSubmit={handleSubmit}
            handleIsFinanUsData={handleIsFinanUsData}
        />
    );
};

export default FinanUsData;