import {
	View,
	Text,
	Pressable,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";

export default function SignupScreen() {
	const { t } = useTranslation();
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
	const handlePress = () => {
		console.log(fullname);
		console.log(email);
		console.log(number);
		console.log(password);
		console.log(confirmPassword);
	};

	return (
		<KeyboardAvoidingView
			className="w-full h-full justify-center items-center "
			behavior="padding"
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ImageBackground
					source={require("../../assets/images/login.png")}
					resizeMode="cover"
					className={`flex-1 w-full h-full flex-col items-center justify-end   `}
				>
					<View className="w-full h-2/3 justify-start items-center space-y-6">
						<TextInput
							selectionColor={"#1bcf43"}
							id="full name"
							className="bg-white rounded-full w-3/4 h-12 p-3 shadow-lg shadow-black/80"
							placeholder={t("signup_full_name")}
							inputMode="text"
							value={fullname}
							onChangeText={handleFullname}
						/>

						<TextInput
							selectionColor={"#1bcf43"}
							id="email"
							className="bg-white rounded-full w-3/4 h-12 p-3 shadow-lg shadow-black/80"
							placeholder={t("signup_email")}
							inputMode="email"
							value={email}
							onChangeText={handleEmail}
						/>

						<TextInput
							selectionColor={"#1bcf43"}
							id="password"
							className="bg-white rounded-full w-3/4 h-12 p-3 shadow-lg shadow-black/80"
							placeholder={t("signup_password")}
							secureTextEntry={true}
							value={password}
							onChangeText={handlePassword}
						/>
						<TextInput
							selectionColor={"#1bcf43"}
							id="password confirmation"
							className="bg-white rounded-full w-3/4 h-12 p-3 shadow-lg shadow-black/80 focus:outline-primary"
							placeholder={t("signup_confirm_password")}
							secureTextEntry={true}
							value={confirmPassword}
							onChangeText={handleConfirmPassword}
						/>
						<TextInput
							selectionColor={"#1bcf43"}
							id="number"
							className="bg-white rounded-full w-3/4 h-12 p-3 shadow-lg shadow-black/80"
							placeholder={t("signup_number")}
							inputMode="numeric"
							value={number}
							onChangeText={handlenumber}
						/>
						<Pressable
							className="bg-primary w-3/4 rounded-full h-12 justify-center items-center shadow-lg shadow-black/80"
							onPress={handlePress}
						>
							<Text className="text-2xl text-white">{t("signup_sign_up")}</Text>
						</Pressable>
						<Text className="text-gray-500">
							{t("signup_have_account")}{" "}
							<Link href={"(login)"} className="underline">
								{t("signup_login")}
							</Link>
						</Text>
					</View>
				</ImageBackground>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
