import { url } from '../utils.helpers.js';

const getPartiesApi = async (tid, pid) => {

    const response = await fetch(`${url}/api/city/twon/${tid}/province/${pid}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if (content.data) return content.data.result;
    if (content.error) return content.error;
};

export { getPartiesApi };