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
import { useTranslation } from "react-i18next";
const DATA = [
	{
		id: "1a2b3c4d5e6f",
		username: "John Smith",
		email: "johnsmith@gmail.com",
		rating: 4.5,
		number: "+1234567890",
		skills: ["React Native", "JavaScript", "Node.js"],
	},
	{
		id: "2b3c4d5e6f7g",
		username: "Emily Jones",
		email: "emilyjones@yahoo.com",
		rating: 4.0,
		number: "+1234567891",
		skills: ["UI/UX Design", "Figma", "Sketch"],
	},
	{
		id: "3c4d5e6f7g8h",
		username: "Michael Brown",
		email: "michaelbrown@protonmail.com",
		rating: 4.7,
		number: "+1234567892",
		skills: ["Python", "Data Science", "Machine Learning"],
	},
	{
		id: "4d5e6f7g8h9i",
		username: "Sarah Wilson",
		email: "sarahwilson@gmail.com",
		rating: 3.8,
		number: "+1234567893",
		skills: ["Content Writing", "SEO", "Copywriting"],
	},
	{
		id: "5e6f7g8h9i0j",
		username: "David Miller",
		email: "davidmiller@yahoo.com",
		rating: 4.2,
		number: "+1234567894",
		skills: ["Digital Marketing", "Google Analytics", "Social Media"],
	},
	{
		id: "6f7g8h9i0j1k",
		username: "Laura Garcia",
		email: "lauragarcia@protonmail.com",
		rating: 4.9,
		number: "+1234567895",
		skills: ["Graphic Design", "Photoshop", "Illustrator"],
	},
	{
		id: "7g8h9i0j1k2l",
		username: "James Martinez",
		email: "jamesmartinez@gmail.com",
		rating: 4.3,
		number: "+1234567896",
		skills: ["Web Development", "HTML", "CSS", "JavaScript"],
	},
	{
		id: "8h9i0j1k2l3m",
		username: "Elizabeth Rodriguez",
		email: "elizabethrodriguez@yahoo.com",
		rating: 3.9,
		number: "+1234567897",
		skills: ["Project Management", "Agile", "Scrum"],
	},
	{
		id: "9i0j1k2l3m4n",
		username: "Daniel Lee",
		email: "daniellee@gmail.com",
		rating: 4.4,
		number: "+1234567898",
		skills: ["Software Development", "Java", "Spring"],
	},
	{
		id: "0j1k2l3m4n5o",
		username: "Sophia Harris",
		email: "sophiaharris@protonmail.com",
		rating: 4.1,
		number: "+1234567899",
		skills: ["Data Analysis", "Excel", "SQL"],
	},
];






export default function Workers() {
	const { t } = useTranslation();
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
								label={t("search")}
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
