const DropDown = ({
  className,
  options,
  title,
  itemName,
  value,
  inputClass,
}) => {
  return (
    <div className={`bg-white  rounded-lg p-[6px] ${className}`}>
      {title && (
        <h6 className="text-base font-light text-navyBlue mb-4 ml-4">
          {title}
        </h6>
      )}
      <select
        className={` w-full cursor-pointer font-normal text-lg text-blue outline-none  rounded-lg ${
          inputClass ? inputClass : "py-2 px-4 bg-lightBlue2"
        }`}
        name={itemName}
        defaultValue={value}
        id=""
      >
        {options?.map((item, index) => (
          <option key={index} className="">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;
