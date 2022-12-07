import React from "react";
import { Image, StyleSheet, View } from "react-native";
import App from "../App";
import AppButton from "./AppButton";
import AppText from "./AppText";

function PageComponent({ title, desc, logo }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/COMSATS_new_logo.jpg")}
        style={styles.img}
      />
      <View style={styles.View}>
        <AppText style={styles.title}> GOOGLE</AppText>
        <AppText style={styles.desc}>University & College</AppText>
        <AppButton title="Like Page" style={styles.btn} fcolor="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    marginRight: 10,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  View: {
    marginTop: 40,
  },
  title: {
    fontWeight: "bold",
  },
  dese: {
    fontSize: 1,
  },
  btn: { backgroundColor: "purple", marginTop: 10 },
});

export default PageComponent;
