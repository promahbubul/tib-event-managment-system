import {
  DateAndTime,
  DropDown,
  InputField,
  SectionHeading,
  TextArea,
} from "../../components/shared";

const EventForm = () => {
  return (
    <form action="" className="p-4 bg-[#E3E3E8] h-full overflow-auto">
      <SectionHeading>General Information</SectionHeading>
      <div className="grid mb-6 grid-cols-12 mt-4 gap-4">
        <DropDown className={"col-span-4"} title={"Name of CCC:"} />
        <DropDown className={"col-span-4"} title={"Type of initiative"} />
        <DropDown className={"col-span-4"} title={"Name of Cluster"} />
        <DropDown className={"col-span-4"} title={"Sector:"} />
        <DropDown className={"col-span-8"} title={"Type of Event"} />
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
          className={"col-span-12"}
          title={"Objectives of events:"}
          placeholder={"Write event objectives"}
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
      </div>
    </form>
  );
};
export default EventForm;
