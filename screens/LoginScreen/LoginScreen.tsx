import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import LoginForm from "../../components/forms/LoginForm";


export default function LoginScreen({navigation}: {navigation: any}) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/images/background-start.png")}
      resizeMode="cover"
    >
      <View style={styles.containerView}>
        <Text style={styles.heading}>Healthy Life</Text>
        <Text style={styles.description}>
          Đăng nhập để nhận thông báo và xem tình trạng bệnh nhân
        </Text>
        <LoginForm />
        <Pressable style={styles.btnWrapper} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.forgotPassBtn}>Quên mật khẩu</Text>
        </Pressable>
        <View style={styles.registerWrapper}>
          <Text style={styles.viewRegister}>Chưa có tài khoản?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerBtn}>Đăng kí</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  containerView: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
  heading: {
    color: "#76b24f",
    fontSize: 52,
    fontWeight: "600",
    width: "100%",
    textAlign: "center",
  },
  description: {
    color: "#7a89a0",
    fontWeight: "600",
    fontSize: 16,
    width: "100%",
    textAlign: "center",
  },
  forgotPassBtn: {
    color: "#3ab4f2",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  registerBtn: {
    color: "#3ab4f2",
    fontSize: 16,
    marginLeft: 6
  },
  btnWrapper: {
    marginBottom: 6,
  },
  viewRegister: {
  },
  registerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});