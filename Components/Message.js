import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageComponent,
} from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

function Message({
  image,
  title,
  subtitle,
  onPress,
  ImageComponent,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.img} />}
          <View style={styles.imgContainer}>
            <AppText style={styles.name}>{title}</AppText>
            {subtitle && <AppText style={styles.listing}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  img: {
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 35,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  listing: {
    fontSize: 15,
    color: "black",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default Message;
