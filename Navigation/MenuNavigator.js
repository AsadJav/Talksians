import React from "react";
import { StyleSheet, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../Screens/MenuScreen";
import PagesScreen from "../Screens/PagesScreen";
import GroupScreen from "../Screens/GroupScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import MyProfie from "../Components/MyProfie";
import MessengerScreen from "../Screens/MessengerScreen";
import TalksiansComponent from "../Components/TalksiansComponent";
import CreatePost from "../Components/CreatePost";
import SettingScreen from "../Screens/SettingScreen";
import LibraryScreen from "../Screens/LibraryScreen";
import MyProfileScreen from "../Screens/MyProfileScreen";
const Stack = createNativeStackNavigator();

const MenuNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="Group" component={GroupScreen} />
    <Stack.Screen name="Setting" component={SettingScreen} />
    <Stack.Screen name="Library" component={LibraryScreen} />
    <Stack.Screen name="Messenger" component={MessengerScreen} />
    <Stack.Screen name="MyProfile" component={MyProfileScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {},
});

export default MenuNavigator;
