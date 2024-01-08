import { useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import image from "../assets/photo-bg.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBg}>
      <View style={styles.form}>
        <Text style={styles.title}>Увійти</Text>
        <View style={styles.formWrapp}>
          <TextInput
            style={styles.input}
            inputMode="email"
            onChangeText={setEmail}
            value={email}
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
          />
          <TextInput
            style={styles.input}
            inputMode="text"
            onChangeText={setPassword}
            value={password}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
          />
        </View>
        <Pressable style={styles.logBtn} onPress={() => console.log("Увійти")}>
          <Text style={styles.logBtnText}>Увійти</Text>
        </Pressable>
        <Text style={styles.redirectLink} onPress={() => console.log("Ok")}>
          Немає акаунту? Зареєструватися
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    width: "100%",
    flex: 1,
  },
  form: {
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
    height: "100%",
    marginTop: 279,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
  },
  formWrapp: {
    gap: 16,
    marginBottom: 43,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    height: 50,
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
  },
  logBtn: {
    height: 51,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  logBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  redirectLink: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "#1B4371",
  },
});
