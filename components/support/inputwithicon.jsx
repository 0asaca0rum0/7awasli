import {
	View,
	Text,
	Pressable,
	ImageBackground,
	TextInput,
	KeyboardAvoidingView,
	Image,
} from "react-native";

import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function inputwithicon({ icon,size, placeholder,className2 ,color} ) {
	return (
		<View className='w-full h-full bg-red-800' >
			<Pressable>
				<Ionicons name={icon} color={"black"} size={size} className="" />
			</Pressable>
			<TextInput className="w-full" placeholder={placeholder} />
		</View>
	);
}
