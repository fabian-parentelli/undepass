import './messageSite.scss';
import { useEffect, useState } from 'react';
import WriteMessSite from './WriteMessSite/WriteMessSite';
import { useLoginContext } from '../../../../context/LoginContext';
import VewMessSite from './VewMessSite/VewMessSite';

const MessageSite = ({ values, setLoading }) => {

    const { user } = useLoginContext();
    const [comments, setComments] = useState([]);
    const [writer, setWriter] = useState({ userId: '', message: '', type: '', siteId: values._id });

    useEffect(() => {
        if (user.data) {
            if (values.userId === user.data._id) {
                setWriter({...writer, userId: user.data._id, type: 'owner' });
            } else setWriter({...writer, userId: user.data._id, type: 'user' });
        } else setWriter({...writer, type: 'guest'});
    }, []);

    return (
        <div className='messageSite' id='messageSite'>
            {writer.type && 
                <WriteMessSite 
                    user={user.data} 
                    writer={writer} 
                    setWriter={setWriter} 
                    setLoading={setLoading}
                    setComments={setComments} 
                />
            }
            <VewMessSite 
                siteId={values._id} 
                comments={comments}
                setComments={setComments}
            />
        </div>
    );
};

export default MessageSite;