import React, { useState } from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import App from "../App";
import AppButton from "./AppButton";
import AppText from "./AppText";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

function PageComponent({ title, desc, logo }) {
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
      <View style={styles.View}>
        <View>
          <AppText style={styles.title}> {title}</AppText>
          <AppText style={styles.desc}>{desc}</AppText>
        </View>
        <View style={{ marginLeft: 70 }}>
          <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
            <MaterialCommunityIcons
              name={liked ? "thumb-up" : "thumb-up-outline"}
              size={40}
              color={liked ? "purple" : "black"}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },
  img: {
    marginRight: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 5,
  },
  View: {
    marginTop: 5,
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

export default PageComponent;
