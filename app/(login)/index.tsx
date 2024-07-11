import {
	View,
	Text,
	Pressable,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Image,
} from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LoginScreen() {
	const { t } = useTranslation();
	const [placeholder, setPlaceholder] = useState(t("email_placeholder"));
	const [password, setPassword] = useState(t("password_placeholder"));

	const handlePlaceholderFocus = () => {
		setPlaceholder("");
	};
	const handlePlaceholderBlur = () => {
		if (placeholder === "") {
			setPlaceholder(t("email_placeholder"));
		}
	};
	const handlePasswordFocus = () => {
		setPassword("");
	};
	const handlePasswordBlur = () => {
		if (password === "") {
			setPassword(t("password_placeholder"));
		}
	};

	const handlePress = () => {
		console.log(placeholder);
		console.log(password);
	};

	return (
		<KeyboardAvoidingView className="w-full h-full flex-1 justify-center items-center">
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ImageBackground
					source={require("../../assets/images/login.png")}
					resizeMode="cover"
					className="flex-1 w-full h-full flex-col items-center justify-end"
				>
					<View className="w-full h-2/3 justify-start items-center">
						<View className="w-full h-4/5 justify-evenly mt-5 items-center space-y-2">
							<TextInput
								id="email"
								className="bg-white rounded-full w-3/4 h-12 p-3 shadow-lg shadow-black/80"
								onFocus={handlePlaceholderFocus}
								onBlur={handlePlaceholderBlur}
								placeholder={placeholder}
								inputMode="email"
							/>
							<TextInput
								id="password"
								className="bg-white rounded-full w-3/4 h-12 p-3 shadow-lg shadow-black/80"
								onFocus={handlePasswordFocus}
								onBlur={handlePasswordBlur}
								placeholder={password}
								secureTextEntry={true}
							/>
							<Pressable
								className="bg-primary w-3/4 rounded-full h-12 justify-center items-center shadow-lg shadow-black/80"
								onPress={handlePress}
							>
								<Text className="text-2xl text-white">{t("login_button")}</Text>
							</Pressable>

							<View className="justify-center items-center space-y-2">
								<Link href={"/(login)/forgot"} asChild>
									<Pressable>
										<Text className="text-sm underline text-gray-800">
											{t("reset_password")}
										</Text>
									</Pressable>
								</Link>
								<Text className="text-sm text-center text-gray-800">
									{t("dont_have_account")}{" "}
									<Link href={"/(signup)"} className="text-primary">
										{t("create_account")}
									</Link>
								</Text>
								<Text className="text-base capitalize">{t("or")}</Text>
							</View>

							<View className="flex-row items-center justify-center w-1/2 h-24 space-x-3">
								<Pressable className="w-16 h-16 items-center justify-center bg-white shadow shadow-black rounded-lg mb-5">
									<Image
										source={require("../../assets/images/google_icon.png")}
										className="h-14 w-14"
									/>
								</Pressable>
								<Pressable className="w-16 h-16 items-center justify-center bg-white shadow shadow-black rounded-lg mb-5">
									<Image
										source={require("../../assets/images/apple_icon.png")}
										className="h-10 w-10 center"
									/>
								</Pressable>
							</View>
						</View>

						<View className="w-full items-center justify-start h-1/5">
							<Text className="text-base text-gray-500">
								{t("login_as_a")}{" "}
								<Link
									href={"/(tabs)"}
									className="underline underline-offset-4 h-full"
								>
									{t("guest")}
								</Link>
							</Text>
						</View>
					</View>
				</ImageBackground>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
