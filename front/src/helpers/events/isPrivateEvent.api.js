import { url } from '../utils.helpers.js';

async function isPrivateEventApi(id, pass) {

    const response = await fetch(`${url}/api/event/ev/${id}/isprivate/${pass}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { isPrivateEventApi };