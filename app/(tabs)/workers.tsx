import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	ScrollView,
	Pressable,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Worker2 from "@/components/support/worker";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

const DATA = [
	{
		id: "1a2b3c4d5e6f",
		username: "johnsmith",
		email: "johnsmith@gmail.com",
		rating: 4.5,
		number: "+1234567890",
	},
	{
		id: "2b3c4d5e6f7g",
		username: "emilyjones",
		email: "emilyjones@yahoo.com",
		rating: 4.0,
		number: "+1234567891",
	},
	{
		id: "3c4d5e6f7g8h",
		username: "michaelbrown",
		email: "michaelbrown@protonmail.com",
		rating: 4.7,
		number: "+1234567892",
	},
	{
		id: "4d5e6f7g8h9i",
		username: "sarahwilson",
		email: "sarahwilson@gmail.com",
		rating: 3.8,
		number: "+1234567893",
	},
	{
		id: "5e6f7g8h9i0j",
		username: "davidmiller",
		email: "davidmiller@yahoo.com",
		rating: 4.2,
		number: "+1234567894",
	},
	{
		id: "6f7g8h9i0j1k",
		username: "lauragarcia",
		email: "lauragarcia@protonmail.com",
		rating: 4.9,
		number: "+1234567895",
	},
	{
		id: "7g8h9i0j1k2l",
		username: "jamesmartinez",
		email: "jamesmartinez@gmail.com",
		rating: 4.3,
		number: "+1234567896",
	},
	{
		id: "8h9i0j1k2l3m",
		username: "elizabethrodriguez",
		email: "elizabethrodriguez@yahoo.com",
		rating: 3.9,
		number: "+1234567897",
	},
];

export default function Workers() {
	const [isFocused, setIsFocused] = useState(false);
	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);
	const renderItem = ({ item }: any) => (
		<Pressable onPress={() => console.log("Item pressed:", item.id)}>
			<Worker2 item={item} />
		</Pressable>
	);
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<TouchableWithoutFeedback>
				<SafeAreaView style={styles.safeArea}>
					<View style={styles.container}>
						<View style={styles.inputContainer}>
							<TextInput
								label="Search"
								mode="outlined"
								outlineColor={isFocused ? "#069E2D" : "black"}
								activeOutlineColor="#069E2D"
								onFocus={handleFocus}
								onBlur={() => {
									handleBlur();
								}}
								outlineStyle={styles.inputOutline}
								style={[styles.input, isFocused && styles.inputFocused]}
								placeholderTextColor="#EFEFEF"
							/>
							<Ionicons
								name="search"
								size={24}
								color={isFocused ? "#069E2D" : "grey"}
								style={styles.searchIcon}
							/>
						</View>
						<FlatList
							data={DATA}
							renderItem={renderItem}
							keyExtractor={(item) => item.id}
							contentContainerStyle={styles.listContent}
							style={styles.list}
							keyboardShouldPersistTaps="handled"
						/>
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</GestureHandlerRootView>
	);
}
const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: "white" },
	container: { flex: 1 },

	inputContainer: { paddingHorizontal: 10, paddingTop: 10, width: "100%" },

	input: {
		backgroundColor: "white",
		marginVertical: 10,
		width: "95%",
		alignSelf: "center",
	},
	inputFocused: { borderColor: "#069E2D" },
	inputOutline: { borderWidth: 1, borderRadius: 25 },
	searchIcon: { position: "absolute", right: "9%", top: 38, zIndex: 1 },
	list: { flex: 1, backgroundColor: "#EFEFEF" },
	listContent: { paddingVertical: 20 },
});
