import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const [modelVisible, setmodelVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodelVisible(true)}>
        <View style={styles.screen}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icons}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="none">
        <Screen>
          <TouchableWithoutFeedback onPress={() => setmodelVisible(false)}>
            <Text
              style={{
                color: "blue",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "43%",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Close
            </Text>
          </TouchableWithoutFeedback>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setmodelVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    borderColor: colors.black,
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 8,
    marginBottom: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icons: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;
