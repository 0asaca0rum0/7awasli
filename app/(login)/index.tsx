import {
View,
Text,
Pressable,
ImageBackground,
TextInput,
KeyboardAvoidingView,
Image,
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
const handlepress = () => {
  console.log(placeholder);
  console.log(password);
}
return (
	<KeyboardAvoidingView className="w-full h-full flex-1 justify-center items-center ">
		<ImageBackground
			source={require("../../assets/images/login.png")}
			resizeMode="cover"
			className="flex-1 w-full h-full flex-col items-center justify-end "
		>
			<View className=" w-full h-2/3  justify-start  items-center ">
				<View className="w-full  h-4/5 justify-evenly mt-5 items-center space-y-2 ">
					<TextInput
						id="email"
						className="bg-white rounded-full w-3/4   h-12  p-3 shadow-lg shadow-black/80 "
						onFocus={handlePlaceholder}
						placeholder={placeholder}
						inputMode="email"
					/>
					<TextInput
						id="password"
						className="bg-white rounded-full w-3/4   h-12  p-3 shadow-lg shadow-black/80"
						onFocus={handlePassword}
						placeholder={password}
						secureTextEntry={true}
						inlineImageLeft="iconr.png"
					/>
					<Pressable className="bg-primary w-3/4 rounded-full  h-12 justify-center items-center shadow-lg shadow-black/80">
						<Text className="text-2xl text-white"> login </Text>
					</Pressable>

					<View className="justify-center items-center space-y-2">
						<Link href={'/(login)/forgot ' } asChild>
							<Pressable>
								<Text className="text-sm underline text-gray-800">
									{" "}
									reset password{" "}
								</Text>
							</Pressable>
						</Link>
						<Text className="text-sm text-center text-gray-800">
							{" "}
							dont have an account?{" "}
							<Link href={"/(signup)"} className="text-primary">
								{" "}
								create one
							</Link>{" "}
						</Text>
						<Text className="text-base capitalize ">or</Text>
					</View>

					<View className="flex-row items-center justify-center flex  w-1/2 h-24 space-x-3 ">
						<Pressable className="w-16 h-16 items-center justify-center  bg-white shadow shadow-black rounded-lg mb-5  ">
							<Image
								source={require("../../assets/images/google_icon.png")}
								className="h-14 w-14"
							/>
						</Pressable>
						<Pressable className="w-16 h-16 items-center justify-center  bg-white shadow shadow-black rounded-lg mb-5  ">
							<Image
								source={require("../../assets/images/apple_icon.png")}
								className="h-10 w-10 center"
							/>
						</Pressable>
					</View>
				</View>

				<View className="w-full  items-center justify-start h-1/5 ">
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
