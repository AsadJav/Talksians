import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import AppText from "./AppText";
import Separator from "./Separator";

function ProfileComponent({
  image,
  title,
  subtitle,
  onPress,
  ImageComponent,
  navigation,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.img} />}
          <View style={styles.imgContainer}>
            <AppText style={styles.name}>{title}</AppText>
            {subtitle && <AppText style={styles.listing}>{subtitle}</AppText>}
          </View>
        </View>
        <Separator />
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
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
    color: "gray",
  },
  imgContainer: {
    //justifyContent: "center",
    //alignItems: "center",
    marginLeft: 10,
  },
});

export default ProfileComponent;
