import { Link } from "react-router-dom";
import generalInformation from "../../../constant/generalInformation.constant";
import { DropDown } from "../../shared";
import pdfLogo from "../../../assets/images/gif/pdf.gif";

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
          className={"col-span-8"}
          title={"Name of Event:"}
          itemName={"cccName"}
        />
        <DropDown
          options={generalInformation?.ccc}
          className={"col-span-3"}
          title={"Year:"}
          itemName={"cccName"}
        />
        <Link
          target="_blank"
          className="col-span-1 border-2 border-red- shadow-inner rounded-2xl  shadow-LightBlue   hover:shadow-sky-600 ease-in-out transition-all delay-300"
          to={"/event/view-all"}
        >
          <img src={pdfLogo} alt="" className="" />
        </Link>
      </div>
    </form>
  );
};
export default EventFilter;
