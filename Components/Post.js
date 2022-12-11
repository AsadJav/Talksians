import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import PostButton from "./PostButton";
import PostHeader from "./PostHeader";
import Separator from "./Separator";
import { API } from "../services/api";

function Post({ title, caption, dp, img, navigation, likeNo, commentNo }) {
  if (img === undefined || typeof img == "number") {
    return <View></View>;
  } else {
    const [user, setUser] = useState(null);
    useEffect(() => {
      const userUrl = "/user/" + title;
      const userDetails = async () => {
        const response = await API.get(userUrl);
        if (response._id !== undefined) {
          setUser(response);
        }
      };
      userDetails();
    }, []);
    return user === null ? (
      <View>
        <AppText>No Post to Show</AppText>
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.container1}>
          <PostHeader
            title={user.firstName + " " + user.lastName}
            caption={caption}
            dp={user.profileImage}
          />
          <Image source={{ uri: img }} style={styles.postpic} />
        </View>
        <View style={styles.buttons}>
          <PostButton
            navigation={navigation}
            likeNo={likeNo}
            commentNo={commentNo}
          />
          <Separator />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginBottom: 2 },
  container1: {
    height: 500,
    backgroundColor: colors.white,
  },

  postpic: {
    width: "100%",
    height: "100%",
  },
  buttons: {},
});

export default Post;
