/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLoaderData } from "react-router-dom";
import HomeCard from "../../components/Home/Card";
import homecards from "../../constant/homecard.constant";
import { useEffect, useState } from "react";

const Home = () => {
  const events = useLoaderData();
  const [education, setEducation] = useState([]);
  const [health, setHealth] = useState([]);
  const [land, setLand] = useState([]);
  const [environment, setEnvironment] = useState([]);


  useEffect(() => {
    setEducation(
      events?.filter((event) => event?.genInfo?.sectorName === "Education")
    );
    setHealth(
      events?.filter((event) => event?.genInfo.sectorName === "Health")
    );
    setLand(events?.filter((event) => event?.genInfo.sectorName === "Land"));
    setEnvironment(
      events?.filter((event) => event?.genInfo.sectorName === "Environment")
    );
  }, []);

  console.log(events);
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 px-10 pt-14 ">
      {homecards?.map((card) => (
        <Link key={card?.id} to={card?.path}>
          <HomeCard
            shadow={card?.shadow}
            title={card?.title}
            status={
              card?.title === "Education"
                ? education.length
                : card?.title === "Health"
                ? health?.length
                : card?.title === "Land"
                ? land?.length
                : card?.title === "Environment"
                ? environment?.length
                : ""
            }
            pp={education}
            className={card?.background}
          />
        </Link>
      ))}
    </section>
  );
};
export default Home;
