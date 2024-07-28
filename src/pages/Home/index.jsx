/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from "react-router-dom";
import HomeCard from "../../components/Home/Card";
import homecards from "../../constant/homecard.constant";
import { useEffect, useState } from "react";

const Home = () => {
  const events = useLoaderData();
  const [education, setEducation] = useState([]);
  const [health, setHealth] = useState([]);
  const [land, setLand] = useState([]);
  const [environment, setEnvironment] = useState([]);
  // const [education, setEducation] = useState()
  // const [education, setEducation] = useState();

  useEffect(() => {
    setEducation(
      events.filter((event) => event?.genInfo.sectorName === "Education")
    );
    setHealth(events.filter((event) => event?.genInfo.sectorName === "Health"));
    setLand(events.filter((event) => event?.genInfo.sectorName === "Land"));
    setEnvironment(
      events.filter((event) => event?.genInfo.sectorName === "Environment")
    );
  }, []);
  // console.log({
  //   education,
  //   health,
  //   land,
  //   environment,
  // });

  // console.log(events.filter((item) => item.genInfo.sectorName === ));
  // console.log( == "Education");
  console.log(education);
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 px-10 pt-14 ">
      {homecards?.map((card) => (
        <HomeCard
          shadow={card?.shadow}
          title={card?.title}
          status={
            card.title === "Education"
              ? education.length
              : card.title === "Health"
              ? health.length
              : card.title === "Land"
              ? land.length
              : card.title === "Environment"
              ? environment.length
              : ""
          }
          pp={education}
          key={card.id}
          className={card?.background}
        />
      ))}
    </section>
  );
};
export default Home;
