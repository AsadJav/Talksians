import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../Components/AppText";
import CreatePost from "../Components/CreatePost";
import Post from "../Components/Post";
import TalksiansComponent from "../Components/TalksiansComponent";
import colors from "../config/colors";

function TimelineScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CreatePost />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray,
  },
});

export default TimelineScreen;
