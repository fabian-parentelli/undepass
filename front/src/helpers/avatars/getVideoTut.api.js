import { url } from '../utils.helpers.js';

const getVideoTutApi = async () => {

    const response = await fetch(`${url}/api/avatar/videotut`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { getVideoTutApi };