import { View, Text, StyleSheet, Image, Pressable, TextInput } from "react-native";
import React from "react";

export default function PatientItem({navigation}: {navigation: any}) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#93989a" : "transparent",
        },
        styles.container,
      ]}
      onPress={() => navigation.navigate("PatientDetail")}
    >
      <View>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/avatardefault_92824.png")}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>Mai Văn Trường</Text>
        <Text style={styles.desc}>Bệnh: COVID 19</Text>
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
  },
  avatar: {
    width: 50,
    height: 50,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
  },
  desc: {
    color: "#333"
  },
  body: {
    paddingLeft: 8
  }
});
