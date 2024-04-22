import { url } from "../utils.helpers";

async function updFlyerApi(upd, id) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/event/flyer/${id}`, {
        method: 'PUT',
        body: upd,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if(content.error) return content.error;
};

export { updFlyerApi };