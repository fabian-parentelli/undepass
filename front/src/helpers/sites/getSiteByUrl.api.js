import { url } from '../utils.helpers.js';

const getSiteByUrlApi = async (id) => {

    if (id) {
        const response = await fetch(`${url}/api/site/site/${id}`, {
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
};

export { getSiteByUrlApi };