import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoList from "../../components/VideoList/VideoList";

import "./MainVideo.scss";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";

const MainVideoPage = () => {
  const [mainVideo, setMainVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mainVideoResponse = await axios.get(
          "https://unit-3-project-api-0a5620414506.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=f5a503e0-f571-43cd-9ec6-b29be74dce24"
        );
        setMainVideo(mainVideoResponse.data);

        const videoListResponse = await axios.get(
          "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=f5a503e0-f571-43cd-9ec6-b29be74dce24"
        );
        setVideoList(
          videoListResponse.data.filter(
            (video) => video.id !== mainVideoResponse.data.id
          )
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-video-page">
      <video className="hero" poster={mainVideo.image} controls>
        {video}
      </video>
      <SelectedVideo
        title={mainVideo.title}
        channel={mainVideo.channel}
        timestamp={mainVideo.timestamp}
        description={mainVideo.description}
        views={mainVideo.views}
        likes={mainVideo.likes}
        comments={mainVideo.comments}
        videoComments={mainVideo.videoComments}
      />
      <VideoList videos={videoList} />
    </div>
  );
};

export default MainVideoPage;
