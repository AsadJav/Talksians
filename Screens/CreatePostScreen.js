import React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import AppText from "../Components/AppText";
import Icon from "../Components/Icon";
import Screen from "../Components/Screen";
import colors from "../config/colors";

function CreatePostScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../assets/me.jpg")} style={styles.image} />
        <View style={styles.c1}>
          <AppText style={styles.t1}>Asad Javed Sulemani</AppText>
        </View>
        <View style={styles.c2}>
          <AppText style={styles.t2}>Public</AppText>
        </View>
        <Icon name="image-multiple" size={50} iconColor="green" />
      </View>
      <TextInput placeholder="Please Say Something..." style={styles.t3} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "white",
  },
  image: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    position: "absolute",
    bottom: 7,
  },
  c1: {
    position: "relative",
    top: -35,
    left: 10,
    marginTop: 30,
  },
  t1: {
    fontSize: 16,
    marginLeft: 60,
    fontWeight: "bold",
  },
  c2: {
    position: "relative",
    top: 0,
    left: -130,
    marginTop: 30,
  },
  t2: {
    color: colors.gray,
    paddingLeft: 5,
    fontSize: 14,
    borderWidth: 2,
    borderColor: colors.light,
    borderRadius: 10,
  },
  t3: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 14,
  },
});

export default CreatePostScreen;
