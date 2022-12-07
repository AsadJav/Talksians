import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../AppText";
import colors from "../../config/colors";
import Icon from "../Icon";

function NotificationHeader(props) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <AppText style={styles.AppText1}>Notifications</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 1,
    paddingLeft: 5,
    paddingTop: 5,
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  AppText1: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.purple,
  },
  icon: { backgroundColor: colors.light, borderRadius: 25, marginLeft: 10 },
});

export default NotificationHeader;
