import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";
import Separator from "./Separator";
import colors from "../config/colors";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { API } from "../services/api";

function PostButton({ navigation, likeNo, commentNo }) {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.like}>
          <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
            <MaterialCommunityIcons
              name={liked ? "thumb-up" : "thumb-up-outline"}
              size={30}
              color={liked ? "purple" : "black"}
            />
          </Pressable>
          <AppText>{"        " + likeNo}</AppText>
        </View>
        <View style={styles.comment}>
          <Icon
            name="chat-outline"
            iconColor={colors.black}
            size={60}
            onPress={() => navigation.navigate("Comment")}
          />
          <AppText> {commentNo}</AppText>
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
  like: { flexDirection: "row", alignItems: "center", marginLeft: 50 },
  comment: { flexDirection: "row", alignItems: "center", marginLeft: 100 },
});

export default PostButton;
