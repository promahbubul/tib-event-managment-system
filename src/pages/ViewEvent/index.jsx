import { Document, Page, PDFViewer, View } from "@react-pdf/renderer";
import { useLoaderData } from "react-router-dom";
import GeneralInformation from "../../components/ViewEvent/SectionTitle";
import ProgramDetails from "../../components/ViewEvent/ProgramDetails";
import Photos from "../../components/ViewEvent/Photos";
import Participants from "../../components/ViewEvent/Participants";
import Header from "../../components/ViewEvent/Header";
import Footer from "../../components/ViewEvent/Footer";
import styles from "../../constant/Stylesheets.constant";

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
              <Header />
              {/* General Information */}
              <GeneralInformation genInfo={event?.genInfo} />
              {/* Program Details */}
              <ProgramDetails programs={event?.programDetails} />
              {/* Photos */}
              <Photos photographs={event?.photographs} />
              {/* Participants */}
              <Participants participantList={event?.participants} />
            </View>
            {/* Footer */}
            <Footer />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default ViewEvent;
