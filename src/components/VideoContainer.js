import VideoCard from "./VideoCard";
import useVideoContainer from "../utils/useVideoContainer";

const VideoContainer = () => {
  const videos = useVideoContainer();
  return (
    <>
      <div className="flex">
        {videos.map((item) => (
          <VideoCard info={item} />
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
