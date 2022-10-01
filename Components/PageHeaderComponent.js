import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import Screen from "./Screen";
import Separator from "./Separator";

function PageHeaderComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <AppText style={styles.AppText1}>Pages</AppText>
        <View style={styles.icon}>
          <Icon name="plus-circle" iconColor="black" size={50} />
        </View>
        <View style={styles.icon}>
          <Icon name="cog" iconColor="black" size={50} />
        </View>
        <View style={styles.icon}>
          <Icon name="magnify" iconColor="black" size={50} />
        </View>
      </View>

      <View style={styles.SecondView}>
        <ScrollView horizontal={true}>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <AppText style={styles.AppText2}>Your Page</AppText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <AppText style={styles.AppText2}>liked Pages</AppText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <AppText style={styles.AppText2}> Suggested Pages</AppText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.btn}>
              <AppText style={styles.AppText2}> Discover New Pages</AppText>
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
    paddingBottom: 5,
    marginBottom: 20,
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  AppText1: {
    fontSize: 26,
    fontWeight: "bold",
    marginRight: 70,
    color: colors.purple,
  },
  icon: { backgroundColor: colors.light, borderRadius: 25, marginLeft: 10 },
  btn: {
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  SecondView: {
    marginLeft: 20,
    flexDirection: "row",
  },
  AppText2: { fontSize: 18, fontWeight: "bold" },
});

export default PageHeaderComponent;
