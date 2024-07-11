import {
	View,
	Text,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-paper";
import { Link } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Forgot() {
	const [disabled, setDisabled] = useState(true);
	const { t } = useTranslation();

	const handleDisabled = () => {
		setDisabled(false);
	};

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
							placeholder={t("forgot_email_placeholder")}
						/>
						<View className="flex-grow-0 flex-row-reverse  items-center justify-center bg-white rounded-full w-3/4  h-12   shadow-lg shadow-black/80">
							<Button
								mode="text"
								className=" w-[40%] m-0  shadow   shadow-black  z-50   h-full justify-center items-center  rounded-r-full"
								onPress={handleDisabled}
								textColor="#1bcf43"
								loading={!disabled}
							>
								{t("forgot_send_code")}
							</Button>
							<TextInput
								className="w-[60%] px-4   border-r-[1px] h-full bg-white rounded-l-full "
								placeholder={t("forgot_code_placeholder")}
							/>
						</View>
						<Button
							className={` w-3/4 rounded-full border-[1px] h-12 justify-center items-center shadow-lg shadow-black/80  ${
								disabled ? "bg-gray-500" : "bg-primary"
							}`}
							disabled={disabled}
						>
							<Text className="text-2xl text-white">
								{t("forgot_reset_password")}
							</Text>
						</Button>
					</View>

					<View className="w-full  items-center justify-start h-1/5 ">
						<Text className="text-base text-gray-500">
							{t("login_as_a")}{" "}
							<Link
								href={"/(tabs)"}
								className="underline underline-offset-4 h-full"
							>
								{t("guest")}
							</Link>{" "}
						</Text>
					</View>
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	);
}
