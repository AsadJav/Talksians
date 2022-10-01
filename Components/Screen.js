import React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screens, style]}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screens: {
    paddingTop: Platform.OS === "android" ? 22 : 0,
  },
  container: {
    padding: 20,
  },
});
export default Screen;
