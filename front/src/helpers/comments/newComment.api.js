import { url } from "../utils.helpers";

async function newCommentApi(comment) {

    const response = await fetch(`${url}/api/comment`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const content = await response.json();
    if (content.data) return content.data;
    if (content.error) return content.error;
};

export { newCommentApi };