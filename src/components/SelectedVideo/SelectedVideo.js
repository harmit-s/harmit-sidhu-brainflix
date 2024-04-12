import commentIcon from '../../assets/icons/add_comment.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import viewsIcon from '../../assets/icons/views.svg'
import likesIcon from '../../assets/icons/likes.svg'
import { useState, useParams, useEffect } from "react";
import axios from 'axios';

import './SelectedVideo.scss'
import '../../App.scss'

const SelectedVideo = () => {
    const { videoId } = useParams(); 
    const [video, setVideo] = useState(null); 
  
    const fetchVideoDetails = async () => {
      try {
        const apiKey = 'f5a503e0-f571-43cd-9ec6-b29be74dce24'
        const apiUrl = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?apiKey=${apiKey}`;
        const response = await axios.get(apiUrl);
        setVideo(response.data); 
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };
    
    useEffect(() => {
      fetchVideoDetails();
      
    }, [videoId]);
  
    
    if (!video) {
      return <div>Loading...</div>;
    }

    const { title, channel, timestamp, views, likes, description, comments, videoComments } = video;
   

    return (
        <main>
            <section className="selected-video">
                <div className='selected-video__container'>
                    <h1 className='selected-video__title'>{title}</h1>
                    <div className='selected-video__tablet-view'>
                        <section className='selected-video__layout'>
                            <p className='selected-video__channel'>By {channel}</p>
                            <div className='selected-video__views-layout'><img className='selected-video__views-icon' src={viewsIcon} alt='views icon' /> <p className='selected-video__views'>{views}</p></div>
                        </section>
                        <section className='selected-video__layout-2'>
                            <p className='selected-video__timestamp'>{new Date(timestamp).toLocaleDateString()}</p>
                            <div className='selected-video__likes-layout'><img className='selected-video__likes-icon' src={likesIcon} alt='likes icon' /> <p className='selected-video__likes'>{likes}</p></div>
                        </section>
                    </div>
                    <p className='selected-video__description'>{description}</p>

                    <h2 className='selected-video__comments'>{comments} Comments</h2>
                    <section>
                        <div className="selected-video__layout-avatar">
                            <img src={avatar} className='selected-video__avatar' alt='avatar' />
                            <form className="selected-video__form">
                                <div className='selected-video__form-box'>
                                    <label className="selected-video__subtitle">JOIN THE CONVERSATION</label>
                                    <textarea name="comment" type='text' className="selected-video__comment-input" placeholder="Add a new comment" required></textarea>
                                </div>
                                <button className="selected-video__button"><img src={commentIcon} alt='comment icon' className='selected-video__icon' />COMMENT</button>
                            </form>
                        </div>
                    </section>

                    <ul className='selected-video__comment-container'>
                        {videoComments.map(comment => (
                            <li key={comment.id} className="selected-video__comment-item">
                                <div className='selected-video__com-avatar'></div>
                                <div className='selected-video__com-layout'>
                                    <h3 className="selected-video__comment-title">{comment.name}</h3>
                                    <article className="selected-video__comment-para">{comment.comment}</article>
                                    <p className="selected-video__comment-timestamp">{new Date(comment.timestamp).toLocaleDateString()}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main >
    );
};

export default SelectedVideo;
