import logo from "../../../assets/images/logo/tib-official-logo.png";
import { Image, Text, View } from "@react-pdf/renderer";
import styles from "../../../constant/Stylesheets.constant";

const Header = () => {
  return (
    <View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} src={logo} />
      </View>
      <View style={styles.pageHeader}>
        <Text>Event Report Format- PACTA</Text>
        <br />
        <Text>Transparency International Bangladesh</Text>
      </View>
    </View>
  );
};
export default Header;
