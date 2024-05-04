import { url } from "../utils.helpers";

async function newSiteTitleApi(title) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/site`, {
        method: 'POST',
        body: JSON.stringify(title),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if(content.error) return content.error;
};

export { newSiteTitleApi };