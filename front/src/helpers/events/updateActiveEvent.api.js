import { url } from '../utils.helpers.js';

const updActiveEventApi = async (id) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/event/active/${id}`, {
        method: 'PUT',
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

export { updActiveEventApi };