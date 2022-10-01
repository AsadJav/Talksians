import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import AppText from "../Components/AppText";
import GroupHeaderComponent from "../Components/GroupHeaderComponent";
import Post from "../Components/Post";

function GroupScreen(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <GroupHeaderComponent />
        <Post />
        <Post />
        <Post />
        <Post />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GroupScreen;
