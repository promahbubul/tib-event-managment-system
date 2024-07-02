import HomeCard from "../../components/Home/Card";
import homecards from "../../constant/homecard.constant";

const Home = () => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 px-10 pt-14 ">
      {homecards.map((card) => (
        <HomeCard
          shadow={card?.shadow}
          title={card?.title}
          status={card?.status}
          key={card.id}
          className={card?.background}
        />
      ))}
    </section>
  );
};
export default Home;
