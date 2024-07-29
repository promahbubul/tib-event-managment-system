import { Text, View } from "@react-pdf/renderer";
import styles from "../../../constant/Stylesheets.constant";

const Footer = () => {
  return (
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
  );
};
export default Footer;
