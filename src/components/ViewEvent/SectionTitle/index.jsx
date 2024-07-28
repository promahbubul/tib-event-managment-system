import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import tinosRegular from "../../../assets/fonts/Tinos-Regular.ttf";
import tinosBold from "../../../assets/fonts/Tinos-Bold.ttf";
const GeneralInformation = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>1. General Information: </Text>
      <View style={styles.tableContainer}>
        {/* Left */}
        <View style={styles.tableRowLeft}>
          <Text style={styles.content}>Name of CCC: Mymensingh</Text>
          <Text style={styles.content}>Name of Cluster: Sylhet</Text>
          <Text style={styles.content}>
            Name of event: Community Action Meeting
          </Text>
          <Text style={styles.content}>
            Type of event: Discussion meeting with community
          </Text>
          <Text style={styles.content}>
            Name of vanue: Char Ishardia, Mymensingh sadar
          </Text>
          <Text style={styles.content}>
            Event start data: 18-Apr-2024 <br />
            Start time: 03:00 PM
          </Text>
          <Text style={styles.lastContnt}>Follow up: 19 Feb 2024</Text>
        </View>
        {/* Right */}
        <View style={styles.tableRowLeftRight}>
          <Text style={styles.content}>Name of CCC: Mymensingh</Text>
          <Text style={styles.content}>Name of Cluster: Sylhet</Text>
          <Text style={styles.content}>
            Name of event: Community Action Meeting
          </Text>
          <Text style={styles.content}>
            Type of event: Discussion meeting with community
          </Text>
          <Text style={styles.content}>
            Name of vanue: Char Ishardia, Mymensingh sadar
          </Text>
          <Text style={styles.content}>
            Event start data: 18-Apr-2024 <br />
            Start time: 03:00 PM
          </Text>
          <Text style={styles.lastContnt}>Follow up: 19 Feb 2024</Text>
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
    display: "flex",
    flexDirection: "row",
    border: "1px dashed black",
  },
  tableRowLeft: {
    width: "50%",
  },
  tableRowLeftRight: {
    width: "50%",
    borderLeft: "1px dashed black",
  },
  content: {
    borderBottom: "1px dashed black",
    padding: "3px 5px",
  },

  lastContnt: {
    padding: "3px 5px",
  },
});
