import {
	View,
	Text,
	Pressable,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

export default function signupScreen() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [fullname, setFullname] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [number, setNumber] = useState("");
	const handlenumber = (e: string) => {
		setNumber(e);
	};
	const handlePassword = (e: string) => {
		setPassword(e);
	};
	const handleEmail = (e: string) => {
		setEmail(e);
	};
	const handleFullname = (e: string) => {
		setFullname(e);
	};
	const handleConfirmPassword = (e: string) => {
		setConfirmPassword(e);
	};
	const handlepress = () => {
		console.log(fullname);
		console.log(email);
		console.log(number);
		console.log(password);
		console.log(confirmPassword);
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
						className="bg-white rounded-full w-3/4     h-12  p-3 shadow-lg shadow-black/80 "
						placeholder="full name "
						inputMode="text"
						value={fullname}
            onChangeText={handleFullname}
					/>

					<TextInput
						id="email"
						className="bg-white rounded-full w-3/4   h-12  p-3 shadow-lg shadow-black/80 "
						placeholder="email"
						inputMode="email"
						value={email}
						onChangeText={handleEmail}
					/>
					<TextInput
						id="email"
						className="bg-white rounded-full w-3/4   h-12  p-3 shadow-lg shadow-black/80 "
						placeholder="number"
						inputMode="numeric"
						value={number}
						onChangeText={handlenumber}
					/>
					<TextInput
						id="password"
						className="bg-white rounded-full w-3/4   h-12  p-3 shadow-lg shadow-black/80"
						placeholder="password"
						secureTextEntry={true}
						inlineImageLeft=""
						value={password}
						onChangeText={handlePassword}
					/>
					<TextInput
						id="password confermation"
						className="bg-white rounded-full w-3/4   h-12  p-3 shadow-lg shadow-black/80"
						placeholder="confirm password"
						secureTextEntry={true}
						inlineImageLeft=""
						value={confirmPassword}
						onChangeText={handleConfirmPassword}
					/>
					<Pressable
						className="bg-primary  w-3/4 rounded-full   h-12 justify-center items-center shadow-lg shadow-black/80"
						onPress={handlepress}
					>
						<Text className="text-2xl text-white"> sign up </Text>
					</Pressable>
					<Text className="text-gray-500">
						have an account ?{" "}
						<Link href={"(login)"} className="underline">
							login{" "}
						</Link>
					</Text>
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	);
}
