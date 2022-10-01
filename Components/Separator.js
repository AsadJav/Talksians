import React from "react";
import { StyleSheet, View } from "react-native";

function Separator(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: "gray",
  },
});

export default Separator;
