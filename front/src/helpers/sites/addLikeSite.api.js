import { url } from '../utils.helpers.js';

const addLikeSiteApi = async (like) => {
    
    const response = await fetch(`${url}/api/site/addlike`, {
        method: 'POST',
        body: JSON.stringify(like),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if (content.error) return error;
    if (content.data) return content.data;
};

export { addLikeSiteApi };