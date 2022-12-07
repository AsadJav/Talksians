import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Screen from "../Components/Screen";
import colors from "../config/colors";
import AppForm from "../Components/AppForm";
import FormImagePicker from "../Components/FormImagePicker";
import AppFormField from "../Components/AppFormField";
import SubmitButton from "../Components/SubmitButton";
import * as Yup from "yup";
import AppText from "../Components/AppText";
import ImgPicker from "../Components/ImgPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  description: Yup.string().label("Description"),
  logo: Yup.array().required(),
  images: Yup.array().required(),
});

function CreateGroup({ navigation }) {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <AppForm
          initialValues={{
            title: "",
            description: "",
            logo: [],
            images: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log("hit validation")}
        >
          <AppFormField name="title" placeholder="Group Title" maxLength={18} />
          <AppFormField
            name="description"
            placeholder="Description"
            multiline
            numberOfLines={3}
          />
          <AppText>Logo:</AppText>
          <ImgPicker />
          <AppText>Cover Photo:</AppText>
          <ImgPicker />
          <SubmitButton title="Post" style={styles.btn} Fontcolor="white" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 50,
    backgroundColor: "purple",
  },
  container: { backgroundColor: "white" },
});

export default CreateGroup;
