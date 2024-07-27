const Details = ({ title, name, total }) => {
  return (
    <div className="grid grid-cols-12 mt-4">
      <h4 className="col-span-2 text-navyBlue font-bold text-[14px] underline">
        {title}
      </h4>
      {name ? <p className="col-span-10">{name}</p> : ""}
      {total ? (
        <p className="col-span-10 text-navyBlue">
          {" "}
          Male: <span className="font-bold">{total?.male} </span>, Female:{" "}
          <span className="font-bold">{total?.female}</span>, Marginalized:{" "}
          <span className="font-bold">{total?.marginalized} </span>{" "}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
export default Details;
