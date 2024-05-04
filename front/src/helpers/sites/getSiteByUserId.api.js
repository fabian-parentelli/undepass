import { url } from '../utils.helpers.js';

const getSiteByUserId = async (id) => {

    const token = localStorage.getItem('token');
    if (id) {
        const response = await fetch(`${url}/api/site/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        const content = await response.json();
        if (content.data) return content.data;
        if (content.error) return content.error;
    };
};

export { getSiteByUserId };