import { url } from '../utils.helpers.js';

const getEventQuantityApi = async () => {

    const response = await fetch(`${url}/api/event/quantity`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if(content.data) return content.data;
};

export { getEventQuantityApi };