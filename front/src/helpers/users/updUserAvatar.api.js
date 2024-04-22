import { url } from "../utils.helpers.js";

async function updUserAvatar(id, userId) {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/user/avatar/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(id),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { updUserAvatar };