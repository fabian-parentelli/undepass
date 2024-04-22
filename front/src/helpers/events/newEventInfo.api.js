import { url } from "../utils.helpers";

async function newEventInfoApi(order) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/event`, {
        method: 'POST',
        body: JSON.stringify(order),
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

export { newEventInfoApi };