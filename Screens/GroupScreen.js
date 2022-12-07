import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, FlatList } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import AppText from "../Components/AppText";
import GroupHeaderComponent from "../Components/GroupHeaderComponent";
import Post from "../Components/Post";
import { API } from "../services/api";

function GroupScreen({ navigation }) {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const get_posts = async () => {
      let r = await API.get("/post/");
      if (r.error) {
        setposts([]);
      } else {
        setposts(r.post);
      }
    };
    get_posts();
  }, []);
  return (
    <FlatList
      data={posts}
      keyExtractor={(posts) => posts._id}
      ListHeaderComponent={<GroupHeaderComponent navigation={navigation} />}
      renderItem={({ item }) => (
        <Post
          navigation={navigation}
          title={item.user}
          caption={item.description}
          img={item.file}
        />
      )}
    />
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
