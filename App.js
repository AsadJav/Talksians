import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavbar from "./Components/AppNavbar";
import TalksiansComponent from "./Components/TalksiansComponent";
import ForgetPasswordScreen from "./Screens/ForgetPasswordScreen";
import LoginScreen from "./Screens/LoginScreen";
import OTPScreen from "./Screens/OTPScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import CreatePost from "./Components/CreatePost";
import CreatePostScreen from "./Screens/CreatePostScreen";
import ListItem from "./Components/ListItem";
import Post from "./Components/Post";
import MyProfie from "./Components/MyProfie";
import UserProfileComponent from "./Components/UserProfileComponent";
import GroupHeaderComponent from "./Components/GroupHeaderComponent";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavbar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/*    <NavigationContainer>
      <TalksiansComponent />
      <AppNavbar />
    </NavigationContainer>
   */
