import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../Components/AppText";
import PageHeaderComponent from "../Components/PageHeaderComponent";
import Post from "../Components/Post";

function PagesScreen(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeaderComponent />
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

export default PagesScreen;
