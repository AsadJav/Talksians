import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { API } from "../services/api";
import Screen from "../Components/Screen";

import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../Components/AppText";
import colors from "../config/colors";
import AppTextInput from "../Components/AppTextInput";
import SubmitButton from "../Components/SubmitButton";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppButton from "../Components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const login = async (logininfo) => {
    let params = { email: logininfo.email, password: logininfo.password };
    let r = await API.post("/user/login", params);
    if (r.token === undefined || r.token === null) {
      console.log("invalid cridentils");
    } else {
      API.setItem("user", r.User);
      API.setItem("token", r.token);

      navigation.navigate("Feed");
    }
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={login}
        validationSchema={validationSchema}
      >
        <AppText
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "900",
            marginTop: 50,
          }}
        >
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
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
          <AppText style={styles.text}>Forget Password?</AppText>
        </TouchableOpacity>
      </View>
      <AppButton
        title="Create New Account"
        style={{ borderRadius: 0, marginTop: 100 }}
        onPress={() => navigation.navigate("Register")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flex: 1,
  },
  dContainer: {
    marginTop: 150,
    marginBottom: 20,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
