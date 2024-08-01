import generalInformation from "../../../constant/generalInformation.constant";
import { DropDown } from "../../shared";

const EventFilter = () => {
  // handle report filter
  const handleFormSubmit = (e) => {
    console.log(e);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      action=""
      className=" bg-[#E3E3E8] overflow-auto"
    >
      <div className="grid grid-cols-12 mt-4 gap-2">
        <DropDown
          options={generalInformation?.ccc}
          className={"col-span-4"}
          title={"Name of CCC:"}
          itemName={"cccName"}
        />
        <DropDown
          options={generalInformation?.ccc}
          className={"col-span-4"}
          title={"Name of Cluster:"}
          itemName={"cccName"}
        />
        <DropDown
          options={generalInformation?.ccc}
          className={"col-span-4"}
          title={"Sector:"}
          itemName={"cccName"}
        />
        <DropDown
          options={generalInformation?.ccc}
          className={"col-span-9"}
          title={"Name of Event:"}
          itemName={"cccName"}
        />
        <DropDown
          options={generalInformation?.ccc}
          className={"col-span-3"}
          title={"Year:"}
          itemName={"cccName"}
        />
      </div>
    </form>
  );
};
export default EventFilter;
