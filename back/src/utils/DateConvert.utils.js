function convertDate(dateString) {

    const part = dateString.split(/[- :]/);
    const dates = new Date(part[2], part[1] - 1, part[0], part[3], part[4]);
    return dates;
};

export default convertDate;