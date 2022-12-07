import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../Components/AppText";
import CommentNotification from "../Components/Notifications/CommentNotification";
import FriendRequestNotification from "../Components/Notifications/FriendRequestNotification";
import LikedNotification from "../Components/Notifications/LikedNotification";
import NotificationHeader from "../Components/Notifications/NotificationHeader";
import Screen from "../Components/Screen";

function NotificationScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <NotificationHeader />
      <LikedNotification name="Mateen Akhtar" />
      <FriendRequestNotification name="Faheem Ahamd Riaz" />
      <CommentNotification name="Waseem Akram" />
      <LikedNotification name="Mateen Akhtar" />
      <FriendRequestNotification name="Faheem Ahamd Riaz" />
      <CommentNotification name="Waseem Akram" />
      <LikedNotification name="Mateen Akhtar" />
      <FriendRequestNotification name="Faheem Ahamd Riaz" />
      <CommentNotification name="Waseem Akram" />
      <LikedNotification name="Mateen Akhtar" />
      <FriendRequestNotification name="Faheem Ahamd Riaz" />
      <CommentNotification name="Waseem Akram" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 5,
  },
});

export default NotificationScreen;
