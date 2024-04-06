import commentIcon from '../../assets/icons/add_comment.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'

const SelectedVideo = ({ video, title, channel, timestamp, views, likes, description, comments, videoComments }) => {

    return (
        <main>
            <div className="selected-video">
                <video>{video}</video>
                <h2>{title}</h2>
                <p>{channel}</p>
                <p>{timestamp}</p>
                <p>{views}</p>
                <p>{likes}</p>
                <p>{description}</p>

                <h3>({comments}) Comments</h3>
                <div>
                    <div class="selected-video__layout">
                        <img src={avatar} className='selected-video__avatar' alt='avatar' />
                        <form class="selected-video__form">
                            <label className="selected-video__subtitle">Join the Conversation</label>
                            <input name="comment" class="selected-video__comment-input" placeholder="Add a new comment" required></input>
                            <button class="comment-section__button"><img src={commentIcon} alt='comment icon' className='selected-video__icon' />COMMENT</button>
                        </form>
                    </div>
                </div>

                <ul>
                    {videoComments.map(comment => (
                        <li key={comment.id}>
                            {comment.name} {comment.comment} ({new Date(comment.timestamp).toLocaleString()})
                        </li>
                    ))}
                </ul>
            </div>
        </main >
    );
};

export default SelectedVideo;
