import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../Components/Screen";
import * as Yup from "yup";
import colors from "../config/colors";
import AppText from "../Components/AppText";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import SubmitButton from "../Components/SubmitButton";
import { API } from "../services/api";

const validationSchema = Yup.object().shape({
  regno: Yup.string().required().min(11).max(12).label("Registertaion Number"),
  email: Yup.string().required().email().label("Email"),
});

function ForgetPasswordScreen({ navigation }) {
  const FP = async (info) => {
    let params = {
      email: info.email,
    };
    let r = await API.post("/user/recover-account", params);
    console.log(r);
    navigation.navigate("Login");
  };
  return (
    <Screen style={styles.container}>
      <AppText
        style={{
          color: "white",
          fontSize: 44,
          fontWeight: "bold",
          marginBottom: 80,
          marginTop: 20,
        }}
      >
        Forgot Password
      </AppText>
      <AppForm
        initialValues={{
          regno: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={FP}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="pen"
          name="regno"
          placeholder="Registration No."
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keybordType="email-address"
          textContentType="emailAddress"
          icon="email"
          name="email"
          placeholder="Email"
        />

        <SubmitButton title="Forgot" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flex: 1,
  },
});

export default ForgetPasswordScreen;
