import './VideoItem.scss'

function VideoItem({ id, title, channel, image, changeVideo }) {

    return (<li onClick={() => changeVideo(id)}>
        <section className='video-item'>
            <img src={image} alt={title} className="video-item__image" />
            <div className="video-item__info">
                <p className="video-item__title">{title}</p>
                <p className="video-item__channel">{channel}</p>
            </div>
        </section>
    </li>
    );
}

export default VideoItem;
