import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const DateHourConf = ({ name, setValues }) => {

    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateTimeChange = (value) => setSelectedDate(value);

    useEffect(() => {
        if (selectedDate) {
            const formattedDateTime = dayjs(selectedDate).format('DD-MM-YYYY HH:mm');
            if (selectedDate !== null) setValues(prevSet => ({ ...prevSet, [name]: formattedDateTime }));
        }
    }, [selectedDate, name]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker
                    label="dia-mes-año-hora"
                    onChange={handleDateTimeChange}
                    name={name}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default DateHourConf;