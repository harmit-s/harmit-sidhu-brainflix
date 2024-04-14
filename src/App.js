import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainVideoPage from "./pages/MainVideo/MainVideo"
import VideoUploadPage from "./pages/VideoUpload/VideoUpload";

import "./styles/partials/globals.scss";
import "./App.scss";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainVideoPage />} />
          <Route path="/videos/:videoId" element={<MainVideoPage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
