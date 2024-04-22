import { url } from "../utils.helpers.js";

async function getProvincesApi() {

    const response = await fetch(`${url}/api/city`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    if(content.data) return content.data;
    if(content.error) return content.error;
};

export { getProvincesApi };