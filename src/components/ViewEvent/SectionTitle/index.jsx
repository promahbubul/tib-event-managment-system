import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import tinosRegular from "../../../assets/fonts/Tinos-Regular.ttf";
import tinosBold from "../../../assets/fonts/Tinos-Bold.ttf";
import moment from "moment";
const GeneralInformation = ({ genInfo }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>1. General Information: </Text>
      <View style={styles.tableContainer}>
        {/* Left */}
        <View style={styles.tableRowLeft}>
          <Text style={styles.content}>Name of CCC: {genInfo?.cccName}</Text>
          <Text style={styles.content}>
            Name of Cluster: {genInfo?.clusterName}
          </Text>
          <Text style={styles.content}>
            Name of event: {genInfo?.eventName}
          </Text>
          <Text style={styles.content}>
            Type of event: Discussion meeting with community
          </Text>
          <Text style={styles.content}>
            Name of vanue: {genInfo?.vanueName}
          </Text>
          <Text style={styles.content}>
            Event start data:{" "}
            {moment(genInfo?.startEventDate).format("DD-MMM-YY")} {"\n"}Start
            time: {moment(genInfo?.startEventTime, "HH,mm").format("HH:mm A ")}
          </Text>
          <Text style={styles.lastContnt}>Follow up date: 19 Feb 2024</Text>
        </View>
        {/* Right */}
        <View style={styles.tableRowLeftRight}>
          <Text style={styles.content}>
            Type of initiative: {genInfo?.initiativeType}
          </Text>
          <Text style={styles.content}>
            if(it's joint initiative) With whom: N/A
          </Text>
          <Text style={styles.content}>Sector: {genInfo?.sectorName} </Text>
          <Text style={styles.content}>
            Sub-sector: {genInfo?.subSectorName}
          </Text>
          <Text style={styles.content}>
            Meeting with whom: {genInfo?.meetingWithWhom}
          </Text>
          <Text style={styles.content}>
            Event ending data:{" "}
            {moment(genInfo?.endEventDate).format("DD-MMM-YY")} {"\n"}Ending
            time: {moment(genInfo?.endEventTime, "hh,mm").format("hh:mm A ")}
          </Text>
          <Text style={styles.lastContnt}>Follow up issue: 19 Feb 2024</Text>
        </View>
      </View>
    </View>
  );
};
export default GeneralInformation;

// Fonts
Font.register({
  family: "tinos",
  fonts: [
    { src: tinosRegular }, // font-style: normal, font-weight: normal
    { src: tinosBold, fontStyle: "italic" },
  ],
});
// Create styles
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: "12px",
    fontStyle: "bold",
  },
  tableContainer: {
    display: "flex",
    flexDirection: "row",
    border: "0.8px dashed black",
  },
  tableRowLeft: {
    width: "50%",
  },
  tableRowLeftRight: {
    width: "50%",
    borderLeft: "0.8px dashed black",
  },
  content: {
    borderBottom: "0.8px dashed black",
    padding: "2px 3px",
  },

  lastContnt: {
    padding: "2px 3px",
  },
});
