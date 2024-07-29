import { Text, View } from "@react-pdf/renderer";
import RowContentContainer from "./CccRowContentContainer";
import { participantStyle } from "../../../constant/Stylesheets.constant";

const Participants = ({ participantList }) => {
  return (
    <View>
      <View style={participantStyle.sectionTitle}>
        <Text> 4. Participants: </Text>
        <Text style={participantStyle.sectionSpan}>{"[Write in number]"}</Text>
      </View>
      {/* Table Container */}
      <View style={participantStyle.tableContainer}>
        {/* Table Heading */}
        <View style={participantStyle.tableHeading}>
          <Text style={participantStyle.category}>Participant's Category</Text>
          <Text style={participantStyle.male}>Male</Text>
          <Text style={participantStyle.female}>Female</Text>
          <Text style={participantStyle.total}>Total</Text>
          <Text style={participantStyle.marginalized}>Marginalized</Text>
        </View>
        {/* Table Body */}
        <View style={participantStyle.tableBody}>
          {/* Table Row  */}
          <View style={participantStyle.tableRow}>
            <Text style={participantStyle.internal}>
              Internal {"\n"}(Core actors)
            </Text>
            {/* Row Content Container CCC */}
            <View style={{ width: "80%" }}>
              <RowContentContainer
                participant={participantList.CCC}
                title={"CCC"}
              />
              <RowContentContainer
                participant={participantList.ACG}
                title={"ACG"}
              />
              <RowContentContainer
                participant={participantList.YES}
                title={"YES"}
              />
            </View>
          </View>
          {/* External Row */}
          <View style={participantStyle.tableRow}>
            <Text style={participantStyle.externals}>
              External (Direct other participants)
            </Text>
            <Text style={participantStyle.male}>
              {participantList.extra?.male
                ? participantList.extra?.male < 10
                  ? `0${participantList.extra?.male}`
                  : participantList.extra?.male
                : "00"}
            </Text>
            <Text style={participantStyle.female}>
              {" "}
              {participantList.extra?.female
                ? participantList.extra?.female < 10
                  ? `0${participantList.extra?.female}`
                  : participantList.extra?.female
                : "00"}
            </Text>
            <Text style={participantStyle.total}>
              {participantList.extra?.total
                ? participantList.extra?.total < 10
                  ? `0${participantList.extra?.total}`
                  : participantList.extra?.total
                : "00"}
            </Text>
            <Text style={participantStyle.marginalized}>
              {participantList.extra?.marginalized
                ? participantList.extra?.marginalized < 10
                  ? `0${participantList.extra?.marginalized}`
                  : participantList.extra?.marginalized
                : "00"}
            </Text>
          </View>
          {/* Total Row */}
          <View style={participantStyle.tableRow}>
            <Text style={participantStyle.grandTotal}>Total</Text>
            <Text style={participantStyle.totalMale}>
              {participantList.total?.male
                ? participantList.total?.male < 10
                  ? `0${participantList.total?.male}`
                  : participantList.total?.male
                : "00"}
            </Text>
            <Text style={participantStyle.totalFemale}>
              {participantList.total?.female
                ? participantList.total?.female < 10
                  ? `0${participantList.total?.female}`
                  : participantList.total?.female
                : "00"}
            </Text>
            <Text style={participantStyle.totalTotal}>
              {participantList.total?.total
                ? participantList.total?.total < 10
                  ? `0${participantList.total?.total}`
                  : participantList.total?.total
                : "00"}
            </Text>
            <Text style={participantStyle.totalMarginalized}>
              {" "}
              {participantList.extra?.marginalized
                ? participantList.extra?.marginalized < 10
                  ? `0${participantList.extra?.marginalized}`
                  : participantList.extra?.marginalized
                : "00"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Participants;
