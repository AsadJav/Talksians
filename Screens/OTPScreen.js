import React from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../Components/Screen";
import * as Yup from "yup";
import colors from "../config/colors";
import AppText from "../Components/AppText";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import SubmitButton from "../Components/SubmitButton";

const validationSchema = Yup.object().shape({
  otp: Yup.number(255).required().min(4).max(5).label("OTP"),
});

function OTPScreen(props) {
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
        Verification of your OTP
      </AppText>
      <AppForm
        initialValues={{ otp: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
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
