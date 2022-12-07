import React from "react";
import { StyleSheet, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import OTPScreen from "../Screens/OTPScreen";
import AppNavbar from "../Components/AppNavbar";
import AppNavigator from "./AppNavigator";
import ForgetPasswordScreen from "../Screens/ForgetPasswordScreen";
import MyProfie from "../Components/MyProfie";
import MenuScreen from "../Screens/MenuScreen";
import PagesScreen from "../Screens/PagesScreen";
import GroupScreen from "../Screens/GroupScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import MessengerScreen from "../Screens/MessengerScreen";
import TalksiansComponent from "../Components/TalksiansComponent";
import CreatePost from "../Components/CreatePost";
const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={WelcomeScreen}
  >
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Forgot" component={ForgetPasswordScreen} />
    <Stack.Screen name="OTP" component={OTPScreen} />
    <Stack.Screen name="Feed" component={AppNavigator} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {},
});

export default AuthNavigator;
