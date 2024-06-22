import {
	View,
	Text,
	Pressable,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView,
	Image,
} from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Button } from "react-native-paper";


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
							className="bg-white rounded-full w-3/4   h-12  p-3 shadow-lg shadow-black/80"
							placeholder="email or phone number "
						/>
						<View className="flex-grow-0 flex-row-reverse  items-center justify-center bg-white rounded-full w-3/4  h-12   shadow-lg shadow-black/80">

								<Button
                                mode="text"
									className=" w-[40%] m-0  shadow   shadow-black  z-50   h-full justify-center items-center  rounded-r-full"
									onPress={handledisabled}
                                    textColor="#1bcf43"
                                    loading={!disabled}
								>
									send code 
								</Button>
						
							<TextInput
								className="w-[60%] px-4   border-r-[1px] h-full bg-white rounded-l-full "
								placeholder={"code "}
							/>
						</View>
						<Button
							className={` w-3/4 rounded-full border-[1px] h-12 justify-center items-center shadow-lg shadow-black/80  ${
								disabled ? "bg-gray-500" : "bg-primary"
							}`}
							disabled={disabled}
						>
							<Text className="text-2xl text-white"> reset password </Text>
						</Button>
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
