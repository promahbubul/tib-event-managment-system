import { Image, Text, View } from "@react-pdf/renderer";
import { photoStyle } from "../../../constant/Stylesheets.constant";

const Photos = ({ photographs }) => {
  return (
    <View>
      <Text style={photoStyle.sectionTitle}>
        3. Photographs: {"[Click on the symbol and insert picture]"}{" "}
      </Text>
      {/* Gallery Container */}
      <View style={photoStyle.galleryContainer}>
        {photographs ? (
          photographs.map((photo, index) => (
            <View key={index} style={photoStyle.card}>
              <Image
                style={photoStyle.image}
                source={{ uri: photo?.thumb?.url }}
              />
            </View>
          ))
        ) : (
          <>
            <View style={photoStyle.card}></View>
            <View style={photoStyle.card}></View>
            <View style={photoStyle.lastCard}></View>
          </>
        )}

        {/* {photographs ? "Yes" : "No"} */}
      </View>
    </View>
  );
};
export default Photos;
