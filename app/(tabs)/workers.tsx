import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Worker2 from "@/components/support/worker";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
	{
		id: "58694af-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
	{
		id: "58692a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
	{
		id: "526234a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
	{
		id: "536234a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
	{
		id: "546234a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
];

export default function Workers() {
	const [isFocused, setIsFocused] = React.useState(false);
	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						label="search"
						mode="outlined"
						outlineColor={isFocused ? "#1bcf43" : "black"}
						activeOutlineColor="#1bcf43"
						onFocus={handleFocus}
						onBlur={handleBlur}
						outlineStyle={{
							borderWidth: 1,
							borderRadius: 25,

						}}
						style={[styles.input, isFocused && { borderColor: "#1bcf43" }]}
						placeholderTextColor={"#EFEFEF"}
					/>
					<Ionicons
						name="search"
						size={24}
						color={isFocused ? "#1bcf43" : "grey"}
						style={{ position: "absolute", right: "8%", top: 38 ,elevation: 5}}
					/>
				</View>
				<ScrollView
					style={styles.scrollView}
					contentContainerStyle={styles.scrollViewContent}
				>
					{DATA.map((item) => (
						<Worker2 item={item} key={item.id} />
					))}
				</ScrollView>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	inputContainer: {
		paddingHorizontal: 10,
		paddingTop: 10,
		width: "100%",
		
	},
	input: {
		backgroundColor: "white",
		marginVertical: 10,
		width: "95%",
		alignSelf: "center",
	},
	
	scrollView: {
		backgroundColor: "#EFEFEF",
		width: "100%",
		flex: 1,
elevation: 12,
height: "100%",
		
	},
	scrollViewContent: {
		alignItems: "center",
		paddingVertical: 20,
	},
});
