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

export default function forgot() {
	return (
		<KeyboardAvoidingView className="w-full h-full flex-1 justify-center items-center ">
			<ImageBackground
				source={require("../../assets/images/login.png")}
				resizeMode="cover"
				className="flex-1 w-full h-full flex-col items-center justify-end "
			>
				<View className=" w-full h-2/3  justify-center  items-center  ">
					<View className="w-full  h-4/5 justify-start mt-16  space-y-10  items-center ">
						<TextInput
							className="bg-white rounded-full w-3/4 border-black border-2 h-12  p-3 shadow-lg shadow-black/80"
							placeholder="email or phone number "
						/>
						<Pressable className="bg-primary w-3/4 rounded-full border-[1px] h-12 justify-center items-center shadow-lg shadow-black/80">
							<Text className="text-2xl text-white"> send code </Text>
						</Pressable>
						
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
