import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoList from "../../components/VideoList/VideoList";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";

import "./MainVideo.scss";

const MainVideoPage = () => {
  const { videoId } = useParams();
  const [mainVideo, setMainVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const mainVideoResponse = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=f5a503e0-f571-43cd-9ec6-b29be74dce24`
        );
        setMainVideo(mainVideoResponse.data);

        const videoListResponse = await axios.get(
          "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=f5a503e0-f571-43cd-9ec6-b29be74dce24"
        );
        const filteredVideoList = videoListResponse.data.filter(
          (video) => video.id !== videoId
        );
        setVideoList(filteredVideoList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [videoId]);



  return (
    <div className="main-video-page">
      <video className="hero" poster={mainVideo.image} controls><source src={mainVideo.video} /></video>
      <div className="main-video-page__layout">
        {mainVideo && <SelectedVideo video={mainVideo} />}
        <VideoList videos={videoList} />
      </div>
    </div>
  );
};

export default MainVideoPage;
