import { useState } from "react";
import Header from "./components/Header/Header";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import NextVideo from "./components/NextVideos/NextVideo";
import videoData from "./data/video-details.json"

import "./styles/partials/globals.scss"
import "./App.scss"

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  function handleSelect(clickedId) {

    const foundVideo = videoData.find((video) => {
      if (clickedId === video.id) {
        return true;
      } else {
        return false;
      }
    });

    setSelectedVideo(foundVideo);
  }

  const filteredVideo = videoData.filter((video) => {
    return video.id !== selectedVideo.id;
  });

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SelectedVideo className='main'
          video={selectedVideo.video}
          title={selectedVideo.title}
          channel={selectedVideo.channel}
          timestamp={selectedVideo.timestamp}
          views={selectedVideo.views}
          likes={selectedVideo.likes}
          description={selectedVideo.description}
          comments={selectedVideo.comments.length}
          videoComments={selectedVideo.comments}
        />
        <NextVideo className='nav' videos={filteredVideo} changeVideo={handleSelect} />
      </div>
    </div>
  );
}

export default App;
