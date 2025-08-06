import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./contants";

const useVideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return videos;
};

export default useVideoContainer;
