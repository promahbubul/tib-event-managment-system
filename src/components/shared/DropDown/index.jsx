import { useContext } from "react";
import { CreateEventContext } from "../../../context/EventContext";

const DropDown = ({
  className,
  options,
  title,
  itemName,
  value,
  inputClass,
}) => {
  const { handleFilterEvents } = useContext(CreateEventContext);

  return (
    <div className={`bg-white  rounded-lg p-[6px] ${className}`}>
      {title && (
        <h6 className="text-base font-light text-navyBlue mb-4 ml-4">
          {title}
        </h6>
      )}
      <select
        onChange={(e) => handleFilterEvents({ [itemName]: e.target.value })}
        className={` w-full cursor-pointer font-normal text-lg text-blue outline-none  rounded-lg ${
          inputClass ? inputClass : "py-2 px-4 bg-lightBlue2"
        }`}
        name={itemName}
        defaultValue={value}
        id=""
      >
        <option value="" className="">
          Select
        </option>
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
