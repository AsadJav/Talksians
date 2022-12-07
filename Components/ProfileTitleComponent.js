import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";
import Separator from "./Separator";

function ProfileTitleComponent({ title, btn, iconName, options }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>

      <View style={styles.btnView}>
        {btn && (
          <TouchableOpacity>
            <AppText style={styles.editButton}>{btn}</AppText>
          </TouchableOpacity>
        )}
        {iconName && (
          <TouchableOpacity>
            <Icon name={iconName} iconColor="purple" size={60} />
          </TouchableOpacity>
        )}
        {options && (
          <TouchableOpacity>
            <Icon
              name={options}
              iconColor="purple"
              size={60}
              style={styles.iconView}
            />
          </TouchableOpacity>
        )}
      </View>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 30,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "purple",
    color: "white",
    padding: 7,
    borderRadius: 7,
    fontWeight: "bold",
    marginRight: 20,
    alignItems: "center",
  },
});

export default ProfileTitleComponent;
