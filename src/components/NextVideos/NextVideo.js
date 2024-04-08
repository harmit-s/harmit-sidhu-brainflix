import VideoItem from "../VideoItem/VideoItem";

import './NextVideo.scss'

function NextVideo({ videos, changeVideo }) {
    console.log(videos);
    return (
        <nav className="next-videos">
            <h2 className="next-videos__title">NEXT VIDEOS</h2>
            <ul className="next-videos__list">

                {videos.map((video) => {
                    
                    return (
                        <VideoItem
                            key={video.id}
                            title={video.title} 
                            id={video.id}
                            image={video.image}
                            channel={video.channel}
                            changeVideo={changeVideo}
                        />
                    );
                })}
            </ul>
        </nav>
    );
}

export default NextVideo;
