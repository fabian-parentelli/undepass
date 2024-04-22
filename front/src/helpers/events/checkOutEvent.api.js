import { url } from "../utils.helpers";

async function checkOutEventApi(ticket, id) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/event/checkout/${id}`, {
        method: 'PUT',
        body: JSON.stringify(ticket),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { checkOutEventApi };