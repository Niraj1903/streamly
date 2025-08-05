import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((item) => item.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <>
      <div className="shadow-xl w-48">
        <ul className="">
          <li className="">Home</li>
          <li className="">Sports</li>
          <li className="">Video</li>
          <li className="">Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul className="">
          <li className="">Music</li>
          <li className="">Sports</li>
          <li className="">Gaming</li>
          <li className="">Movies</li>
        </ul>

        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul className="">
          <li className="">Music</li>
          <li className="">Sports</li>
          <li className="">Gaming</li>
          <li className="">Movies</li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
