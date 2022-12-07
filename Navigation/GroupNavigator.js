import React from "react";
import { StyleSheet, View, AppRegistry } from "react-native";
import CommentScreen from "../Screens/CommentScreen";
import CreatePostScreen from "../Screens/CreatePostScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroupScreen from "../Screens/GroupScreen";
import CreateGroup from "../Screens/CreateGroup";
const Stack = createNativeStackNavigator();

const GroupNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Group" component={GroupScreen} />
    <Stack.Screen name="CreateGroup" component={CreateGroup} />
    <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    <Stack.Screen name="Comment" component={CommentScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {},
});

export default GroupNavigator;
