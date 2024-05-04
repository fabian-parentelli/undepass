import { url } from '../utils.helpers.js';

const postSiteImgApi = async (sites) => {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/site/img`, {
        method: 'POST',
        body: sites,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.error) return content;
    if (content.data) return content.data;
};

export { postSiteImgApi };