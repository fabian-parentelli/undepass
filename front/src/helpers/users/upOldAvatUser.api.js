import { url } from "../utils.helpers.js";

async function updOldAvatUserApi(avat, id) {

    const token = localStorage.getItem('token');
    const response = await fetch(`${url}/api/user/old_avatar/${id}`, {
        method: 'PUT',
        body: JSON.stringify(avat),
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

export { updOldAvatUserApi };