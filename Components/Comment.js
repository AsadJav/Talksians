import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Comment({ title, dp, comment }) {
  return (
    <View style={styles.container}>
      <View style={styles.d}>
        <Image source={dp} style={styles.img} />
        <View style={styles.v}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.c}>{comment}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: "100%",
    borderRadius: 10,
    backgroundColor: colors.light,
    marginTop: 20,
    justifyContent: "center",
  },
  btn: { flexDirection: "row" },
  d: { flexDirection: "row", alignItems: "center" },
  title: {
    fontSize: 14,
    fontWeight: "bold",

    flexDirection: "column",
  },
  img: { height: 40, width: 40, borderRadius: 20 },
  c: { fontSize: 14, marginRight: "10%" },
  v: {
    marginLeft: 5,
    paddingRight: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  btnsize: { fontSize: 14 },
});

export default Comment;
