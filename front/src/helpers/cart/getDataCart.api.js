import { url } from "../utils.helpers";

async function getDataCartApi(data) {

    const response = await fetch(`${url}/api/cart/data`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { getDataCartApi };