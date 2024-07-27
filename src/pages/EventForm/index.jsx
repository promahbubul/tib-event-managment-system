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
import allParticipant from "../../constant/participants.constant";

const EventForm = () => {
  const [img1, setImg1] = useState(null);
  const [CCC, setCCC] = useState(allParticipant.ccc);
  const [ACG, setACG] = useState(allParticipant.acg);
  const [YES, setYES] = useState(allParticipant.yes);
  const [extra, setExtra] = useState(allParticipant.extra);
  const [total, setTotal] = useState(allParticipant.total);

  // set total
  const handleTotal = () => {
    // total Participant
    const totalMale = ACG.male + CCC.male + YES.male + extra.male;
    const totalFemale = ACG.female + CCC.female + YES.female + extra.female;
    const totalMarginalized =
      ACG.marginalized +
      CCC.marginalized +
      YES.marginalized +
      extra.marginalized;
    const grossTotal = totalMale + totalFemale;

    setTotal({
      male: totalMale,
      female: totalFemale,
      marginalized: totalMarginalized,
      total: grossTotal,
    });
  };

  // Form SUbmit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    // General Information
    const cccName = form.cccName.value;
    const initiativeType = form.initiativeType.value;
    const clusterName = form.clusterName.value;
    const eventName = form.eventName.value;
    const sectorName = form.sectorName.value;
    const subSectorName = form.subSectorName.value;
    const vanueName = form.vanueName.value;
    const meetingWithWhom = form.meetingWithWhom.value;
    const startEventDate = form.startEventDate.value;
    const startEventTime = form.startEventTime.value;
    const endEventDate = form.endEventDate.value;
    const endEventTime = form.endEventTime.value;

    // Program details
    const eventObjectives = form.eventObjectives.value;
    const eventActions = form.eventActions.value;
    const participantType = form.participantType.value;
    const guest = form.guest.value;
    const chairperson = form.eventObjectives.value;
    const immediateResults = form.immediateResults.value;
    const issuesName = form.issuesName.value;
    const issueAddressed = form.issueAddressed.value;
    const lessonsLearned = form.lessonsLearned.value;
    const challenges = form.challenges.value;
    const additionalInformation = form.additionalInformation.value;

    // Participants

    const participants = { CCC, ACG, YES, extra, total };
    const genInfo = {
      cccName,
      initiativeType,
      clusterName,
      eventName,
      sectorName,
      subSectorName,
      vanueName,
      meetingWithWhom,
      startEventDate,
      startEventTime,
      endEventDate,
      endEventTime,
    };
    const programDetails = {
      eventObjectives,
      eventActions,
      participantType,
      guest,
      chairperson,
      immediateResults,
      issuesName,
      issueAddressed,
      lessonsLearned,
      challenges,
      additionalInformation,
    };

    console.log([genInfo, programDetails, participants]);
    alert("Data Submit Successfully");
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      action=""
      className="p-4 bg-[#E3E3E8] h-full overflow-auto"
    >
      <SectionHeading>General Information</SectionHeading>
      <div className="grid mb-6 grid-cols-12 mt-4 gap-4">
        <DropDown
          options={generalInformation?.ccc}
          className={"col-span-4"}
          title={"Name of CCC:"}
          itemName={"cccName"}
        />
        <DropDown
          options={generalInformation?.initiative}
          className={"col-span-4"}
          title={"Type of initiative"}
          itemName={"initiativeType"}
        />
        <DropDown
          options={generalInformation?.cluster}
          className={"col-span-4"}
          title={"Name of Cluster"}
          itemName={"clusterName"}
        />
        <DropDown
          options={generalInformation?.nameEvent}
          className={"col-span-4"}
          itemName={"eventName"}
          title={"Name of Event"}
        />
        <DropDown
          options={generalInformation?.sector}
          className={"col-span-3"}
          title={"Sector:"}
          itemName={"sectorName"}
        />
        <DropDown
          options={generalInformation?.subSector}
          className={"col-span-5"}
          itemName={"subSectorName"}
          title={"Sub-sector:"}
        />
        <InputField
          className={"col-span-6"}
          itemName={"vanueName"}
          title={"Name of vanue"}
          placeholder={"Enter your venue location"}
        />
        <InputField
          className={"col-span-6"}
          itemName={"meetingWithWhom"}
          title={"Meeting with whom"}
          placeholder={"Enter you authority name "}
        />
        <DateAndTime
          className={"col-span-6"}
          eventDate={"startEventDate"}
          eventTime={"startEventTime"}
          dateTitle={"Event start date:"}
          timeTitle={"Start Time:"}
        />
        <DateAndTime
          eventDate={"endEventDate"}
          eventTime={"endEventTime"}
          className={"col-span-6"}
          dateTitle={"Event end date:"}
          timeTitle={"Start Time:"}
        />
      </div>
      <SectionHeading>Program details</SectionHeading>
      <div className="grid grid-cols-12 mt-4 gap-4">
        <TextArea
          itemName={"eventObjectives"}
          row={"h-28"}
          className={"col-span-6"}
          title={"Objectives of events:"}
          placeholder={"Write event objectives"}
        />
        <TextArea
          itemName={"eventActions"}
          row={"h-28"}
          className={"col-span-6"}
          title={"Major actions of the events:"}
          placeholder={"Write here major actions"}
        />
        <TextArea
          itemName={"participantType"}
          row={"h-20"}
          className={"col-span-6"}
          title={"Participant Type: (external / internal)"}
          placeholder={"Write here  type of participant"}
        />
        <TextArea
          itemName={"guest"}
          row={"h-20"}
          className={"col-span-6"}
          title={"Chief  guest (if any)"}
          placeholder={"Write here designation"}
        />
        <TextArea
          itemName={"chairperson"}
          row={"h-20"}
          className={"col-span-6"}
          title={"Chairperson (if any)"}
          placeholder={"Write here designation"}
        />

        <TextArea
          itemName={"immediateResults"}
          row={"h-20"}
          className={"col-span-6"}
          title={"Immediate results (if any)"}
          placeholder={"Write here if any"}
        />
        <TextArea
          itemName={"issuesName"}
          row={"h-28"}
          className={"col-span-12"}
          title={"Name of raised issues:"}
          placeholder={"Write here name of all issues"}
        />
        <TextArea
          itemName={"issueAddressed"}
          row={"h-16"}
          className={"col-span-4"}
          title={"Name of addressed issues:"}
          placeholder={"Write here name of all issues"}
        />
        <TextArea
          itemName={"lessonsLearned"}
          row={"h-16"}
          className={"col-span-4"}
          title={"Lessons learned (if any):"}
          placeholder={"Write here what you learned"}
        />
        <TextArea
          itemName={"challenges"}
          row={"h-16"}
          className={"col-span-4"}
          title={"Challenges (if any):"}
          placeholder={"Write here what challenges face"}
        />
        <TextArea
          itemName={"additionalInformation"}
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
          <StatisticsForm participateData={setCCC} title={"CCC"} />
          <StatisticsForm participateData={setACG} title={"ACG"} />
          <StatisticsForm participateData={setYES} title={"YES"} />
        </div>
      </div>
      <div className=" bg-white rounded-lg p-2 mt-2 ">
        <h4 className="text-base col-span-12 text-[#02042F] pl-5 font-light mb-4">
          External (Direct other participants)
        </h4>
        <div className="">
          <StatisticsForm participateData={setExtra} />
        </div>
      </div>
      <div className="flex justify-end mb-5 ">
        <button
          type="button"
          onClick={handleTotal}
          className="bg-gradient-to-r to-[#153170] from-[#1959EA] text-right rounded-lg  py-3 px-20 text-[28px] text-white font-bold cursor-pointer"
        >
          Calculate
        </button>
      </div>
      <div className=" bg-white rounded-lg p-2 mt-2 ">
        <h4 className="text-base col-span-12 text-[#02042F] pl-5 font-light mb-4">
          Total
        </h4>
        <div className="">
          <StatisticsTotal total={total} />
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
