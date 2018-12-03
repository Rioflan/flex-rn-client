import { Button, Card } from "react-native-elements";
import { View } from "react-native";
import React from "react";
import I18n from "../../../i18n/i18n";
import styles from "../ProfileScreenStyles";

const QRCodeCard = (props: { onPress: () => any }) => {
  const { onPress } = props;
  return (
    <Card title={I18n.t("profile.scan_qr_code")}>
      <View style={styles.scan_container}>
        <Button
          fontWeight="bold"
          borderRadius={15}
          backgroundColor="#5167A4"
          color="#fff"
          style={styles.scan}
          title={I18n.t("profile.scan")}
          onPress={onPress}
        />
      </View>
    </Card>
  );
};

export default QRCodeCard;