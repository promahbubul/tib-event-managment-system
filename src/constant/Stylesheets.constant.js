import { Font, StyleSheet } from "@react-pdf/renderer";
import tinosBold from "../assets/fonts/Tinos-Bold.ttf";
import tinosRegular from "../assets/fonts/Tinos-Regular.ttf";

// Fonts
Font.register({
  family: "tinos",
  fonts: [
    { src: tinosRegular }, // font-style: normal, font-weight: normal
    { src: tinosBold, fontStyle: "bold" },
  ],
});

// Fonts
Font.register({
  family: "tinos",
  fonts: [
    { src: tinosRegular }, // font-style: normal, font-weight: normal
    { src: tinosBold, fontStyle: "bold" },
  ],
});

// All Styles
const styles = StyleSheet.create({
  // Page
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    fontFamily: "tinos",
    fontStyle: "normal",
    fontSize: "10.5px",
  },
  section: {
    margin: "20 50",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  //   Header
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
    fontSize: "15px",
    fontFamily: "tinos",
    // fontWeight: "bold",
    fontStyle: "bold",
    marginTop: "6px",
  },
  sectionTitle: {
    fontSize: "13px",
    fontStyle: "bold",
  },

  //   Table
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

  //   Footer
  footer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5px",
    gap: "10",
  },
  footerLeft: {
    width: "60%",
  },
  footerRight: {
    width: "40%",
  },
});

// Program Style
export const programStyle = StyleSheet.create({
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

// photo gallery Style
export const photoStyle = StyleSheet.create({
  sectionTitle: {
    fontSize: "12px",
    fontStyle: "bold",
  },
  galleryContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px solid black",
  },
  card: {
    borderRight: "1px solid black",
    width: "100%",
    display: "flex",
    height: "25px",
    padding: "2px",
    alignItems: "center",
  },
  lastCard: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "20px",
  },
});

// Participants Style
export const participantStyle = StyleSheet.create({
  sectionTitle: {
    fontSize: "12px",
    display: "flex",
    flexDirection: "row",
    fontStyle: "bold",
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
    fontSize: "12px",
    fontWeight: "bold",
    alignContent: "center",
    alignItems: "center",
  },

  headingData: {},
  category: {
    width: "35%",
    padding: "2px 10px",
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
    fontStyle: "bold",
    textAlign: "right",
  },
  totalMale: {
    width: "15%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    fontWeight: "extrabold",
    textAlign: "right",
  },
  totalFemale: {
    width: "15%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    fontWeight: "extrabold",
    textAlign: "right",
  },
  totalMarginalized: {
    width: "20  %",
    padding: "3px 10px",
    fontWeight: "extrabold",
    textAlign: "right",
  },
  totalTotal: {
    width: "15%",
    padding: "3px 10px",
    borderRight: "0.5px dashed black",
    fontWeight: "extrabold",
    textAlign: "right",
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

export default styles;
