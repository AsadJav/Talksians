import React from "react";
import { StyleSheet, View } from "react-native";

import * as Yup from "yup";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppText from "../Components/AppText";
import Screen from "../Components/Screen";
import SubmitButton from "../Components/SubmitButton";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().min(1).label("First Name"),
  lastname: Yup.string().required().min(1).label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  regno: Yup.string().required().min(11).max(12).label("Registertaion Number"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppText
        style={{
          color: "white",
          fontSize: 42,
          fontWeight: "bold",
          marginBottom: 40,
          marginTop: 20,
        }}
      >
        Register Yourself
      </AppText>
      <AppForm
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          regno: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="firstname"
          placeholder="First Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="lastname"
          placeholder="Last Name"
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
          keybordType="password"
          textContentType="password"
          secureTextEntry
          icon="lock"
          placeholder="Password"
          name="password"
        />
        <SubmitButton title="SignUp" />
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

export default RegisterScreen;
