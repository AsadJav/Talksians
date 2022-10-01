import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import PostButton from "./PostButton";
import PostHeader from "./PostHeader";
import Separator from "./Separator";

function Post(props) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <PostHeader />
        <Image source={require("../assets/me.jpg")} style={styles.postpic} />
      </View>
      <View style={styles.buttons}>
        <PostButton />
        <Separator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 2 },
  container1: {
    height: 500,
    backgroundColor: colors.white,
    marginBottom: 10,
  },

  postpic: {
    width: "100%",
    height: "79%",
  },
  buttons: {},
});

export default Post;
