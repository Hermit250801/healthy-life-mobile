import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons  } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <AntDesign name="arrowleft" size={24} color="black" />
      <Ionicons name="options" size={24} color="black" />
        {/* <Ionicons name="arrow-back" color="#fff" size={36} />
      <SimpleLineIcons name="options" color="#fff" size={36} /> */}
      </View>

      <View style={styles.body}>
        <TouchableOpacity style={styles.background}>
          <Image
            source={require("../../assets/images/background.jpg")}
            style={styles.banner}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.avatarContainer}>
            <Image
              source={require("../../assets/images/avatardefault_92824.png")}
              style={styles.avatar}
            />
          </TouchableOpacity>

          <View style={styles.nameContainer}>
            <Text style={styles.name}>{"Mai Văn Trường"}</Text>
          </View>

          <View style={styles.statusContainer}>
            <Text style={styles.status}>About: Bác sĩ đa khoa</Text>

            <TouchableOpacity>
              {/* <Feather color={"#000"} size={20} name="edit-2" /> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  header: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    left: 12,
    top: 6,
    right: 12,
    elevation: 99,
    zIndex: 99,
  },
  body: {},
  background: {
    position: "relative",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: -50,
    left: "50%",
    right: "50%",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: -110,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  status: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
  nameContainer: {
    position: "absolute",
    bottom: -80,
    left: "50%",
    transform: [{ translateX: -48 }],
    zIndex: 9,
    elevation: 9,
  },
  name: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
  banner: {
    position: "relative",
    height: 300,
    elevation: 3,
    width: "100%"
  },
  textError: {
    color: "#FF9494",
    fontWeight: "600",
    fontStyle: "italic",
  },
  modal: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  modalTextError: {
    fontSize: 18,
    color: "#FF9494",
    fontWeight: "600",
    textAlign: "center",
  },
  modalDesc: {
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 12,
  },
  modalPressOk: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  borderRadius: {
    borderRadius: 100,
  },
  modalTextOk: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    textAlign: "center",
    borderRadius: 100,
    color: "#fff",
  },
});
