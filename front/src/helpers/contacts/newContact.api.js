import { url } from '../utils.helpers.js';

async function newContactApi(contact) {

    const response = await fetch(`${url}/api/contact`, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { newContactApi };