import { url } from '../utils.helpers.js';

const newAvatarApi = async (avatars) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/avatar`, {
        method: 'POST',
        body: avatars,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { newAvatarApi };