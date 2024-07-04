const DropDown = ({ className, options, title }) => {
  return (
    <div className={`bg-white p-[6px] rounded-lg ${className}`}>
      <h6 className="text-base font-light text-navyBlue mb-4 ml-4">{title}</h6>
      <select
        className={`bg-lightBlue2 w-full cursor-pointer font-normal text-lg text-blue outline-none py-2 px-4 rounded-lg`}
        name=""
        id=""
      >
        {options?.map((item, index) => (
          <option key={index} className="" value="">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;
