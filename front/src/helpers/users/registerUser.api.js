import { url } from "../utils.helpers.js";

async function registerUserApi(user) {

    const response = await fetch(`${url}/api/user/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if(content.error) return content;
    if(content.data) return content.data;
};

export { registerUserApi };