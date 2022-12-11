import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppButton from "./AppButton";
import AppText from "./AppText";

function GroupComponent({ img, title, desc }) {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <View style={styles.View}>
        <View>
          <AppText style={styles.title}> {title}</AppText>
          <AppText style={styles.desc}>{desc}</AppText>
          <AppButton
            title="Join Group"
            color="purple"
            fcolor="white"
            style={{ marginTop: 10 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    backgroundColor: "white",
  },
  img: {
    marginRight: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  View: {
    marginTop: 20,
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
  },
  desc: {
    fontSize: 14,
    marginLeft: 5,
  },
  btn: { backgroundColor: "purple", marginTop: 10 },
});

export default GroupComponent;
