import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Screen from "./Screen";
import Icon from "./Icon";
import MessengerScreen from "../Screens/MessengerScreen";

function TalksiansComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <AppText style={styles.text}>Talksians</AppText>
        <View style={styles.icon}>
          <Icon
            name="facebook-messenger"
            size={50}
            iconColor="black"
            onPress={MessengerScreen}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  container1: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 27,
    //justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  text: {
    fontSize: 25,
    color: colors.purple,
    fontWeight: "bold",
    flexDirection: "row",
  },
  icon: {
    alignItems: "center",
    height: 34,
    width: 34,
    backgroundColor: colors.light,
    borderRadius: 17,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 180,
  },
});

export default TalksiansComponent;
