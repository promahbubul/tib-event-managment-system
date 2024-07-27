const StatisticsForm = ({ title }) => {
  return (
    <div className="">
      <h2 className="text-center border-b pb-2 border-b-blue font-bold text-base text-[#003ED3]">
        {title}
      </h2>
      <div className="grid grid-cols-12 mt-2 gap-8 ">
        {/* Male */}
        <div className="col-span-2  text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Male:
          </label>
          <input
            type="number"
            name="male"
            defaultValue={0}
            id="male"
            className="py-3 px-5 rounded-lg border-none outline-none bg-lightBlue2 w-full text-center"
          />
        </div>
        {/* Female */}
        <div className="col-span-2  text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Female:
          </label>
          <input
            type="number"
            name="male"
            defaultValue={0}
            id="male"
            className="py-3 px-5 rounded-lg border-none outline-none bg-lightBlue2 w-full text-center"
          />
        </div>
        {/* Marginalized */}
        <div className="col-span-3  text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Marginalized:
          </label>
          <input
            type="number"
            name="male"
            id="male"
            defaultValue={0}
            className="py-3 px-5 rounded-lg border-none outline-none bg-lightBlue2 w-full text-center"
          />
        </div>
        {/* Total */}
        <div className="col-span-5 pl-20   text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Total:
          </label>
          <p className="py-3 px-5 rounded-lg border-none outline-none text-[#FEFEFF] bg-[#2C54AE] w-full text-center">
            25
          </p>
        </div>
      </div>
    </div>
  );
};
export default StatisticsForm;
