import { url } from '../utils.helpers.js';

const getEventByIdApi = async (id) => {

    const response = await fetch(`${url}/api/event/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if(content.data) return content.data.result;
    if(content.error) return content.error;
};

export { getEventByIdApi };