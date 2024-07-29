import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import tinosRegular from "../../../assets/fonts/Tinos-Regular.ttf";
import tinosBold from "../../../assets/fonts/Tinos-Bold.ttf";
import TableRaw from "./TableRaw";
const ProgramDetails = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>2. Program details: </Text>
      {/* Program Details */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeading}>
          <Text style={styles.rowHeadingRight}>Participant's Category</Text>
          <Text style={styles.rowHeadingLeft}>Male</Text>
        </View>
        <TableRaw
          title={"Objectives of the event"}
          description={`1. adipisicing elit. Ipsum,tempore explicabo, 
            2. ea sit ipsam asperiores t fugiat
            2. ea sit ipsam asperiores t fugiat 
            2. ea sit ipsam asperiores t fugiat 
            2. ea sit ipsam asperiores t fugiat `}
        />
        <TableRaw title={"Major actions of the event"} description={``} />
        <TableRaw title={"Participant type"} description={``} />
        <TableRaw title={"Chief guest (if any)"} description={``} />
        <TableRaw title={"Chairperson (if any)"} description={``} />
        <TableRaw title={"Immediate results (if any)"} description={``} />
        <TableRaw title={"Number of issue raised (if any)"} description={``} />
        <TableRaw title={"Name of raised issues"} description={``} />
        <TableRaw title={"# of commitment made"} description={``} />
        <TableRaw
          title={"Number of issue addressed (if any)"}
          description={``}
        />
        <TableRaw title={"Name of addressed issues"} description={``} />
        <TableRaw
          title={"Lessions learned (if any)"}
          description={`United Hospital`}
          lastRaw={true}
        />
      </View>
      {/* Additional Information */}

      <View style={styles.aditionalTableRaw}>
        <View style={styles.tableRawLeft}>
          <Text style={styles.contentLeft}>
            Aditional information/ {"\n"}Short breif of the event
          </Text>
        </View>
        <View style={styles.tableRawRight}>
          {" "}
          <Text style={styles.contentRight}>{"N/A"}</Text>
        </View>
      </View>
    </View>
  );
};
export default ProgramDetails;

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
    border: "1px solid black",
  },
  tableRaw: {
    display: "flex",
    flexDirection: "row",
    // border: "1px solid black",
    borderBottom: "1px solid black",
  },

  tableRawLeft: {
    width: "40%",
    padding: "3px 5px",
  },
  tableRawRight: {
    width: "60%",
    borderLeft: "1px solid black",
    padding: "3px 5px",
  },

  aditionalTableRaw: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    border: "1px solid black",
  },
  contentLeft: {},
  contentRight: {},

  //   Table Heading
  tableHeading: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#faf5c5",
    fontSize: "12px",
    fontWeight: "bold",
    alignContent: "center",
    alignItems: "center",
  },
  rowHeadingRight: {
    width: "40%",
    padding: "3px 10px",
    borderRight: "0.5px solid black",
    borderBottom: "0.5px solid black",
  },
  rowHeadingLeft: {
    width: "60%",
    padding: "3px 10px",
    borderBottom: "0.5px solid black",
  },
});
