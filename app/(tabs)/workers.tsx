import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function Workers() {
	const [isFocused, setIsFocused] = React.useState(false);
	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);

	const icon = () => (
		<Ionicons name="search" size={24} color={isFocused ? "#1bcf43" : "black"} />
	);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<TextInput
					label="search"
					mode="outlined"
					outlineColor="black"
					outlineStyle={{
						borderWidth: 1,
						borderColor: isFocused ? "#1bcf43" : "#000",
						borderCurve: "continuous",
						borderRadius: 200,
						shadowColor: "#000",
						shadowOffset: {
							width: 4,
							height: 2,
						},
						shadowOpacity: 1,
						shadowRadius: 3.84,
						elevation: 5,
					}}
					activeOutlineColor="#1bcf43"
					onFocus={handleFocus}
					onBlur={handleBlur}
					style={styles.input}
					right={<TextInput.Icon icon={icon} />}
					placeholderTextColor={"#EFEFEF"}
				/>
				<Text style={styles.text}>freelance</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		width: "100%",
		height: "100%",
	},
	input: {
		backgroundColor: "white",
		position: "absolute",
		borderRadius: 10,
		marginTop: 10,
		marginBottom: 10,
		top: 10,
		width: "90%",
		left: "5%",
		right: "5%",
	},
	text: {
		fontSize: 40, // Adjust as necessary
		marginTop: 20, // Adjust as necessary
	},
});
