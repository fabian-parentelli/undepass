import { url } from "../utils.helpers";

async function updTicketApi(ticket, id) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/event/ticket/${id}`, {
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
    if(content.error) return content.error;
};

export { updTicketApi };