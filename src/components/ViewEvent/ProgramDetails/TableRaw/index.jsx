import { StyleSheet, Text, View } from "@react-pdf/renderer";

const TableRaw = ({ title, description, lastRaw }) => {
  return (
    <View style={lastRaw ? "" : styles.tableRaw}>
      <View style={styles.tableRawLeft}>
        <Text style={styles.contentLeft}>{title}</Text>
      </View>
      <View style={styles.tableRawRight}>
        {" "}
        <Text style={styles.contentRight}>{description}</Text>
      </View>
    </View>
  );
};
export default TableRaw;

const styles = StyleSheet.create({
  tableRaw: {
    display: "flex",
    flexDirection: "row",
    // border: "1px dashed black",
    borderBottom: "1px dashed black",
  },
  tableLastRaw: {
    display: "flex",
    flexDirection: "row",
    // border: "1px dashed black",
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

  contentLeft: {},
  contentRight: {},
});
