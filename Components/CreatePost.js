import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";
import AppText from "./AppText";
import Icon from "./Icon";

function CreatePost({ onPress, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Image source={require("../assets/me.jpg")} style={styles.image} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("ABC")}>
          <View style={styles.container1}>
            <AppText style={styles.t1}>What's on your mind?</AppText>
          </View>
        </TouchableWithoutFeedback>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log("Photo Selected")}>
        <View style={styles.icon}>
          <Icon name="image-multiple" size={50} iconColor="green" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 3,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    position: "absolute",
    bottom: 7,
    left: 10,
  },
  container1: {
    borderWidth: 1,
    flex: 1,
    borderColor: colors.gray,
    borderRadius: 30,
    marginLeft: 60,
  },
  t1: {
    fontSize: 15,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default CreatePost;
