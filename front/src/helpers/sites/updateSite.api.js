import { url } from '../utils.helpers.js';

const updateSiteApi = async (site) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/site`, {
        method: 'PUT',
        body: JSON.stringify(site),
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

export { updateSiteApi };