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
          <View style={styles.section}>
            {/* Header */}
            <View>
              <View style={styles.logoContiner}>
                <Image style={styles.logo} src={logo} />
              </View>
              <View style={styles.pageHeader}>
                <Text>Event Report Format- PACTA</Text>
                <br />
                <Text>Transparency International Bangladesh</Text>
              </View>
              {/* General Information */}
              <GeneralInformation genInfo={event?.genInfo} />
              {/* Program Details */}
              <ProgramDetails programs={event?.programDetails} />
              {/* Photos */}
              <Photos />
              {/* Participants */}
              <Participants participantList={event?.participants} />
            </View>
            {/* Footer */}
            <View style={styles.footer}>
              {/* Footer Left */}
              <View style={styles.footerLeft}>
                <Text style={styles.footerContent}>Signature:</Text>
                <Text style={styles.footerContent}>
                  Report prepared by: Md. Habibur Rahman, AC-TIB
                </Text>
                <Text style={styles.footerContent}>Date: 29-Apr-24</Text>
              </View>
              {/* Footer Left */}
              <View style={styles.footerRight}>
                <Text style={styles.footerContent}>Signature:</Text>
                <Text style={styles.footerContent}>
                  Report endorsed by: Md. Areful Islam. {"\n"}
                  Cluster Coordinator-CE, TIB
                </Text>
                <Text style={styles.footerContent}>Date: 29-Apr-24</Text>
              </View>
            </View>
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
    { src: tinosBold, fontStyle: "bold" },
  ],
});
// Create styles
const styles = StyleSheet.create({
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
    width: "50%",
  },
  footerRight: {
    width: "50%",
  },
  footerContent: {},
});
