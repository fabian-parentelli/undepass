import React, { useState, useEffect } from "react";
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

const Adult = ({ birthday }) => {

    const [age, setAge] = useState('');
    const [isAdult, setIsAdult] = useState(false);
    const [formattedBirthday, setFormattedBirthday] = useState('');

    useEffect(() => {
        const birthdayDate = new Date(birthday);
        const esMayorDeEdad = () => {
            const edadMinima = 18;
            const hoy = new Date();
            let edad = hoy.getFullYear() - birthdayDate.getFullYear();
            const mes = hoy.getMonth() - birthdayDate.getMonth();
            if (mes < 0 || (mes === 0 && hoy.getDate() < birthdayDate.getDate())) edad--;
            return edad >= edadMinima;
        };
        setIsAdult(esMayorDeEdad());

        const hoy = new Date();
        let edad = hoy.getFullYear() - birthdayDate.getFullYear();
        const mes = hoy.getMonth() - birthdayDate.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < birthdayDate.getDate())) edad--;
        setAge(edad);

        const day = birthdayDate.getDate().toString().padStart(2, '0');
        const month = (birthdayDate.getMonth() + 1).toString().padStart(2, '0');
        const year = birthdayDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        setFormattedBirthday(formattedDate);
    }, [birthday]);

    return (
        <div className="adult">
            <p>{formattedBirthday}</p>
            <p>-{age}</p>
            {isAdult ? <AssistWalkerIcon style={{ color: 'green' }} /> : <ChildFriendlyIcon style={{ color: 'red' }} />}
        </div>
    );
};

export default Adult;
