import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import colors from "../config/colors";

function AppButton({ title, color = "white", onPress }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    fontStyle: "normal",
    fontWeight: "900",
    color: colors.purple,
  },
});

export default AppButton;
