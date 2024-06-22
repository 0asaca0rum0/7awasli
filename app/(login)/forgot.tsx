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
import { Ionicons } from "@expo/vector-icons";
export default function forgot() {
    const [disabled, setdisabled] = useState(true);
    const handledisabled = () => {
        setdisabled(false)
    }
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
						<View className=" flex-row-reverse items-center justify-center bg-white rounded-full w-3/4  h-12   shadow-lg shadow-black/80">
							<Pressable className=" w-1/3 bg-gray-100 border-2 border-l-0 h-full justify-center items-center px-2 rounded-r-full" onPress={handledisabled}>
                                            <Text>send code </Text>
							</Pressable>
							<TextInput className="w-2/3 px-4 border-2  border-r-[1px] h-full bg-white rounded-l-full border-black" placeholder={"code "} />
						</View>
						<Pressable
							className={` w-3/4 rounded-full border-[1px] h-12 justify-center items-center shadow-lg shadow-black/80  ${
								disabled ? "bg-gray-500" : "bg-primary"
							}`}
							disabled={disabled}
						>
							<Text className="text-2xl text-white"> reset password </Text>
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
