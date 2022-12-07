import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title, onPress, style, Fontcolor }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      style={style}
      fcolor={Fontcolor}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SubmitButton;
