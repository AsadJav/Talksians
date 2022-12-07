import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import PageHeaderComponent from "../Components/PageHeaderComponent";
import Post from "../Components/Post";
import ProfileTitleComponent from "../Components/ProfileTitleComponent";
import colors from "../config/colors";

const posts = [
  {
    id: 1,
    title: "Asad Javed Sulemani",
    dp: require("../assets/me.jpg"),
    caption:
      " There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    image: require("../assets/me.jpg"),
  },
  {
    id: 2,
    title: "Mateen Akhtar",
    dp: require("../assets/couch.jpg"),
    caption: "For Sale, Price: Rs. 20000",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Faheem Riaz",
    dp: require("../assets/favicon.png"),
    caption: "My Company's Logo",
    image: require("../assets/favicon.png"),
  },
  {
    id: 4,
    title: "Ali Kumail",
    dp: require("../assets/adaptive-icon.png"),
    caption: "Life is a sad and tough path",
    image: require("../assets/adaptive-icon.png"),
  },
];
function UserPage({ navigation }) {
  return (
    <>
      <FlatList
        data={posts}
        keyExtractor={(posts) => posts.id.toString()}
        ListHeaderComponent={
          <>
            <View style={styles.container}>
              <Image
                source={require("../assets/couch.jpg")}
                style={styles.image}
              />
              <View style={styles.profileV}>
                <Image
                  source={require("../assets/me.jpg")}
                  style={styles.profileImage}
                />
              </View>
            </View>
            <ProfileTitleComponent title="Asad Javed Sulemani" />
          </>
        }
        renderItem={({ item }) => (
          <Post
            navigation={navigation}
            title={item.title}
            dp={item.dp}
            caption={item.caption}
            img={item.image}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { height: 350 },
  image: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  profileV: {
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: colors.white,
    position: "absolute",
    left: "30%",
    top: 200,
  },
  profileImage: {
    height: 130,
    width: 130,
    borderRadius: 65,
  },
});

export default UserPage;
