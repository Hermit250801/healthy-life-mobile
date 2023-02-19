import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function NotificationDanger() {
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
          source={require("../../assets/images/notification-error.png")}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>Bệnh nhân: Mai Văn Trường nhiệt độ khác thường</Text>
        <Text style={styles.desc}>Nhấn để xem chi tiết</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#e77575",
      flexDirection: "row",
      alignItems: "center",
      padding: 6,
      margin: 8,
      borderRadius: 6
    },
    avatar: {
      width: 30,
      height: 30,
      borderRadius: 6
    },
    heading: {
      fontSize: 18,
      fontWeight: "600",
      color: "#eb0909"
    },
    desc: {
      color: "#333",
    },
    body: {
      paddingLeft: 8,
    },
  });
  