import React from "react";
import { StyleSheet, View, AppRegistry } from "react-native";
import CreatePost from "../Components/CreatePost";
import CommentScreen from "../Screens/CommentScreen";
import CreatePage from "../Screens/CreatePage";
import CreatePostScreen from "../Screens/CreatePostScreen";
import PagesScreen from "../Screens/PagesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import YourPagesScreen from "../Screens/YourPagesScreen";
const Stack = createNativeStackNavigator();

const PageNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Page" component={PagesScreen} />
    <Stack.Screen name="CreatePage" component={CreatePage} />
    <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    <Stack.Screen name="Comment" component={CommentScreen} />
    <Stack.Screen name="YourPages" component={YourPagesScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {},
});

export default PageNavigator;
