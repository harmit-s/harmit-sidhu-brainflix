import commentIcon from '../../assets/icons/add_comment.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'
import videoPoster from '../../assets/images/Upload-video-preview.jpg'

import './SelectedVideo.scss'

const SelectedVideo = ({ video, title, channel, timestamp, views, likes, description, comments, videoComments }) => {

    return (
        <main>
            <div className="selected-video">
                <video className="selected-video__video" poster={videoPoster} controls>{video}</video>
                <div className='selected-video__container'>
                    <h2 className='selected-video__title'>{title}</h2>
                    <div className='selected-video__layout'>
                        <p className='selected-video__channel'>By {channel}</p>
                        <div className='selected-video__views-layout'><img className='selected-video__views-icon' src={viewsIcon} alt='views icon' /> <p className='selected-video__views'>{views}</p></div>
                    </div>
                    <div className='selected-video__layout-2'>
                        <p className='selected-video__timestamp'>{new Date(timestamp).toLocaleDateString()}</p>
                        <div className='selected-video__likes-layout'><img className='selected-video__likes-icon' src={likesIcon} alt='likes icon' /> <p className='selected-video__likes'>{likes}</p></div>
                    </div>
                    <p className='selected-video__description'>{description}</p>

                    <h3 className='selected-video__comments'>{comments} Comments</h3>
                    <div>
                        <div className="selected-video__layout-avatar">
                            <img src={avatar} className='selected-video__avatar' alt='avatar' />
                            <form className="selected-video__form">
                                <label className="selected-video__subtitle">JOIN THE CONVERSATION</label>
                                <textarea name="comment" type='text' className="selected-video__comment-input" placeholder="Add a new comment" required></textarea>
                                <button className="selected-video__button"><img src={commentIcon} alt='comment icon' className='selected-video__icon' />COMMENT</button>
                            </form>
                        </div>
                    </div>

                    <ul className='selected-video__comment-container'>
                        {videoComments.map(comment => (
                            <li key={comment.id} className="selected-video__comment-item">
                                <div className='selected-video__com-avatar'></div>
                                <div className='selected-video__com-layout'>
                                    <div className="selected-video__comment-title">{comment.name}</div>
                                    <div className="selected-video__comment-para">{comment.comment}</div>
                                    <div className="selected-video__comment-timestamp">{new Date(comment.timestamp).toLocaleDateString()}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main >
    );
};

export default SelectedVideo;
