import { url } from '../utils.helpers.js';

const getBySiteIdApi = async (id) => {

    const response = await fetch(`${url}/api/comment/siteid/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const content = await response.json();
    if(content.data) return content.data;
    if(content.error) return content.error;
};

export { getBySiteIdApi };