import {
View,
Text,
Pressable,
ImageBackground,
TextInput,
KeyboardAvoidingView,
} from "react-native";

import { Link } from "expo-router";
import React, { useState } from "react";
export default function loginScreen() {
const [placeholder, setPlaceholder] = useState("email");
const [password, setPassword] = useState("password");
const handlePlaceholder = () => {
  setPlaceholder("");
};
const handlePassword = () => {
  setPassword("");
};
return (
  <KeyboardAvoidingView className="w-full h-full flex-1 justify-center items-center ">
    <ImageBackground
      source={require("../../assets/images/login.png")}
      resizeMode="cover"
      className="flex-1 w-full h-full flex-col items-center justify-end "
    >
      <View className=" w-full h-2/3  justify-start  items-center ">
        <View className="w-full  h-1/2 justify-between mt-10 items-center">
          <TextInput
            id="email"
            className="bg-white rounded-full w-3/4   border-black border-2 h-12  p-3 shadow-lg shadow-black/80 "
            onFocus={handlePlaceholder}
            placeholder={placeholder}
            inputMode="email"
          />
          <TextInput
            id="password"
            className="bg-white rounded-full w-3/4 border-black border-2 h-12  p-3 shadow-lg shadow-black/80"
            onFocus={handlePassword}
            placeholder={password}
            secureTextEntry={true}
            inlineImageLeft=""
          />
          <Pressable className="bg-primary w-3/4 rounded-full border-[1px] h-12 justify-center items-center shadow-lg shadow-black/80">
            <Text className="text-2xl text-white"> login </Text>
          </Pressable>
          
          <Text className="text-sm text-gray-800">
            {" "}
            dont have an account?{" "}
            <Link href={"/(signup)"} className="text-primary">
              {" "}
              create one
            </Link>{" "}
          </Text>
        </View>
        <View>
        </View>
        <View className="w-full  items-center justify-center h-1/2">
          <Text className="text-base text-gray-500">
            login as a{" "}
            <Link
              href={"/(tabs)"}
              className="underline underline-offset-4 h-full"
            >
              guest
            </Link>{" "}
          </Text>
        </View>
      </View>
    </ImageBackground>
  </KeyboardAvoidingView>
);
}
