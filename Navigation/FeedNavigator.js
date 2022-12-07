import React from "react";
import { StyleSheet, View } from "react-native";

const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TimelineScreen from "../Screens/TimelineScreen";
import CreatePostScreen from "../Screens/CreatePostScreen";
import CommentScreen from "../Screens/CommentScreen";
import CreatePost from "../Components/CreatePost";
import Post from "../Components/Post";
import PostButton from "../Components/PostButton";

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Timeline" component={TimelineScreen} />
    <Stack.Screen name="ABC" component={CreatePostScreen} />
    <Stack.Screen name="Comment" component={CommentScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {},
});

export default FeedNavigator;
