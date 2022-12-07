import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Message from "../Components/Message";
import Screen from "../Components/Screen";

const messages = [
  {
    id: 1,
    title: "Ahmad Javed",
    description: "Any time",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 2,
    title: "Ali Imran",
    description: "Not Now. Something is wrong",
    image: require("../assets/favicon.png"),
  },
  {
    id: 3,
    title: "Mateen Ali",
    description: "Mobile Off",
    image: require("../assets/icon.png"),
  },
  {
    id: 4,
    title: "Asad Javed Sulemani",
    description: "KhushaaL Flats",
    image: require("../assets/me.jpg"),
  },
];
function MessengerScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <Message
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item.title + " " + "Success!")}
            renderRightActions={() => (
              <View style={{ backgroundColor: "red", width: 70 }}></View>
            )}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screens: {
    paddingTop: Platform.OS === "android" ? 22 : 0,
  },
});

export default MessengerScreen;
