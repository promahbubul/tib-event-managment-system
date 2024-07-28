const HomeCard = ({ children, className, shadow, status, title, pp }) => {
  // console.log(pp);
  console.log({ status });
  return (
    <div
      style={{ boxShadow: shadow }}
      className={` ${className} text-white py-10 rounded-lg bg-gradient-to-tr cursor-pointer`}
    >
      <h1 className="text-[40px] text-center font-extrabold ">
        {status ? status : 0}
      </h1>
      <p className="font-normal text-center underline text-xl">{title}</p>
    </div>
  );
};
export default HomeCard;
