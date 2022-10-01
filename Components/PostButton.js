import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import Separator from "./Separator";
import colors from "../config/colors";

function PostButton(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.like}>
          <Icon
            name="thumb-up-outline"
            iconColor={colors.black}
            size={60}
            onPress={() => console.log("liked")}
          />
          <AppText> 2.1k</AppText>
        </View>
        <View style={styles.comment}>
          <Icon name="chat-outline" iconColor={colors.gray} size={60} />
          <AppText> 32</AppText>
        </View>
      </View>
      <Separator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    elevation: 10,
    backgroundColor: colors.white,
  },
  like: { flexDirection: "row", alignItems: "center", marginLeft: 35 },
  comment: { flexDirection: "row", alignItems: "center", marginLeft: 70 },
});

export default PostButton;
