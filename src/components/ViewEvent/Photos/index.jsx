import { Image, Text, View } from "@react-pdf/renderer";
import imageDa from "../../../assets/images/icon.png";
import { photoStyle } from "../../../constant/Stylesheets.constant";

const Photos = () => {
  return (
    <View>
      <Text style={photoStyle.sectionTitle}>
        3. Photographs: {"[Click on the symbol and insert picture]"}{" "}
      </Text>
      {/* Gellery Container */}
      <View style={photoStyle.galleryContainer}>
        <View style={photoStyle.card}>
          <Image style={photoStyle.image} src={imageDa} />
        </View>
        <View style={photoStyle.card}>
          <Image style={photoStyle.image} src={imageDa} />
        </View>
        <View style={photoStyle.lastCard}>
          <Image style={photoStyle.image} src={imageDa} />
        </View>
      </View>
    </View>
  );
};
export default Photos;
