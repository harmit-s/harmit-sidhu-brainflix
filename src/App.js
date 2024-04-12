import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainVideoPage from "./pages/MainVideo/MainVideo"
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import VideoUploadPage from "./pages/VideoDetails/VideoDetails"
import NextVideo from "./components/NextVideos/NextVideo";
import Hero from "./components/Hero/Hero";

import "./styles/partials/globals.scss";
import "./App.scss";

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
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<MainVideoPage />} />
          <Route path="/videos/:videoId" element={<SelectedVideo />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
        <NextVideo
          className="nav"
          videos={filteredVideo}
          changeVideo={handleSelect}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
