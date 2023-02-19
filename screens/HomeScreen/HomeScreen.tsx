import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import PatientItem from "../../components/PatientItem/PatientItem";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Bệnh nhân</Text>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#93989a" : "transparent",
            },
            styles.btnHover,
          ]}
        >
          <Ionicons name="search-outline" size={24} color="white" />
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.searchContainer}>
          <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10 }}>
            <TextInput
              placeholder="Tìm kiếm"
              style={styles.inputSearch}
            ></TextInput>
          </View>
          <View>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#93989a" : "transparent",
                },
                styles.btnSearch,
              ]}
            >
              <Ionicons name="search-outline" size={24} color="white" />
            </Pressable>
          </View>
        </View>

        <PatientItem navigation={navigation} />
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#93989a" : "transparent",
          },
          styles.btnPlus,
        ]}
      >
        <FontAwesome5 name="plus" size={24} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c1c1c1",
    flex: 1,
    position: "relative"
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
  body: {
    flex: 1,
  },
  inputSearch: {
    backgroundColor: "#fff",
    padding: 6,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnSearch: {
    backgroundColor: "#76b24f",
    padding: 7,
    marginRight: 6,
    borderRadius: 4,
  },
  btnPlus: {
    backgroundColor: "#76b24f",

    padding: 12,
    borderRadius: 130,
    position: "absolute",
    bottom: 30,
    right: 20
  },
});
