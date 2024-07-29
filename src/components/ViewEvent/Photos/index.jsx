import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import imageDa from "../../../assets/images/icon.png";

const Photos = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>
        3. Photographs: {"[Click on the symbol and insert picture]"}{" "}
      </Text>
      {/* Gellery Container */}
      <View style={styles.galleryContainer}>
        <View style={styles.card}>
          <Image style={styles.image} src={imageDa} />
        </View>
        <View style={styles.card}>
          <Image style={styles.image} src={imageDa} />
        </View>
        <View style={styles.lastCard}>
          <Image style={styles.image} src={imageDa} />
        </View>
      </View>
    </View>
  );
};
export default Photos;

const styles = StyleSheet.create({
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
