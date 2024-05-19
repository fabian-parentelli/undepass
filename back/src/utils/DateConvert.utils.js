function convertDate(dateString) {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('-');
    const [hours, minutes] = timePart.split(':');

    const dateUTC = new Date(Date.UTC(year, month - 1, day, hours, minutes));

    return dateUTC;
}

export default convertDate;