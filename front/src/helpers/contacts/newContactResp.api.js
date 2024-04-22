import { url } from '../utils.helpers.js';

async function newContactRespApi(contact) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/contact/send`, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newContactRespApi };