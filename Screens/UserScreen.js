import React from "react";
import { StyleSheet, View } from "react-native";
import MyProfie from "../Components/MyProfie";

function UserScreen(props) {
  return (
    <View style={styles.container}>
      <MyProfie
        title="Asad Javed Sulemani"
        profileImg={require("../assets/me.jpg")}
        btn="Send Friend Request"
        iconName="cog"
        options="plus-circle"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default UserScreen;
