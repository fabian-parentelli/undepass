import { url } from '../utils.helpers.js';

async function newOrdersApi(order) {

    const response = await fetch(`${url}/api/order`, {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { newOrdersApi };