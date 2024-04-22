import { url } from "../utils.helpers";

async function updPreset(upd) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/event/preset`, {
        method: 'PUT',
        body: JSON.stringify(upd),
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

export { updPreset };