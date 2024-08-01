import { createContext, useState } from "react";
import allParticipant from "../constant/participants.constant";

export const CreateEventContext = createContext();

const EventContext = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [img1, setImg1] = useState(null);
  const [CCC, setCCC] = useState(allParticipant.ccc);
  const [ACG, setACG] = useState(allParticipant.acg);
  const [YES, setYES] = useState(allParticipant.yes);
  const [extra, setExtra] = useState(allParticipant.extra);
  const [total, setTotal] = useState(allParticipant.total);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

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
    events,
    setEvents,
  };
  return (
    <CreateEventContext.Provider value={values}>
      {children}
    </CreateEventContext.Provider>
  );
};
export default EventContext;
