import { useState } from 'react';
import DateConf from '../../../../utils/DateConf/DateConf';


const YourBirthday = ({ user, setValues }) => { 

    const date = new Date(user.birthday);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const birthday = { day, month, year };

    return (
        <>
            <DateConf setValues={setValues} birthday={birthday} />
        </>
    );
};

export default YourBirthday;