import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../Components/AppText";
import ListItem from "../Components/ListItem";
import ProfileComponent from "../Components/ProfileComponent";
import Screen from "../Components/Screen";
import Separator from "../Components/Separator";
import colors from "../config/colors";
import PageNavigator from "../Navigation/PageNavigator";
import { API } from "../services/api";

function MenuScreen({ navigation, img, title }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const get_posts = async () => {
      let r = await API.get("/user/profile");
      if (r.error) {
        setUser("");
      } else {
        setUser(r);
        console.log(r);
      }
    };

    get_posts();
  }, []);
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ProfileComponent
          image={{ uri: user.profileImage }}
          title={user.firstName + " " + user.lastName}
          subtitle="See your profile"
          onPress={() => navigation.navigate("MyProfile")}
        />
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <ListItem
            title="Friend Requests"
            iconName="flag"
            iconColor="purple"
          />
          <ListItem
            title="Friends"
            iconName="account-multiple"
            iconColor="purple"
            onPress={() => navigation.jumpTo("Group", { screen: "Menu" })}
          />
        </View>
        <View style={styles.container1}>
          <ListItem
            title="Notifications"
            iconName="bell"
            iconColor="purple"
            onPress={() => navigation.navigate("Notify")}
          />
          <ListItem
            title="Messages"
            iconName="facebook-messenger"
            iconColor="purple"
            onPress={() => navigation.navigate("Messenger")}
          />
        </View>
        <View style={styles.container1}>
          <ListItem
            title="Library"
            iconName="bookshelf"
            iconColor="purple"
            onPress={() => navigation.navigate("Library")}
          />
          <ListItem
            title="Settings"
            iconName="cog"
            iconColor="purple"
            onPress={() => navigation.navigate("Setting")}
          />
        </View>
        <View style={styles.btn}>
          <AppText
            style={styles.t}
            onPress={() => {
              API.removeItemValue("token");
              navigation.navigate("Login");
            }}
          >
            Logout
          </AppText>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -25,
  },
  screen: {
    backgroundColor: colors.light,
    flex: 1,
  },
  container1: {
    flexDirection: "row",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: colors.white,
  },
  t: { padding: 10, fontWeight: "bold", color: colors.purple },
});

export default MenuScreen;
