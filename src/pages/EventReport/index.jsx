import { useLoaderData } from "react-router-dom";
import { EventFilter, EventList } from "../../components/EventReport";

const EventReport = () => {
  const events = useLoaderData();

  console.log(events);
  return (
    <div className="border-2 py-7 px-4 bg-[#E3E3E8] h-full overflow-auto ">
      <EventFilter />
      <EventList events={events} />
    </div>
  );
};
export default EventReport;
