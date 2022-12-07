import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function PostHeader({ title, dp, caption }) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={{ uri: dp }} style={styles.image} />
        <AppText style={styles.title}>{title}</AppText>
        <TouchableWithoutFeedback>
          <View style={styles.icon}>
            <Icon name="dots-horizontal" size={50} iconColor="black" />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <AppText style={styles.description}>{caption}</AppText>
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
  icon: {
    position: "absolute",
    right: 10,
  },
});

export default PostHeader;
