import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "./Screen";
import colors from "../config/colors";
import Icon from "./Icon";
import AppText from "./AppText";

function ListItem({ title, iconName, iconColor }) {
  return (
    <View style={styles.container}>
      <Icon name={iconName} iconColor={iconColor} size={60} />
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 150,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 3,
    marginTop: 20,
    marginRight: 20,
  },
  text: {
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 15,
  },
});

export default ListItem;
