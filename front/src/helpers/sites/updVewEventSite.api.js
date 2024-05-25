import { url } from '../utils.helpers.js';

const updVewEventSiteApi = async (obj) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/site/vewsite`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.error) return error;
    if (content.data) return content.data;
};

export { updVewEventSiteApi };