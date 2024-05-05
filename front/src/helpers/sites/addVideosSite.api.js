import { url } from '../utils.helpers.js';

const addVideoSiteApi = async (id, site) => {
    
    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/site/addvideo/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ videos: site }),
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

export { addVideoSiteApi };