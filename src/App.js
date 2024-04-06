import { useState } from "react";
import Header from "./components/Header/Header";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import videoData from "./data/video-details.json"

import "./styles/partials/globals.scss"

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]); 
    console.log(selectedVideo);

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
      <SelectedVideo
                video={selectedVideo.video} 
                title={selectedVideo.title}
                channel={selectedVideo.channel}
                timestamp={selectedVideo.timestamp.toLocaleString()}
                views={selectedVideo.views}
                likes={selectedVideo.likes}
                description={selectedVideo.description}
                comments={selectedVideo.comments.length}
                videoComments={selectedVideo.comments}
            />

    </div>
  );
}

export default App;
