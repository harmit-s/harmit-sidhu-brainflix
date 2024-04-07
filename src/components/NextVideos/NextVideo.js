import VideoItem from "../VideoItem/VideoItem";

function NextVideo({ videos, changeVideo }) {
    console.log(videos);
    return (
        <nav className="next-videos">
            <h2 className="next-videos__title">NEXT VIDEOS</h2>
            <ul className="nexit-videos__list">
                {/* map alllows us to iterate over 'plants', the props we received, which is our JSON list */}
                {videos.map((video) => {
                    //--        ^   represents each object in the plants json array, iterated over
                    //--             since this is iterated, <PlantItem /> gets created as many times as there are objects in the json array

                    return (
                        <VideoItem
                            key={video.id}
                            name={video.name} // since plant is an iterated object we have access to dot notation for the properties
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
