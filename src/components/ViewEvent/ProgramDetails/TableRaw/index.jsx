import { StyleSheet, Text, View } from "@react-pdf/renderer";

const TableRaw = ({ title, description, lastRaw }) => {
  return (
    <View style={lastRaw ? styles.tableLastRaw : styles.tableRaw}>
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
    // border: "0.5px solid black",
    borderBottom: "0.5px solid black",
  },
  tableLastRaw: {
    display: "flex",
    flexDirection: "row",
  },

  tableRawLeft: {
    width: "39.9%",
    padding: "3px 5px",
  },
  tableRawRight: {
    width: "60.1%",
    borderLeft: "0.5px solid black",
    padding: "3px 5px",
  },

  contentLeft: {},
  contentRight: {},
});
