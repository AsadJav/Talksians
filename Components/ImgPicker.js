import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";
import Screen from "./Screen";

const requestPermission = async () => {
  const result = await ImagePicker.requestCameraPermissionsAsync();
  if (!result.granted) alert("You need to enable camera roll permissions");
};

function ImgPicker(props) {
  const [imageUri, setImageUri] = useState();
  const selectImage = async () => {
    try {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!image.canceled) setImageUri(image.uri);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => setImageUri(null) },
        { text: "No" },
      ]);
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={25}
            style={{ justifyContent: "center", alignItems: "center" }}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderRadius: 15,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImgPicker;
