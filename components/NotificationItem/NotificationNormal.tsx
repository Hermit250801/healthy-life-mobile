import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

export default function NotificationNormal() {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#93989a" : "transparent",
        },
        styles.container,
      ]}
    >
      <View>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/notification.png")}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>Bệnh nhân: Mai Văn Trường nhiệt độ bình thường</Text>
        <Text style={styles.desc}>Nhấn để xem chi tiết</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    margin: 8,
    borderRadius: 6
  },
  avatar: {
    width: 30,
    height: 30,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
  },
  desc: {
    color: "#333",
  },
  body: {
    paddingLeft: 8,
  },
});
