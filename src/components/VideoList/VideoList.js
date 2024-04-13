import VideoItem from "../VideoItem/VideoItem";

import "./VideoList.scss";

function VideoList({ videos }) {
  
  return (
    <nav className="next-videos">
      <h2 className="next-videos__title">NEXT VIDEOS</h2>
      <ul className="next-videos__list">
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </nav>
  );
}

export default VideoList;
