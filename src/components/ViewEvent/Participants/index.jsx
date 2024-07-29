import { StyleSheet, Text, View } from "@react-pdf/renderer";
import RowContentContainer from "./CccRowContentContainer";

const Participants = () => {
  return (
    <View>
      <View style={styles.sectionTitle}>
        <Text> 4. Participants: </Text>
        <Text style={styles.sectionSpan}>{"[Write in number]"}</Text>
      </View>
      {/* Table Container */}
      <View style={styles.tableContainer}>
        {/* Table Heading */}
        <View style={styles.tableHeading}>
          <Text style={styles.category}>Participant's Category</Text>
          <Text style={styles.male}>Male</Text>
          <Text style={styles.female}>Female</Text>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.marginalized}>Marginalized</Text>
        </View>
        {/* Table Body */}
        <View style={styles.tableBody}>
          {/* Table Row  */}
          <View style={styles.tableRow}>
            <Text style={styles.internal}>Internal {"\n"}(Core actors)</Text>
            {/* Row Content Container CCC */}
            <View style={{ width: "80%" }}>
              <RowContentContainer title={"CCC"} />
              <RowContentContainer title={"CCC"} />
              <RowContentContainer title={"CCC"} />
            </View>
          </View>
          {/* External Row */}
          <View style={styles.tableRow}>
            <Text style={styles.externals}>
              External (Direct other participants)
            </Text>
            <Text style={styles.male}>0</Text>
            <Text style={styles.female}>0</Text>
            <Text style={styles.total}>0</Text>
            <Text style={styles.marginalized}>0</Text>
          </View>
          {/* Total Row */}
          <View style={styles.tableRow}>
            <Text style={styles.grandTotal}>Total</Text>
            <Text style={styles.totalMale}>0</Text>
            <Text style={styles.totalFemale}>0</Text>
            <Text style={styles.totalTotal}>0</Text>
            <Text style={styles.totalMarginalized}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Participants;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
  },
  sectionSpan: {
    fontWeight: "thin",
  },
  tableContainer: {
    border: "1px solid black",
  },
  //   Table Heading
  tableHeading: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#faf5c5",
    fontSize: "14px",
    fontWeight: "bold",
    alignContent: "center",
    alignItems: "center",
  },

  headingData: {},
  category: {
    width: "35%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    borderBottom: "0.5px dashed black",
  },

  externals: {
    width: "35%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    borderBottom: "0.5px dashed black",
  },
  grandTotal: {
    width: "35%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    fontWeight: "extrabold",
  },
  totalMale: {
    width: "15%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    fontWeight: "extrabold",
  },
  totalFemale: {
    width: "15%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    fontWeight: "extrabold",
  },
  totalMarginalized: {
    width: "20  %",
    padding: "3px 10px",
    fontWeight: "extrabold",
  },
  totalTotal: {
    width: "15%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    fontWeight: "extrabold",
  },
  male: {
    width: "15%",
    padding: "3px 10px",
    textAlign: "right",
    borderRight: "0.5px dashed black",
    borderBottom: "0.5px dashed black",
  },
  female: {
    width: "15%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    borderBottom: "0.5px dashed black",
    textAlign: "right",
  },
  total: {
    width: "15%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    borderBottom: "0.5px dashed black",
    textAlign: "right",
  },
  marginalized: {
    width: "20%",
    textAlign: "right",
    borderBottom: "0.5px dashed black",
    padding: "3px 10px",
  },

  //   Table Body
  tableBody: {},

  tableRow: {
    display: "flex",
    flexDirection: "row",

    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  internal: {
    width: "20%",
    textAlign: "center",
    borderBottom: "0.5px dashed black",
    height: "100%",
  },
  rowContentContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  rowContentHeader: {
    width: "18.75%",
    textAlign: "right",
  },
  tableRowData: {},
  commonRowData: {
    width: "18.75%",
    textAlign: "right",
  },
  rowMarzinalizedData: {
    width: "25%",
    textAlign: "right",
  },
});
