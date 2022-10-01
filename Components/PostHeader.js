import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";

function PostHeader(props) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={require("../assets/me.jpg")} style={styles.image} />
        <AppText style={styles.title}>Asad Javed Sulemani</AppText>
      </View>
      <AppText style={styles.description}>
        "There is no one who loves pain itself, who seeks after it and wants to
        have it, simply because it is pain..."
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  head: {
    marginTop: 5,
    marginLeft: 5,
    flexDirection: "row",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  title: {
    marginLeft: 15,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    margin: 5,
    color: "black",
    fontSize: 16,
  },
});

export default PostHeader;
