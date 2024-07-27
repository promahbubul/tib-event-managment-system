const TextArea = ({ className, type, placeholder, title, row, itemName }) => {
  return (
    <div className={`bg-white p-[6px] rounded-lg ${className}`}>
      <h6 className="text-base font-light text-navyBlue mb-4 ml-4">{title}</h6>
      <textarea
        type={type ? type : "text"}
        placeholder={placeholder}
        className={`bg-lightBlue2 w-full  placeholder:text-blue/70  font-normal text-lg text-blue outline-none  py-2 px-4 rounded-lg ${row}`}
        name={itemName}
        id=""
      />
    </div>
  );
};
export default TextArea;
