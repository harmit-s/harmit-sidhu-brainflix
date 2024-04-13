import { Link } from "react-router-dom";
import "./VideoItem.scss";

function VideoItem({ video }) {
  return (
    <li>
      <Link to={`/videos/${video.id}`} className="video-item__link">
        <section className="video-item">
          <img src={video.image} alt={video.title} className="video-item__image" />
          <div className="video-item__info">
            <p className="video-item__title">{video.title}</p>
            <p className="video-item__channel">{video.channel}</p>
          </div>
        </section>
      </Link>
    </li>
  );
}

export default VideoItem;
