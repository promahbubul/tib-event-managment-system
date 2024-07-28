import { useReducer } from "react";
import reducer from "../../../reducer/StaticsFormReducer";
import { FEMALE, MALE, MARGINALIZED } from "../../../reducer/StaticsFormAction";

const initialState = {
  male: 0,
  female: 0,
  marginalized: 0,
  total: 0,
};

const StatisticsForm = ({ title, participateData, value }) => {
  const [participant, dispatch] = useReducer(
    reducer,
    value ? value : initialState
  );

  participateData && participateData(participant);

  return (
    <div className="">
      <h2 className="text-center border-b pb-2 border-b-blue font-bold text-base text-[#003ED3]">
        {title}
      </h2>
      <form className="grid grid-cols-12 mt-2 gap-8 ">
        {/* Male */}
        <div className="col-span-2  text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Male:
          </label>
          <input
            onChange={(e) =>
              dispatch({ type: MALE, value: parseInt(e.target.value) })
            }
            type="number"
            defaultValue={participant.male}
            name="male"
            id="male"
            className="py-3 px-5 rounded-lg border-none outline-none bg-lightBlue2 w-full text-center"
          />
        </div>
        {/* Female */}
        <div className="col-span-2  text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Female:
          </label>
          <input
            onChange={(e) =>
              dispatch({ type: FEMALE, value: parseInt(e.target.value) })
            }
            type="number"
            name="female"
            defaultValue={participant.female}
            id="female"
            className="py-3 px-5 rounded-lg border-none outline-none bg-lightBlue2 w-full text-center"
          />
        </div>
        {/* Marginalized */}
        <div className="col-span-3  text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Marginalized:
          </label>
          <input
            onChange={(e) =>
              dispatch({ type: MARGINALIZED, value: parseInt(e.target.value) })
            }
            type="number"
            defaultValue={0}
            name="marginalized"
            id="marginalized"
            className="py-3 px-5 rounded-lg border-none outline-none bg-lightBlue2 w-full text-center"
          />
        </div>
        {/* Total */}
        <div className="col-span-5 pl-20   text-navyBlue flex flex-row items-center gap-4">
          <label htmlFor="" className="text-base font-light">
            Total:
          </label>
          <p
            id="total"
            className="py-3 px-5 rounded-lg border-none outline-none text-[#FEFEFF] bg-[#2C54AE] w-full text-center"
          >
            {participant.total}
          </p>
        </div>
      </form>
    </div>
  );
};
export default StatisticsForm;
