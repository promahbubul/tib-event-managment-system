const StatisticsForm = () => {
  return (
    <div>
      <h2 className="">CCC</h2>
      <div className="grid grid-cols-12 border-2">
        {/* Male */}
        <div className="col-span-2 border-2">
          <label htmlFor="" className="">
            Male:
          </label>
          <input type="number" name="male" id="male" />
        </div>
      </div>
    </div>
  );
};
export default StatisticsForm;
