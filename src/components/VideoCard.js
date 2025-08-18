const VideoCard = ({ info }) => {
  if (!info) return null; //early return
  const { snippet, statistics } = info;
  const { thumbnails, title } = snippet;
  const { likeCount } = statistics;
  return (
    <>
      <div className="m-2 w-72 shadow-lg rounded-lg">
        <img
          className="rounded-lg"
          alt="ThumbNail"
          src={thumbnails.medium.url}
        />
        <h4 className="font-bold mt-1">{title}</h4>
        <p className="">{likeCount}</p>
      </div>
    </>
  );
};

export default VideoCard;
