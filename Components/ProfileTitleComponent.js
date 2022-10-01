import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";
import Separator from "./Separator";

function ProfileTitleComponent(props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Asad Javed Sulemani</AppText>

      <View style={styles.btnView}>
        <TouchableOpacity>
          <AppText style={styles.editButton}>Edit Your Profile</AppText>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="cog" iconColor="purple" size={60} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="dots-horizontal"
            iconColor="purple"
            size={60}
            style={styles.iconView}
          />
        </TouchableOpacity>
      </View>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
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
