import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.container, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
