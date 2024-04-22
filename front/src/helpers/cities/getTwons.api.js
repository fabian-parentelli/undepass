import { url } from '../utils.helpers.js';

const getTownsApi = async (id) => {

    const response = await fetch(`${url}/api/city//province/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { getTownsApi };