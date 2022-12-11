import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MyProfie from "../Components/MyProfie";
import Post from "../Components/Post";
import { API } from "../services/api";

function MyProfileScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [posts, setAllPosts] = useState([]);

  useEffect(() => {
    const get_Details = async () => {
      let r = await API.get("/user/profile");
      if (r.error) {
        setUser("");
      } else {
        setUser(r);
        console.log(r);
      }
    };
    get_Details();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      let r = await API.get("/post/user");

      if (r.error) {
        setAllPosts([]);
      } else {
        setAllPosts(r.posts);
      }
      console.log(r);
    };
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(posts) => posts._id}
        ListHeaderComponent={
          <MyProfie
            title={user.firstName + " " + user.lastName}
            profileImg={user.profileImage}
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
            likeNo={item.numberOfLike}
            commentNo={item.noComment}
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
