import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "../Components/AppText";
import Comment from "../Components/Comment";
import Icon from "../Components/Icon";
import Screen from "../Components/Screen";
import colors from "../config/colors";

const c = [
  {
    id: 1,
    title: "Asad Javed Sulemani",
    dp: require("../assets/me.jpg"),
    comment:
      " There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
  },
  {
    id: 2,
    title: "Mateen Akhtar",
    dp: require("../assets/couch.jpg"),
    comment: "For Sale, Price: Rs. 20000",
  },
  {
    id: 3,
    title: "Faheem Riaz",
    dp: require("../assets/favicon.png"),
    comment: "My Company's Logo",
  },
  {
    id: 4,
    title: "Ali Kumail",
    dp: require("../assets/adaptive-icon.png"),
    comment: "Life is a sad and tough path",
  },
  {
    id: 5,
    title: "Mateen Akhtar",
    dp: require("../assets/couch.jpg"),
    comment: "For Sale, Price: Rs. 20000",
  },
  {
    id: 6,
    title: "Faheem Riaz",
    dp: require("../assets/favicon.png"),
    comment: "My Company's Logo",
  },
  {
    id: 7,
    title: "Ali Kumail",
    dp: require("../assets/adaptive-icon.png"),
    comment: "Life is a sad and tough path",
  },
  {
    id: 8,
    title: "Mateen Akhtar",
    dp: require("../assets/couch.jpg"),
    comment: "For Sale, Price: Rs. 20000",
  },
  {
    id: 9,
    title: "Faheem Riaz",
    dp: require("../assets/favicon.png"),
    comment: "My Company's Logo",
  },
  {
    id: 10,
    title: "Ali Kumail",
    dp: require("../assets/adaptive-icon.png"),
    comment: "Life is a sad and tough path",
  },
  {
    id: 11,
    title: "Faheem Riaz",
    dp: require("../assets/favicon.png"),
    comment: "My Company's Logo",
  },
  {
    id: 12,
    title: "Ali Kumail",
    dp: require("../assets/adaptive-icon.png"),
    comment: "Life is a sad and tough path",
  },
];

function CommentScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={c}
        keyExtractor={(c) => c.id.toString()}
        ListFooterComponent={
          <View style={styles.ti}>
            <TextInput placeholder="Write a Comment..."></TextInput>
          </View>
        }
        ListFooterComponentStyle={{
          backgroundColor: colors.white,
          position: "absolute",
          width: "100%",
          bottom: 0,
        }}
        scroll
        renderItem={({ item }) => (
          <Comment title={item.title} dp={item.dp} comment={item.comment} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", marginTop: -40 },
  ti: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    marginTop: 1,
  },
});

export default CommentScreen;
