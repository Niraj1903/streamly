import VideoCard from "./VideoCard";
import useVideoContainer from "../utils/useVideoContainer";

const VideoContainer = () => {
  const videos = useVideoContainer();
  return (
    <>
      <div className="flex flex-wrap">
        {videos.map((item) => (
          <VideoCard key={videos.id} info={item} />
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
