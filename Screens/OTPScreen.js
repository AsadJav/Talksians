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
  otp: Yup.number(255).required().min(1).label("OTP"),
});

function OTPScreen({ navigation }) {
  const Submit = async (verification) => {
    let params = {
      otp: verification.otp,
    };
    let r = await API.post("/user/verify", params);
    API.setItem("user", r);
    console.log(r);
    navigation.navigate("Login");
  };
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
        Verifiy of your OTP
      </AppText>
      <AppForm
        initialValues={{ otp: "" }}
        validationSchema={validationSchema}
        onSubmit={Submit}
        //onSubmit={() => navigation.navigate("Login")}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="door"
          name="otp"
          placeholder="Enter the OTP"
        />
        <SubmitButton title="Verify" />
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

export default OTPScreen;
