import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
function Icon({ name, size = 40, iconColor = "white", onPress }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size * 0.5}
        color={iconColor}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    color: "white",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Icon;

//
