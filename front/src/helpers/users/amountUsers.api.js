import { url } from '../utils.helpers.js';

const amountUsersApi = async () => {

    const token = localStorage.getItem('token');
    if (token) {
        const response = await fetch(`${url}/api/user/amount`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const content = await response.json();
        if (content.error) return content;
        return content.data;
    };
};

export { amountUsersApi };