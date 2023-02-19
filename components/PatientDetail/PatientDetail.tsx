import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";

type SelectProps = {
  selectedItem: Array<Object>;
  index: Number;
};

export default function PatientDetail() {
  const selectRef = useRef();
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Chi tiết bệnh nhân</Text>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#93989a" : "transparent",
            },
            styles.btnHover,
          ]}
        >
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="white"
          />
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.detailItem}>
          <Text style={styles.heading}>Họ và tên:</Text>
          <Text style={styles.info}>Mai Văn Trường</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.heading}>Ngày sinh:</Text>
          <Text style={styles.info}>25/08/2001</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.heading}>Bệnh điều trị:</Text>
          <Text style={styles.info}>COVID-19</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.heading}>Ngày bắt đầu:</Text>
          <Text style={styles.info}>22/05/2022</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.heading}>Ngày kết thúc:</Text>
          <Text style={styles.info}>Chưa kết thúc</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.heading}>Nhiệt độ:</Text>
          <Text style={styles.info}>36.75°C</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.heading}>Thiết bị:</Text>
          <Text style={styles.info}>Device Prototype</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.heading}>MAC thiết bị:</Text>
          <Text style={styles.info}>CC:50:E3:CD:55:E8</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.heading}>Kêt luận:</Text>
          <Text style={styles.info}>Chưa có</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.heading}>Tình trạng:</Text>
          <Text style={styles.info}>Đang điều trị</Text>
        </View>
      </View>
      <View style={styles.filter}>
        <FontAwesome5 name="temperature-high" size={30} color="black" />
        <View style={styles.dropDown}>
          <SelectDropdown
            data={countries}
            dropdownIconPosition="right"
            renderDropdownIcon={() => {
              return (
                <MaterialIcons name="arrow-drop-down" size={24} color="black" />
              );
            }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            onChangeSearchInputText={() => {}}
            search={true}
            rowTextStyle={styles.dropDown}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c1c1c1",
    flex: 1,
    position: "relative",
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
    backgroundColor: "#76b24f",
    marginVertical: 6,
    margin: 8,
    borderRadius: 6,
  },
  detailItem: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
  },
  info: {
    fontSize: 15,
  },
  filter: {
    margin: 10,
    borderStyle: "solid",
    borderTopColor: "#fff",
    borderTopWidth: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropDown: {
    paddingHorizontal: 10,
    borderRadius: 4
  },
});
