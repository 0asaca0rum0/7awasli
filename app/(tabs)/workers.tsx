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



	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<View style={styles.input2}>
					<TextInput
						label="search"
						mode="outlined"
						outlineColor="black"
						outlineStyle={{
							borderWidth: isFocused ? 1 : 0,
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
						placeholderTextColor={"#EFEFEF"}
					/>
					<Ionicons
						name="search"
						size={24}
						color={isFocused ? "#1bcf43" : "grey"}
						style={{ position: "absolute", right: 25 , bottom: 32}}
					/>
				</View>
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
		borderRadius: 10,
		marginTop: 10,
		marginBottom: 10,
		width: "100%",
	},
	input2: {
		position: "absolute",
		borderRadius: 10,
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		top: 10,
		width: "90%",
		left: "5%",
		right: "5%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 40, // Adjust as necessary
		marginTop: 20, // Adjust as necessary
	},
});
