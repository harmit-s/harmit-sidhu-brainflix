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

        if (videoId) {
          const mainVideoResponse = await axios.get(
            `http://localhost:8080/videos/${videoId}`
          );
          setMainVideo(mainVideoResponse.data);


          const videoListResponse = await axios.get(
            "http://localhost:8080/videos/"
          );
          const filteredVideoList = videoListResponse.data.filter(
            (video) => video.id !== videoId
          );
          setVideoList(filteredVideoList);
        } else {

          const defaultVideoResponse = await axios.get(
            "http://localhost:8080/videos/84e96018-4022-434e-80bf-000ce4cd12b8"
          );
          setMainVideo(defaultVideoResponse.data);

          const videoListResponse = await axios.get(
            "http://localhost:8080/videos/"
          );
          const filteredVideoList = videoListResponse.data.filter(
            (video) => video.id !== defaultVideoResponse.data.id
          );
          setVideoList(filteredVideoList);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [videoId]);

  return (
    <div className="main-video-page">
      {mainVideo && (
        <video className="hero" poster={mainVideo.image} controls><source src={mainVideo.video} /></video>
      )}
      <div className="main-video-page__layout">
        {mainVideo && <SelectedVideo video={mainVideo} />}
        <VideoList videos={videoList} />
      </div>
    </div>
  );
};

export default MainVideoPage;
