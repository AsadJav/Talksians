import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import Screen from "./Screen";

import PagesScreen from "../Screens/PagesScreen";
import GroupScreen from "../Screens/GroupScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import TimelineScreen from "../Screens/TimelineScreen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MenuScreen from "../Screens/MenuScreen";
import TalksiansComponent from "./TalksiansComponent";

const Tab = createMaterialTopTabNavigator();

function AppNavbar(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={25}
              color={focused ? "purple" : "272727"}
            />
          ),
        }}
        component={TimelineScreen}
        name="Home"
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "flag" : "flag-outline"}
              size={25}
              color={focused ? "purple" : "272727"}
            />
          ),
        }}
        component={PagesScreen}
        name="Pages"
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={25}
              color={focused ? "purple" : "272727"}
            />
          ),
        }}
        component={GroupScreen}
        name="Groups"
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={25}
              color={focused ? "purple" : "272727"}
            />
          ),
        }}
        component={NotificationScreen}
        name="Notifications"
      />
      <Tab.Screen
        options={{
          title: ({ focused }) => (
            <Ionicons
              name={focused ? "menu" : "menu"}
              size={30}
              color={focused ? "purple" : "272727"}
            />
          ),
        }}
        component={MenuScreen}
        name="Menu"
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    backgroundColor: colors.purple,
  },
});

export default AppNavbar;

/*<Screen>
      <View style={styles.container}>
        <Icon name="home" iconColor="white" size={65} />
        <Icon name="flag" iconColor="white" size={65} />
        <Icon name="account-group" iconColor="white" size={65} />
        <Icon name="bell" iconColor="white" size={65} />
        <Icon name="menu" iconColor="white" size={65} />
      </View>
    </Screen> */
