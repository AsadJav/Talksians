import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MyProfie from "../Components/MyProfie";
import Post from "../Components/Post";
import { API } from "../services/api";

function MyProfileScreen({ navigation }) {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const get_posts = async () => {
      let r = await API.get("/post");
      if (r.error) {
        setposts([]);
      } else {
        setposts(r.post);
      }
    };
    get_posts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(posts) => posts._id}
        ListHeaderComponent={
          <MyProfie
            title="Asad Javed Sulemani"
            btn="Edit Your Profile"
            iconName="cog"
            options="plus-circle"
          />
        }
        renderItem={({ item }) => (
          <Post
            navigation={navigation}
            title={item.user}
            caption={item.description}
            img={item.file}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MyProfileScreen;
