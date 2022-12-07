import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../AppText";

function CommentNotification({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          source={require("../../assets/couch.jpg")}
          style={styles.image}
        />
        <AppText style={styles.title}>
          {name}
          <AppText style={styles.t}>
            {" "}
            commented on your post and wishing.
          </AppText>
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  head: {
    marginTop: 5,
    marginLeft: 5,
    flexDirection: "row",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  title: {
    marginLeft: 15,
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  t: { fontSize: 18 },
});

export default CommentNotification;
