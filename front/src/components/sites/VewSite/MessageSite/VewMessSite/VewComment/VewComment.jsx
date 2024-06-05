import './vewComment.scss';

const VewComment = ({ comments }) => {

    return (
        <div className='vewComment'>
            {comments && comments.map((com, index) => (
                com.active && (
                    <div
                        key={index} className='vewCommentMess'
                        style={com.type === 'owner' ? { backgroundColor: '#6f7357' } : {}}
                    >
                        <img
                            src={com.avatar}
                            alt="img"
                            style={com.type === 'guest' ? { backgroundColor: 'black' } : {}}
                        />
                        <div>
                            <p className='vewCommentName'>{com.userName} dijo:</p>
                            <p>{com.message}</p>
                            <p className='vewCommentDate'>{com.date}</p>
                        </div>
                    </div>
                )
            ))}
        </div >
    );
};

export default VewComment;