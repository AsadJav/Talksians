import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { API } from "../services/api";
import AppText from "../Components/AppText";
import CreatePost from "../Components/CreatePost";
import Post from "../Components/Post";
import colors from "../config/colors";

function TimelineScreen({ navigation }) {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const get_posts = async () => {
      let r = await API.get("/post/");
      if (r.error) {
        setposts([]);
      } else {
        setposts(r.post.reverse());
      }
    };
    get_posts();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(posts) => posts._id}
        ListHeaderComponent={<CreatePost navigation={navigation} />}
        renderItem={({ item }) => (
          <Post
            title={item.user}
            caption={item.description}
            img={item.file}
            likeNo={item.numberOfLike}
            commentNo={item.noComment}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: colors.gray,
  },
});

export default TimelineScreen;
