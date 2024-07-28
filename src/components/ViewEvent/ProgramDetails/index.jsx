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
        <TableRaw
          title={"Objectives of the event"}
          description={`1. adipisicing elit. Ipsum,tempore explicabo, 2. ea sit ipsam asperiores t fugiat `}
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
          description={``}
          lastRaw={true}
        />
      </View>
      {/* Additional Information */}

      <View style={styles.aditionalTableRaw}>
        <View style={styles.tableRawLeft}>
          <Text style={styles.contentLeft}>
            Aditional information/ <br /> Short breif of the event
          </Text>
        </View>
        <View style={styles.tableRawRight}>
          {" "}
          <Text style={styles.contentRight}>{"description"}</Text>
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
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    fontFamily: "tinos",
    fontWeight: "normal",
    fontSize: "12px",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: "2px solid red",
  },
  logoContiner: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "90px",
    textAlign: "center",
  },
  pageHeader: {
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "tinos",
    fontWeight: "800",
    marginTop: "10px",
  },
  sectionTitle: {
    fontSize: "14px",
    fontWeight: 700,
  },
  tableContainer: {
    border: "1px dashed black",
  },
  tableRaw: {
    display: "flex",
    flexDirection: "row",
    // border: "1px dashed black",
    borderBottom: "1px dashed black",
  },

  tableRawLeft: {
    width: "40%",
    padding: "3px 5px",
  },
  tableRawRight: {
    width: "60%",
    borderLeft: "1px dashed black",
    padding: "3px 5px",
  },

  aditionalTableRaw: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    border: "1px dashed black",
  },
  contentLeft: {},
  contentRight: {},
});
