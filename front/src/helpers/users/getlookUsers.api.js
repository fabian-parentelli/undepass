import { url } from '../utils.helpers.js';

const getLookUsersApi = async (name) => {
    
    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/user/look/${name}`, {
        method: 'GET',
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

export { getLookUsersApi };