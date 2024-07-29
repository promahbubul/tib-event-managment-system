import logo from "../../assets/images/logo/tib-official-logo.png";
import tinosRegular from "../../assets/fonts/Tinos-Regular.ttf";
import tinosBold from "../../assets/fonts/Tinos-Bold.ttf";
import {
  Document,
  Image,
  Page,
  PDFDownloadLink,
  Font,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import moment from "moment";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/ViewEvent/SectionTitle";
import GeneralInformation from "../../components/ViewEvent/SectionTitle";
import ProgramDetails from "../../components/ViewEvent/ProgramDetails";
import Photos from "../../components/ViewEvent/Photos";
import Participants from "../../components/ViewEvent/Participants";

const ViewEvent = () => {
  const event = useLoaderData();

  console.log(event);

  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Document title={event?.genInfo?.vanueName}>
        <Page size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.section}>
            <View style={styles.logoContiner}>
              <Image style={styles.logo} src={logo} />
            </View>
            <View style={styles.pageHeader}>
              <Text>Event Report Format- PACTA</Text>
              <br />
              <Text>Transparency International Bangladesh</Text>
            </View>
            {/* General Information */}
            <GeneralInformation />
            {/* Program Details */}
            <ProgramDetails />
            {/* Photos */}
            <Photos />
            {/* Participants */}
            <Participants />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default ViewEvent;

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
    fontSize: "10px",
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
    fontSize: "13px",
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
