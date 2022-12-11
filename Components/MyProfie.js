import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import ProfileTitleComponent from "./ProfileTitleComponent";
import Screen from "./Screen";

function MyProfie({
  navigation,
  title,
  btn,
  iconName,
  options,
  style,
  Coverimg,
  profileImg,
}) {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../assets/couch.jpg")} style={styles.image} />
        <View style={styles.profileV}>
          <Image source={{ uri: profileImg }} style={styles.profileImage} />
        </View>
      </View>
      <ProfileTitleComponent
        title={title}
        btn={btn}
        iconName={iconName}
        options={options}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { height: 350, backgroundColor: "white" },
  image: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  profileV: {
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: colors.white,
    position: "absolute",
    left: "30%",
    top: 200,
  },
  profileImage: {
    height: 130,
    width: 130,
    borderRadius: 65,
  },
});

export default MyProfie;
