const DateAndTime = ({
  className,
  type,
  placeholder,
  dateTitle,
  timeTitle,
}) => {
  return (
    <div className={`bg-white p-[6px] rounded-lg ${className}`}>
      <div className="flex flex-row gap-2">
        <div className=" w-full">
          <h6 className="text-base font-light text-navyBlue mb-4 ml-4">
            {dateTitle}
          </h6>
          <input
            type="date"
            placeholder={placeholder}
            className={`bg-lightBlue2 w-full  placeholder:text-blue/70  font-normal text-lg text-blue outline-none  py-2 px-4 rounded-lg`}
            name=""
            id=""
          />
        </div>
        <div className=" w-full">
          <h6 className="text-base font-light text-navyBlue mb-4 ml-4">
            {dateTitle}
          </h6>
          <input
            type="time"
            placeholder={placeholder}
            className={`bg-lightBlue2 w-full  placeholder:text-blue/70  font-normal text-lg text-blue outline-none  py-2 px-4 rounded-lg`}
            name=""
            id=""
          />
        </div>
      </div>
    </div>
  );
};
export default DateAndTime;
