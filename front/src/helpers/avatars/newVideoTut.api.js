import { url } from '../utils.helpers.js';

async function newVideoTutApi(values) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/avatar/videotut`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newVideoTutApi };