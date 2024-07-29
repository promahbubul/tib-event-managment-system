import { StyleSheet, Text, View } from "@react-pdf/renderer";

const RowContentContainer = ({ title }) => {
  return (
    <View style={styles.rowContentContainer}>
      <Text style={styles.rowContentHeader}>{title}</Text>
      <Text style={styles.commonRowData}>01</Text>
      <Text style={styles.commonRowData}>00</Text>
      <Text style={styles.commonRowData}>04</Text>
      <Text style={styles.rowMarzinalizedData}>00</Text>
    </View>
  );
};
export default RowContentContainer;

const styles = StyleSheet.create({
  //   Table Body
  tableBody: {},

  tableRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  internal: {
    width: "20%",
    textAlign: "center",
    padding: "3px 10px",
  },
  rowContentContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  rowContentHeader: {
    borderLeft: "0.5px dashed black",
    borderBottom: "0.5px dashed black",
    width: "18.60%",
    textAlign: "right",
    padding: "3px 10px",
  },
  tableRowData: {},
  commonRowData: {
    width: "18.75%",
    textAlign: "right",
    borderLeft: "0.5px dashed black",
    borderBottom: "0.5px dashed black",
    padding: "3px 10px",
  },
  rowMarzinalizedData: {
    width: "25%",
    textAlign: "right",
    borderLeft: "0.5px dashed black",
    borderBottom: "0.5px dashed black",
    padding: "3px 10px",
  },
});
