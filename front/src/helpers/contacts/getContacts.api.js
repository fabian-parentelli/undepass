import { url } from '../utils.helpers.js';

const getContactsApi = async () => {

    const token = localStorage.getItem('token');
    if (token) {
        const response = await fetch(`${url}/api/contact`, {
            method: 'GET',
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
};

export { getContactsApi };