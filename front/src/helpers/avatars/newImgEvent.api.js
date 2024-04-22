import { url } from '../utils.helpers.js';

const newImgEventApi = async (avatars) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/avatar/event`, {
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

export { newImgEventApi };