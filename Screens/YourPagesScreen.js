import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PageComponent from "../Components/PageComponent";

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
function YourPagesScreen(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PageComponent
            title={item.title}
            desc={item.description}
            logo={item.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});

export default YourPagesScreen;
