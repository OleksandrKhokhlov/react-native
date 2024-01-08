import { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import image from "../assets/photo-bg.jpg";
import avatar from "../assets/avatar.jpg";
import addBtn from "../assets/add.svg";

export default function Registration() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.imageBg}>
      <View style={styles.form}>
        <View style={styles.avatarWrapp}>
          <Image style={styles.avatar} source={avatar} />
          <Pressable style={styles.addBtn} onPress={() => console.log("click")}>
            <Image style={styles.addSvg} source={addBtn} />
          </Pressable>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.formWrapp}>
          <TextInput
            style={styles.input}
            inputMode="text"
            onChangeText={setLogin}
            value={login}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
          />
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
        <Pressable
          style={styles.regBtn}
          onPress={() => console.log("Зареєстуватися")}
        >
          <Text style={styles.regBtnText}>Зареєстуватися</Text>
        </Pressable>
        <Text style={styles.redirectToLogin} onPress={()=>console.log('Ok')}>Вже є акаунт? Увійти</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  form: {
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
    height: "100%",
    marginTop: 219,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
  avatarWrapp: {
    position: "absolute",
    left: "50%",
    top: 0,
    transform: "translate(-50%,-50%)",
  },
  imageBg: {
    width: "100%",
    flex: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addBtn: {
    width: 25,
    height: 25,
    right: 0,
    bottom: 14,
    transform: "translateX(50%)",
    position: "absolute",
  },
  addSvg: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    marginTop: 92,
    marginBottom: 32,
  },
  accentColor: {
    color: "#FF6C00",
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
  regBtn: {
    height: 51,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  regBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  redirectToLogin: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "#1B4371",
  },
});
