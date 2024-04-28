import { url } from '../utils.helpers.js';

const getAllEventsApi = async (obj) => {

    let urlData = `${url}/api/event?`;
    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.limit) urlData += `limit=${obj.limit}&`;
    if (obj.category) urlData += `category=${obj.category}&`;
    if (obj.active) urlData += `active=${obj.active}&`;
    if (obj.tickets) urlData += `tickets=${obj.tickets}&`;
    if (obj.location) urlData += `location=${obj.location}&`;
    if (obj.userId) urlData += `userid=${obj.userId}&`;

    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    return content.data;
};

export { getAllEventsApi };