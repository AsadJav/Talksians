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
import AuthNavigator from "./Navigation/AuthNavigator";
import MenuNavigator from "./Navigation/MenuNavigator";
import MessengerScreen from "./Screens/MessengerScreen";
import CreateGroup from "./Screens/CreateGroup";
import CreatePage from "./Screens/CreatePage";
import CommentScreen from "./Screens/CommentScreen";
import Comment from "./Components/Comment";
import TimelineScreen from "./Screens/TimelineScreen";
import PagesScreen from "./Screens/PagesScreen";
import ImgPicker from "./Components/ImgPicker";
import ImageInput from "./Components/ImageInput";
import UserPage from "./Screens/UserPage";
import PageComponent from "./Components/PageComponent";
import MyProfileScreen from "./Screens/MyProfileScreen";

export default function App() {
  return (
    // <WelcomeScreen />

    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    // <ForgetPasswordScreen />
    // <RegisterScreen />
    //<ImgPicker />
    // <CreatePostScreen />
    // <ImageInput />
    // <UserPage />
    // <PagesScreen />
    //<TimelineScreen />
    // <PageComponent />
    // <MyProfileScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

/*    <NavigationContainer>
      <TalksiansComponent />
      <AppNavbar />
    </NavigationContainer>


   */
//<AuthNavigator />
