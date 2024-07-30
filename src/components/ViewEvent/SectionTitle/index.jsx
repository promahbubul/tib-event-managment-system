import { Text, View } from "@react-pdf/renderer";
import moment from "moment";
import styles from "../../../constant/Stylesheets.constant";

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
          <Text style={styles.lastContent}>Follow up date: 19 Feb 2024</Text>
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
          <Text style={styles.lastContent}>Follow up issue: 19 Feb 2024</Text>
        </View>
      </View>
    </View>
  );
};
export default GeneralInformation;
