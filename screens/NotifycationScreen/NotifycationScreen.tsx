import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import NotificationNormal from "../../components/NotificationItem/NotificationNormal";
import NotificationDanger from "../../components/NotificationItem/NotificationDanger";

export default function NotifycationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Thông báo hệ thống</Text>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#93989a" : "transparent",
            },
            styles.btnHover,
          ]}
        >
          <Ionicons name="ios-notifications-outline" size={24} color="white" />
        </Pressable>
      </View>
      <NotificationNormal />
      <NotificationDanger />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1c1c1",
  },
  header: {
    height: 100,
    justifyContent: "space-between",
    backgroundColor: "#76b24f",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headingText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  btnHover: {
    padding: 4,
    borderRadius: 100,
  },
});
