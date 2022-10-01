import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../Components/AppText";

function NotificationScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>NotificationScreen</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotificationScreen;
