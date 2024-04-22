import { url } from '../utils.helpers.js';

const getContactByIdApi = async (id) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/contact/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if(content.data) return content.data.result;
    if(content.error) return content.error;
};

export { getContactByIdApi };