import { createContext, useEffect, useState } from "react";
import allParticipant from "../constant/participants.constant";

export const CreateEventContext = createContext();

const EventContext = ({ children }) => {
  const [eventData, setEventData] = useState([]);
  const [filterEvents, setFilterEvents] = useState({});
  const [img1, setImg1] = useState(null);
  const [CCC, setCCC] = useState(allParticipant.ccc);
  const [ACG, setACG] = useState(allParticipant.acg);
  const [YES, setYES] = useState(allParticipant.yes);
  const [extra, setExtra] = useState(allParticipant.extra);
  const [total, setTotal] = useState(allParticipant.total);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const handleFilterEvents = (eventField) => {
    const filterData = { ...filterEvents, ...eventField };
    setFilterEvents(filterData);

    fetch("http://localhost:5000/api/v1/filter-event", {
      method: "POST",
      body: JSON.stringify(filterData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setEventData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/events")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEventData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const values = {
    img1,
    CCC,
    ACG,
    YES,
    extra,
    total,
    setImg1,
    setCCC,
    setACG,
    setYES,
    setExtra,
    setTotal,
    image1,
    image2,
    image3,
    setImage1,
    setImage2,
    setImage3,
    eventData,
    setEventData,
    handleFilterEvents,
  };
  return (
    <CreateEventContext.Provider value={values}>
      {children}
    </CreateEventContext.Provider>
  );
};
export default EventContext;
