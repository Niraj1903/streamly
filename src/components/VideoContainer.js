import VideoCard from "./VideoCard";
import useVideoContainer from "../utils/useVideoContainer";
import { NavLink } from "react-router-dom";

const VideoContainer = () => {
  const videos = useVideoContainer();
  return (
    <>
      <div className="flex flex-wrap">
        {videos.map((item) => (
          <NavLink to={"/watch?v=" + item.id} key={item.id}>
            <VideoCard info={item} />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
