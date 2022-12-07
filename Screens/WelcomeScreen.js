import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppButton from "../Components/AppButton";
import AppNavbar from "../Components/AppNavbar";
import AppText from "../Components/AppText";
import colors from "../config/colors";
import { API } from "../services/api";
import TimelineScreen from "./TimelineScreen";

function WelcomeScreen({ navigation }) {
  const token = API.getItem("token");
  return token === "null" ? (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Talksians</Text>
      <Image
        source={require("../assets/COMSATS_new_logo.jpg")}
        style={styles.logo}
      />
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  ) : (
    <AppNavbar />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flex: 1,
  },
  logo: {
    height: 200,
    width: 200,
    marginLeft: "20%",
    marginTop: "80%",
    borderRadius: 150,
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
