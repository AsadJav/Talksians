import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Talksians</Text>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flex: 1,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
  text: {
    fontSize: 50,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
    position: "absolute",
    top: 120,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default WelcomeScreen;
