import { Document, Page, PDFViewer, View } from "@react-pdf/renderer";
import styles from "../../constant/Stylesheets.constant";
import { useContext, useEffect, useState } from "react";
import { CreateEventContext } from "../../context/EventContext";
import GeneralInformation from "../../components/ViewEvent/SectionTitle";
import ProgramDetails from "../../components/ViewEvent/ProgramDetails";
import Photos from "../../components/ViewEvent/Photos";
import Participants from "../../components/ViewEvent/Participants";
import Footer from "../../components/ViewEvent/Footer";
import Header from "../../components/ViewEvent/Header";

const ViewEventAll = () => {
  const [eventData, setEventData] = useState([]);
  // const { eventData, setEventData } = useContext(CreateEventContext);

  // console.log(eventData);

  useEffect(() => {
    fetch("https://ems.curryjunction.uk/api/v1/filter-event")
      .then((res) => res.json())
      .then((data) => setEventData(data[0].result))
      .catch((error) => console.error(error));
  }, []);

  return (
    <PDFViewer
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Document title={"Dhaka"}>
        {eventData?.map((event) => (
          <Page key={event?._id} size="A4" style={styles.page}>
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
            ;
          </Page>
        ))}
      </Document>
    </PDFViewer>
  );
};
export default ViewEventAll;
