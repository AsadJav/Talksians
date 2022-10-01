import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Screen from "../Components/Screen";

import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../Components/AppText";
import colors from "../config/colors";
import AppTextInput from "../Components/AppTextInput";
import SubmitButton from "../Components/SubmitButton";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppText style={{ color: "white", fontSize: 28, fontWeight: "900" }}>
          T A L K S I A N S
        </AppText>
        <View style={styles.dContainer}>
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
            keybordType="password"
            textContentType="password"
            secureTextEntry
            icon="lock"
            placeholder="Password"
            name="password"
          />
        </View>
        <SubmitButton title="Login" />
      </AppForm>
      <View style={styles.textView}>
        <TouchableOpacity onPress={() => console.log("ForgetPassword")}>
          <AppText style={styles.text}>Forget Password?</AppText>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flex: 1,
  },
  dContainer: {
    marginTop: 200,
    marginBottom: 20,
  },
  text: {
    color: colors.white,
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
