import moment from "moment";
// import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaPen, FaTrash } from "react-icons/fa";
import { PiEyeFill } from "react-icons/pi";
import Details from "./Details";
import { useState } from "react";
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
  const [eventData, setEventData] = useState(events);
  const handleDeleteEvent = (id) => {
    fetch(`http://localhost:5000/api/v1/event/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const newEventList = eventData.filter((event) => event._id !== id);
          setEventData(newEventList);
          console.log(newEventList);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" justify-between gap-2 mt-3">
      {/* Heading */}
      <div className="bg-[#2C54AE] text-white gap-2 py-4 px-7 text-lg font-normal rounded-md shadow-md shadow-black grid grid-cols-12 ">
        <h3 className="col-span-2 ">Event Date</h3>
        <h3 className="col-span-4 ">Name of Event</h3>
        <h3 className="col-span-4 ">Sub-sector</h3>
        <h3 className="col-span-2   text-right">Actions</h3>
      </div>
      {/* Event Table */}
      <div className="flex flex-col gap-0.5 mt-3 ">
        {eventData?.map((event) => (
          <div className=" bg-white py-2 px-5 relative ">
            <input
              type="checkbox"
              name="dropdown"
              id="dropdown"
              className="peer/dropdown absolute z-0 inset-y-0 inset-x-0 bg-orange-500 border-2 opacity-0 border-red-500   "
            />
            {/* <input
              type="checkbox"
              name="dropdown"
              id="dropdown"
              className="absolute right-6 text-2xl  top-3 z-40  cursor-pointer peer/dropdown"
            /> */}
            {/* row */}
            <div
              key={event?._id}
              className="grid grid-cols-12 rounded-sm text-[14px] text-navyBlue    items-center justify-between"
            >
              <p className="col-span-2">
                {/* 12-Apr-2024 */}
                {moment(event?.genInfo?.startEventDate).format("DD-MMMM-YYYY")}
              </p>
              <p className="col-span-4">{event?.genInfo?.eventName}</p>
              <p className="col-span-4 flex flex-row items-center">
                {event?.genInfo?.subSectorName}
              </p>
              <div className="col-span-2 text-right  relative z-10 justify-end flex flex-row items-center gap-5">
                <Link to={`/dashboard/event/edit/${event?._id}`}>
                  <FaPen className="text-lg text-green cursor-pointer" />
                </Link>
                <PiEyeFill className="text-lg text-LightBlue cursor-pointer" />
                <FaTrash
                  onClick={() => handleDeleteEvent(event?._id)}
                  className="text-lg text-red-500 cursor-pointer"
                />
                {/* <BsFillPlusSquareFill className="text-lg text-blue4 cursor-pointer " /> */}
              </div>
            </div>
            <div className="hidden z-50  relative mt-3 peer-checked/dropdown:block peer-checked/publish:block">
              {/* Name of Issues */}
              <Details
                name={event?.programDetails?.issuesName}
                title={"Name of raised issues:"}
              />
              <Details
                name={event?.programDetails?.issuesName}
                title={"Objective of the event:"}
              />
              <Details
                total={event?.participants?.total}
                title={"Total Participants::"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EventList;
