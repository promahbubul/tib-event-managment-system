import { useContext, useState } from "react";
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
import { CreateEventContext } from "../../context/EventContext";
import SuccessFullyModal from "../../components/shared/Modal/SuccessfullyModal";

const EventForm = () => {
  const [success, setSuccess] = useState(false);
  const {
    CCC,
    ACG,
    YES,
    extra,
    total,
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
  } = useContext(CreateEventContext);

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

    // Images
    const photographs = [image1, image2, image3];
    console.log(photographs);

    // console.log({ genInfo, programDetails, participants, imageList });
    const event = { genInfo, programDetails, participants, photographs };
    const eventString = JSON.stringify(event);
    fetch("https://ems.curryjunction.uk/api/v1/event", {
      method: "POST",
      body: eventString,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 1000);

          // Clear Form Data
          // form.reset();
          // form.eventObjectives.value = "";
          // form.eventActions.value = "";
          // form.participantType.value = "";
          // form.guest.value = "";
          // form.eventObjectives.value = "";
          // form.immediateResults.value = "";
          // form.issuesName.value = "";
          // form.issueAddressed.value = "";
          // form.lessonsLearned.value = "";
          // form.challenges.value = "";
          // form.additionalInformation.value = "";
          // setCCC({});
          // setACG({});
          // setYES({});
          // setExtra({});
          // setTotal({});
        }
      })
      .catch((err) => console.log(err));
    console.log(event);
  };

  return (
    <>
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
            image={image1}
            setImage={setImage1}
            name={"fileImage1"}
            className={"col-span-4"}
          />
          <InputFile
            image={image2}
            setImage={setImage2}
            name={"fileImage2"}
            className={"col-span-4"}
          />
          <InputFile
            image={image3}
            setImage={setImage3}
            name={"fileImage3"}
            className={"col-span-4"}
          />
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
      {success && <SuccessFullyModal close={setSuccess} />}
    </>
  );
};

export default EventForm;
