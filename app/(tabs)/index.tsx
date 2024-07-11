import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

export default function ChatList() {
	const { t } = useTranslation();
	const [searchQuery, setSearchQuery] = useState("");
	const router = useRouter();
	const [chats, setChats] = useState([
		{ id: "1", username: "John Doe", lastMessage: "Hey, how are you?" },
		{ id: "2", username: "Jane Smith", lastMessage: "See you tomorrow!" },
		// Add more chat items as needed
	]);

	const filteredChats = chats.filter((chat) =>
		chat.username.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const renderChatItem = ({ item }: any) => (
		<Pressable
			style={styles.chatItem}
			onPress={() => router.push(`/chat/${item.id}`)}
		>
			<View style={styles.avatarContainer}>
				<Text style={styles.avatarText}>
					{item.username.charAt(0).toUpperCase()}
				</Text>
			</View>
			<View style={styles.chatInfo}>
				<Text style={styles.username}>{item.username}</Text>
				<Text style={styles.lastMessage} numberOfLines={1}>
					{item.lastMessage}
				</Text>
			</View>
		</Pressable>
	);

	return (
		<SafeAreaView style={styles.safeArea}>
			<Searchbar
				placeholder={t("chat_list_search_placeholder")}
				onChangeText={setSearchQuery}
				value={searchQuery}
				style={styles.searchBar}
				inputStyle={styles.searchInput}
			/>
			<FlatList
				data={filteredChats}
				renderItem={renderChatItem}
				keyExtractor={(item) => item.id}
				style={styles.chatList}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	searchBar: {
		margin: 16,
		borderRadius: 25,
		elevation: 2,
		backgroundColor: "white",
	},
	searchInput: {
		fontSize: 16,
	},
	chatList: {
		flex: 1,
	},
	chatItem: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		padding: 16,
		marginHorizontal: 16,
		marginVertical: 8,
		borderRadius: 16,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.05,
		shadowRadius: 2,
		elevation: 2,
	},
	avatarContainer: {
		backgroundColor: "#069E2D",
		height: 50,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
		marginRight: 16,
	},
	avatarText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	chatInfo: {
		flex: 1,
	},
	username: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#333",
		marginBottom: 4,
	},
	lastMessage: {
		fontSize: 14,
		color: "#666",
	},
});
