import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppNavbar from "../Components/AppNavbar";
import TalksiansComponent from "../Components/TalksiansComponent";
import MenuScreen from "../Screens/MenuScreen";
import CreatePost from "../Components/CreatePost";
import PagesScreen from "../Screens/PagesScreen";
import GroupScreen from "../Screens/GroupScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import MessengerScreen from "../Screens/MessengerScreen";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfie from "../Components/MyProfie";
import CreatePostScreen from "../Screens/CreatePostScreen";

function AppNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function Home(props) {
  return <AppNavbar />;
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
});

export default AppNavigator;
