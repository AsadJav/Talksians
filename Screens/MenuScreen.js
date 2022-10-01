import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../Components/AppText";
import ListItem from "../Components/ListItem";
import ProfileComponent from "../Components/ProfileComponent";
import Screen from "../Components/Screen";
import Separator from "../Components/Separator";
import colors from "../config/colors";
const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.sec },
    targetScreen: "Messages",
  },
];

function MenuScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ProfileComponent
          image={require("../assets/me.jpg")}
          title="Asad Javed Sulemani"
          subtitle="See your profile"
        />
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <ListItem title="Pages" iconName="flag" iconColor="purple" />
          <ListItem
            title="Groups"
            iconName="account-multiple"
            iconColor="purple"
          />
        </View>
        <View style={styles.container1}>
          <ListItem title="Notifications" iconName="bell" iconColor="purple" />
          <ListItem
            title="Messages"
            iconName="facebook-messenger"
            iconColor="purple"
          />
        </View>
        <View style={styles.container1}>
          <ListItem title="Library" iconName="bookshelf" iconColor="purple" />
          <ListItem title="Settings" iconName="cog" iconColor="purple" />
        </View>
        <View style={styles.btn}>
          <AppText style={styles.t}>Logout</AppText>
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
    elevation: 15,
    shadowOffset: 30,
  },
  t: { padding: 10, fontWeight: "bold", color: colors.purple },
});

export default MenuScreen;
