import { Link } from "react-router-dom";
import generalInformation from "../../../constant/generalInformation.constant";
import { DropDown } from "../../shared";
import pdfLogo from "../../../assets/images/gif/pdf.gif";
import homecards from "../../../constant/homecard.constant";
import { useContext } from "react";
import EventContext, {
  CreateEventContext,
} from "../../../context/EventContext";

const EventFilter = () => {
  const { handleFilterEvents } = useContext(CreateEventContext);

  const handleFormSubmit = (e) => {
    console.log(e);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      action=""
      className="bg-[#E3E3E8] overflow-auto"
    >
      <div className="grid grid-cols-12 mt-4 gap-2">
        <DropDown
          options={generalInformation?.cluster}
          className={"col-span-4"}
          title={"Name of Cluster:"}
          itemName={"clusterName"}
        />
        <DropDown
          options={generalInformation?.ccc}
          className={"col-span-4"}
          title={"Name of CCC:"}
          itemName={"cccName"}
        />
        <DropDown
          options={homecards.map((event) => event.title)}
          className={"col-span-4"}
          title={"Sector:"}
          itemName={"sectorName"}
        />
        <DropDown
          options={generalInformation.nameEvent}
          className={"col-span-6"}
          title={"Name of Event:"}
          itemName={"eventName"}
        />
        <DropDown
          options={generalInformation?.year}
          className={"col-span-3"}
          title={"Year:"}
          itemName={"year"}
        />
        <DropDown
          options={generalInformation?.month}
          className={"col-span-2"}
          title={"Month:"}
          itemName={"month"}
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
