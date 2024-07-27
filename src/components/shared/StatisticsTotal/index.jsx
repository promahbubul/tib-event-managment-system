const StatisticsTotal = ({ title, total }) => {
  return (
    <div className="mb-3">
      <h2 className="text-center border-b pb-2 border-b-blue  font-bold text-base text-[#003ED3]">
        {title}
      </h2>
      <div className="grid grid-cols-12 mt-2 gap-8 ">
        {/* Male */}
        <div className="col-span-2  text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Male:
          </label>
          <span
            type="number"
            name="male"
            defaultValue={0}
            id="male"
            className="py-3 px-5 rounded-lg border-none text-lg font-bold outline-none text-[#2C54AE] w-full text-center"
          >
            {total?.male}
          </span>
        </div>
        {/* Female */}
        <div className="col-span-2  text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Female:
          </label>
          <span
            type="number"
            name="male"
            defaultValue={0}
            id="male"
            className="py-3 px-5 rounded-lg border-none text-lg font-bold outline-none text-[#2C54AE] w-full text-center"
          >
            {total?.female}
          </span>
        </div>
        {/* Marginalized */}
        <div className="col-span-3  text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Marginalized:
          </label>
          <span
            type="number"
            name="male"
            defaultValue={0}
            id="male"
            className="py-3 px-5 rounded-lg border-none text-lg font-bold outline-none text-[#2C54AE] w-full text-center"
          >
            {total?.marginalized}
          </span>
        </div>
        {/* Total */}
        <div className="col-span-5 pl-20   text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Total:
          </label>
          <span
            type="number"
            name="male"
            defaultValue={0}
            id="male"
            className="py-3 px-5 rounded-lg border-none text-lg font-bold outline-none text-[#2C54AE] w-full text-center"
          >
            {total?.total}
          </span>
        </div>
      </div>
    </div>
  );
};
export default StatisticsTotal;
