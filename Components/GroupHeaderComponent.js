import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import Screen from "./Screen";
import Separator from "./Separator";

function GroupHeaderComponent({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <AppText style={styles.AppText1}>Groups</AppText>
        <View style={styles.icon}>
          <Icon
            name="plus-circle"
            iconColor="black"
            size={50}
            onPress={() => navigation.navigate("CreateGroup")}
          />
        </View>
      </View>

      <View style={styles.SecondView}>
        <ScrollView horizontal={true}>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <AppText style={styles.AppText2}>Your Group</AppText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <AppText style={styles.AppText2}> Joined Groups</AppText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <AppText style={styles.AppText2}> Suggested Groups</AppText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <AppText style={styles.AppText2}> Discover New Groups</AppText>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,

    marginBottom: 5,
    backgroundColor: colors.white,
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 10,
  },
  AppText1: {
    fontSize: 26,
    fontWeight: "bold",
    marginRight: 70,
    color: colors.purple,
  },
  icon: { backgroundColor: colors.light, borderRadius: 25, marginLeft: 120 },
  btn: {
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  SecondView: {
    marginLeft: 10,
    flexDirection: "row",
  },
  AppText2: { fontSize: 18, fontWeight: "bold" },
});

export default GroupHeaderComponent;
