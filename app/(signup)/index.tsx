import {
  View,
  Text,
  Pressable,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
} from "react-native"; import React, { useState } from 'react'
import { Link } from "expo-router";

export default function signupScreen() {
  const [password, setPassword] = useState("password");

  const handlePassword = () => {
    setPassword("");
  };
  return (
    <KeyboardAvoidingView className="w-full h-full flex-1 justify-center items-center  ">
      <ImageBackground
        source={require("../../assets/images/login.png")}
        resizeMode="cover"
        className="flex-1 w-full h-full flex-col items-center justify-end "
      >
        <View className=" w-full h-2/3  justify-start  items-center space-y-8 ">
        
          <TextInput
            id=" full name"
            className="bg-white rounded-full w-3/4   border-black border-2 h-12  p-3 shadow-lg shadow-black/80 "
            
            placeholder="full name "
            inputMode="text"
          />
          
          <TextInput
            id="email"
            className="bg-white rounded-full w-3/4 border-black border-2 h-12  p-3 shadow-lg shadow-black/80 "
            placeholder="email"
            inputMode="email"
          />
          <TextInput
            id="password"
            className="bg-white rounded-full w-3/4 border-black border-2 h-12  p-3 shadow-lg shadow-black/80"
          
            placeholder="password"
            secureTextEntry={true}
            inlineImageLeft=""
          />  
          <TextInput
            id="password confermation"
            className="bg-white rounded-full w-3/4 border-black border-2 h-12  p-3 shadow-lg shadow-black/80"
            placeholder='confirm password'
            secureTextEntry={true}
            inlineImageLeft=""
          />      
          <Pressable className="bg-primary w-3/4 rounded-full border-[1px]  h-12 justify-center items-center shadow-lg shadow-black/80">
            <Text className="text-2xl text-white"> sign up </Text>
          </Pressable>
          <Text className="text-gray-500">have an account ? <Link href={'(login)'} className="underline">login </Link></Text>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}