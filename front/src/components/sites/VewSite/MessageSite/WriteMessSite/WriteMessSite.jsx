import './writeMessSite.scss';
import WriteGuest from "./WriteGuest/WriteGuest";
import WriteOwner from "./WriteOwner/WriteOwner";
import SendIcon from '@mui/icons-material/Send';
import { newCommentApi } from '../../../../../helpers/comments/newComment.api.js';
import { useRef } from 'react';
import { getBySiteIdApi } from '../../../../../helpers/comments/getBySiteId.api.js';

const WriteMessSite = ({ user, writer, setWriter, setLoading, setComments }) => {

    const handleChange = (e) => setWriter({ ...writer, message: e.target.value });
    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await newCommentApi(writer);
        if (response.status === 'success') {
            formRef.current.reset();
            const comments = await getBySiteIdApi(writer.siteId);
            setComments(comments.result);
        };
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="writeMessSite" ref={formRef}>
            {writer && writer.type !== 'guest'
                ? <WriteOwner user={user} handleChange={handleChange} />
                : <WriteGuest handleChange={handleChange} />
            }
            <button className='messageSiteBtn'><SendIcon /></button>
        </form>
    );
};

export default WriteMessSite;