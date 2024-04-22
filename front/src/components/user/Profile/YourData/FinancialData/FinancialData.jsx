import './financialData.scss';
import { useEffect, useState } from 'react';
import FinDataHtml from './FinDataHtml/FinDataHtml.jsx';
import { getUsFinByUserApi } from '../../../../../helpers/userFinan/getUsFinByUser.api.js';

const FinancialData = ({ user, setIsVew }) => {

    const [loading, setLoading] = useState(false);
    const [isValued, setIsValued] = useState(false);

    const [values, setValues] = useState({
        holder: '',
        cuit: '',
        bank: '',
        account: '',
        cbu: '',
        userId: user._id
    });

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getUsFinByUserApi();
            if (response.status === 'success') {
                const { financeData } = response;
                setValues({
                    holder: financeData.holder,
                    cuit: financeData.cuit,
                    bank: financeData.bank,
                    account: financeData.account,
                    cbu: financeData.cbu,
                    userId: user._id
                })
                setIsValued(true);
            };
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <FinDataHtml
            values={values}
            setValues={setValues}
            setIsVew={setIsVew}
            loading={loading}
            setLoading={setLoading}
            isValued={isValued}
        />
    );
};

export default FinancialData;