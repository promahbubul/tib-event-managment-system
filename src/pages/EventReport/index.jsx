import { useLoaderData } from "react-router-dom";
import { EventFilter, EventList } from "../../components/EventReport";
import { useContext } from "react";
import { CreateUserContext } from "../../context/UserContext";

const EventReport = () => {
  const eventsData = useLoaderData();
  const { user, events, setEvents } = useContext(CreateUserContext);

  return (
    <div className="border-2 p-4 bg-[#E3E3E8] h-full overflow-auto ">
      <EventFilter />
      <EventList events={eventsData} />
    </div>
  );
};
export default EventReport;
