import React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import AppText from "../Components/AppText";
import Icon from "../Components/Icon";
import Screen from "../Components/Screen";
import colors from "../config/colors";
import AppForm from "../Components/AppForm";
import FormImagePicker from "../Components/FormImagePicker";
import AppFormField from "../Components/AppFormField";
import SubmitButton from "../Components/SubmitButton";
import AppFormPicker from "../Components/AppFormPicker";
import * as Yup from "yup";
import { API } from "../services/api";
import ImgPicker from "../Components/ImgPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array(),
});

const categories = [
  { label: "Public", value: 1 },
  { label: "Private", value: 2 },
];

function CreatePostScreen({ navigation }) {
  const Post = async (postinfo) => {
    let formdata = { image: postinfo.images, location: "asddas asddd" };
    let { data, status } = API.post(`/user/upload`, formdata);
    console.log(data.url);
    let params = {
      file: postinfo.file,
      title: postinfo.title,
      description: postinfo.description,
      isPublic: postinfo.isPublic,
    };
    let r = await API.post("/post/", params);
    console.log(r);
    navigation.navigate("Timeline");
  };

  return (
    <Screen style={styles.c}>
      <AppForm
        initialValues={{
          title: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={Post}
      >
        <ImgPicker />
        <AppFormField
          name="title"
          placeholder="Post Title (Optional)"
          maxLength={18}
        />
        <AppFormField
          name="description"
          placeholder="Captions"
          multiline
          numberOfLines={3}
        />

        <SubmitButton title="Post" style={styles.btn} Fontcolor="white" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  c: { backgroundColor: "white", height: "100%" },
  btn: {
    marginTop: 100,
    backgroundColor: "purple",
  },
  container: {
    marginTop: 70,
    flexDirection: "row",
    backgroundColor: "white",
  },
  image: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    position: "absolute",
    bottom: 7,
  },
  c1: {
    position: "relative",
    top: -35,
    left: 10,
    marginTop: 30,
  },
  t1: {
    fontSize: 16,
    marginLeft: 60,
    fontWeight: "bold",
  },
  c2: {
    position: "relative",
    top: 0,
    left: -130,
    marginTop: 30,
  },
  t2: {
    color: colors.gray,
    fontSize: 14,
    borderWidth: 2,
    borderColor: colors.light,
    borderRadius: 10,
  },
  t3: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 14,
  },
});

export default CreatePostScreen;
