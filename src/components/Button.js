const Button = ({ name }) => {
  return (
    <>
      <div className="">
        <button className="px-5 py-1 m-2 text-black font-semibold bg-gray-300 hover:bg-black hover:text-white rounded-lg">
          {name}
        </button>
      </div>
    </>
  );
};

export default Button;
