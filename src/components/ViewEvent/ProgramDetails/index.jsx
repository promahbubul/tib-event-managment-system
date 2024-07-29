import { Text, View } from "@react-pdf/renderer";
import TableRaw from "./TableRaw";
import { programStyle } from "../../../constant/Stylesheets.constant";

const ProgramDetails = ({ programs }) => {
  return (
    <View>
      <Text style={programStyle.sectionTitle}>2. Program details: </Text>
      {/* Program Details */}
      <View style={programStyle.tableContainer}>
        <View style={programStyle.tableHeading}>
          <Text style={programStyle.rowHeadingRight}>
            Participant's Category
          </Text>
          <Text style={programStyle.rowHeadingLeft}>Male</Text>
        </View>
        <TableRaw
          title={"Objectives of the event"}
          description={`${programs.eventObjectives}`}
        />
        <TableRaw
          title={"Major actions of the event"}
          description={programs?.eventActions}
        />
        <TableRaw
          title={"Participant type"}
          description={"Internal and External"}
        />
        <TableRaw
          title={"Chief guest (if any)"}
          description={programs?.guest}
        />
        <TableRaw
          title={"Chairperson (if any)"}
          description={programs?.chairperson}
        />
        <TableRaw
          title={"Immediate results (if any)"}
          description={programs?.immediateResults}
        />
        <TableRaw
          title={"Number of issue raised (if any)"}
          description={`Total issues raised= 10; # of issues raised by male= 01; # of issues raised by female= 09; # of issues raised by marginalized= 06`}
        />
        <TableRaw
          title={"Name of raised issues"}
          description={programs?.issuesName}
        />
        <TableRaw title={"# of commitment made"} description={""} />
        <TableRaw
          title={"Number of issue addressed (if any)"}
          description={``}
        />
        <TableRaw
          title={"Name of addressed issues"}
          description={programs?.issueAddressed}
        />
        <TableRaw
          title={"Lessons learned (if any)"}
          description={programs?.lessonsLearned}
          lastRaw={true}
        />
        <TableRaw
          title={"Challenges (if any)"}
          description={`Integrating people`}
          lastRaw={true}
        />
      </View>
      {/* Additional Information */}

      <View style={programStyle.aditionalTableRaw}>
        <View style={programStyle.tableRawLeft}>
          <Text style={programStyle.contentLeft}>
            Aditional information/ {"\n"}Short breif of the event
          </Text>
        </View>
        <View style={programStyle.tableRawRight}>
          {" "}
          <Text style={programStyle.contentRight}>{"N/A"}</Text>
        </View>
      </View>
    </View>
  );
};
export default ProgramDetails;
