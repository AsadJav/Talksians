import React from "react";
import { StyleSheet, View, Image } from "react-native";
import UserProfileHeader from "./UserProfileHeader";
import colors from "../config/colors";

function UserProfileComponent(props) {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../assets/couch.jpg")} style={styles.image} />
        <View style={styles.profileV}>
          <Image
            source={require("../assets/me.jpg")}
            style={styles.profileImage}
          />
        </View>
      </View>
      <UserProfileHeader />
    </>
  );
}

const styles = StyleSheet.create({
  container: { height: 350 },
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

export default UserProfileComponent;
