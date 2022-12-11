import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GroupComponent from "../Components/GroupComponent";
import Screen from "../Components/Screen";

const messages = [
  {
    id: 1,
    title: "Facebook",
    description: "Social Media Platform",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 2,
    title: "Twitter",
    description: "Social Media Platform",
    image: require("../assets/favicon.png"),
  },
  {
    id: 3,
    title: "Instagram",
    description: "Social Media Platform",
    image: require("../assets/icon.png"),
  },
  {
    id: 4,
    title: "SnapChat",
    description: "Social Media Platform",
    image: require("../assets/me.jpg"),
  },
];
function AllGroupsScreen(props) {
  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <GroupComponent
            img={item.image}
            title={item.title}
            desc={item.description}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AllGroupsScreen;
