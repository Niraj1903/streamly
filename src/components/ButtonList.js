import Button from "./Button";

const list = [
  "Cricket",
  "Podcasts",
  "News",
  "Live",
  "Music",
  "Mixes",
  "Watched",
  "New",
  "Films",
  "Guitar",
  "Presentation",
  "Movies",
  "Comedy",
];

const ButtonList = () => {
  return (
    <>
      <div className="flex">
        {list.map((item) => (
          <Button key={item} name={item} />
        ))}
      </div>
    </>
  );
};

export default ButtonList;
