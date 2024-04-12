import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainVideoPage from "./pages/MainVideo/MainVideo"
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
// import VideoUploadPage from "./pages/VideoDetails/VideoDetails"
import VideoList from "./components/VideoList/VideoList";

import "./styles/partials/globals.scss";
import "./App.scss";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainVideoPage />} />
          <Route path="/videos/:videoId" element={<SelectedVideo />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
        <VideoList />
      </div>
    </BrowserRouter>
  );
}

export default App;
