import { useState } from "react";
import {
  DateAndTime,
  DropDown,
  InputField,
  InputFile,
  SectionHeading,
  TextArea,
} from "../../components/shared";
import generalInformation from "../../constant/generalInformation.constant";
import StatisticsForm from "../../components/shared/StatisticsForm";
import StatisticsTotal from "../../components/shared/StatisticsTotal";

const EventForm = () => {
  const [img1, setImg1] = useState(null);
  return (
    <form action="" className="p-4 bg-[#E3E3E8] h-full overflow-auto">
      <SectionHeading>General Information</SectionHeading>
      <div className="grid mb-6 grid-cols-12 mt-4 gap-4">
        <DropDown
          options={generalInformation?.ccc}
          className={"col-span-4"}
          title={"Name of CCC:"}
        />
        <DropDown
          options={generalInformation?.initiative}
          className={"col-span-4"}
          title={"Type of initiative"}
        />
        <DropDown
          options={generalInformation?.cluster}
          className={"col-span-4"}
          title={"Name of Cluster"}
        />
        <DropDown
          options={generalInformation?.nameEvent}
          className={"col-span-4"}
          title={"Name of Event"}
        />
        <DropDown
          options={generalInformation?.sector}
          className={"col-span-3"}
          title={"Sector:"}
        />
        <DropDown
          options={generalInformation?.subSector}
          className={"col-span-5"}
          title={"Sub-sector:"}
        />
        <InputField
          className={"col-span-6"}
          title={"Name of vanue"}
          placeholder={"Enter your venue location"}
        />
        <InputField
          className={"col-span-6"}
          title={"Meeting with whom"}
          placeholder={"Enter you authority name "}
        />
        <DateAndTime
          className={"col-span-6"}
          dateTitle={"Event start date:"}
          timeTitle={"Start Time:"}
        />
        <DateAndTime
          className={"col-span-6"}
          dateTitle={"Event end date:"}
          timeTitle={"Start Time:"}
        />
      </div>
      <SectionHeading>Program details</SectionHeading>
      <div className="grid grid-cols-12 mt-4 gap-4">
        <TextArea
          row={"h-28"}
          className={"col-span-6"}
          title={"Objectives of events:"}
          placeholder={"Write event objectives"}
        />
        <TextArea
          row={"h-28"}
          className={"col-span-6"}
          title={"Major actions of the events:"}
          placeholder={"Write here major actions"}
        />
        <TextArea
          row={"h-20"}
          className={"col-span-6"}
          title={"Participant Type: (external / internal)"}
          placeholder={"Write here  type of participant"}
        />
        <TextArea
          row={"h-20"}
          className={"col-span-6"}
          title={"Chief  guest (if any)"}
          placeholder={"Write here designation"}
        />
        <TextArea
          row={"h-20"}
          className={"col-span-6"}
          title={"Chairperson (if any)"}
          placeholder={"Write here designation"}
        />

        <TextArea
          row={"h-20"}
          className={"col-span-6"}
          title={"Immediate results (if any)"}
          placeholder={"Write here if any"}
        />
        <TextArea
          row={"h-28"}
          className={"col-span-12"}
          title={"Name of raised issues:"}
          placeholder={"Write here name of all issues"}
        />
        <TextArea
          row={"h-16"}
          className={"col-span-4"}
          title={"Name of addressed issues:"}
          placeholder={"Write here name of all issues"}
        />
        <TextArea
          row={"h-16"}
          className={"col-span-4"}
          title={"Lessons learned (if any):"}
          placeholder={"Write here what you learned"}
        />
        <TextArea
          row={"h-16"}
          className={"col-span-4"}
          title={"Challenges (if any):"}
          placeholder={"Write here what challenges face"}
        />
        <TextArea
          row={"h-28"}
          className={"col-span-12"}
          title={"Additional information / Short brief of the event:"}
          placeholder={"Write here additional information"}
        />
      </div>
      <SectionHeading>Photographs</SectionHeading>
      <div className="grid grid-cols-12 mt-4 gap-4">
        <InputFile
          name={"img1"}
          setImg={setImg1}
          img={img1}
          className={"col-span-4"}
        />
        <InputFile className={"col-span-4"} />
        <InputFile className={"col-span-4"} />
      </div>
      <SectionHeading>Participants</SectionHeading>
      <div className=" bg-white rounded-lg p-2 mt-2 ">
        <h4 className="text-base col-span-12 text-[#02042F] pl-5 font-light mb-4">
          Internal (Core actors)
        </h4>
        <div className="flex flex-col gap-3">
          <StatisticsForm title={"CCC"} />
          <StatisticsForm title={"ACG"} />
          <StatisticsForm title={"YES"} />
        </div>
      </div>
      <div className=" bg-white rounded-lg p-2 mt-2 ">
        <h4 className="text-base col-span-12 text-[#02042F] pl-5 font-light mb-4">
          External (Direct other participants)
        </h4>
        <div className="">
          <StatisticsForm />
        </div>
      </div>
      <div className=" bg-white rounded-lg p-2 mt-2 ">
        <h4 className="text-base col-span-12 text-[#02042F] pl-5 font-light mb-4">
          Total
        </h4>
        <div className="">
          <StatisticsTotal />
        </div>
      </div>
      <div className="flex justify-end mt-5 ">
        <input
          type="submit"
          value="Submit"
          className="bg-gradient-to-r to-[#153170] from-[#1959EA] text-right rounded-lg  py-3 px-20 text-[28px] text-white font-bold cursor-pointer"
        />
      </div>
    </form>
  );
};
export default EventForm;
