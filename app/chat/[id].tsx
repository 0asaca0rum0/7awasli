import React, { useState, useEffect, useRef } from "react";
import {
	View,
	Text,
	Pressable,
	FlatList,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { useRouter, useLocalSearchParams } from "expo-router";
import MapView, { Marker, Region } from "react-native-maps";

interface Message {
	id: string;
	user: string;
	text: string;
	timestamp: string;
	isLocation: boolean;
}

const ChatScreen: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([
		{
			id: "2",
			user: "John Doe",
			text: "My current location: 40.7128, -74.0060",
			timestamp: new Date(Date.now() - 120000).toISOString(),
			isLocation: true,
		},
		{
			id: "1",
			user: "John Doe",
			text: "Hey there! How are you?",
			timestamp: new Date(Date.now() - 180000).toISOString(),
			isLocation: false,
		},
		{
			id: "0",
			user: "You",
			text: "Hi John! I'm doing well, thanks for asking.",
			timestamp: new Date(Date.now() - 240000).toISOString(),
			isLocation: false,
		},
	]);
	const [newMessage, setNewMessage] = useState("");
	const [showMap, setShowMap] = useState(false);
	const [mapRegion, setMapRegion] = useState<Region | undefined>(undefined);
	const mapRef = useRef<MapView>(null);
	const router = useRouter();
	const params = useLocalSearchParams();

	const chatPartner = {
		name: "John Doe",
		status: "Online",
	};
	const extractCoordinates = (
		text: string
	): { latitude: number; longitude: number } | null => {
		const regex = /(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)/;
		const match = text.match(regex);
		if (match) {
			return {
				latitude: parseFloat(match[1]),
				longitude: parseFloat(match[3]),
			};
		}
		return null;
	};
	useEffect(() => {
		if (params.latitude && params.longitude) {
			const newRegion = {
				latitude: parseFloat(params.latitude as string),
				longitude: parseFloat(params.longitude as string),
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			};
			setMapRegion((prevState) => newRegion);
			setShowMap(true);
		}
	}, [params]);

	useEffect(() => {
		if (mapRef.current && mapRegion && showMap) {
			mapRef.current.animateToRegion(mapRegion, 1000);
		}
	}, [mapRegion, showMap]);

	const sendMessage = (text: string, isLocation = false) => {
		if (text.trim() === "" && !isLocation) return;
		const message: Message = {
			id: Date.now().toString(),
			user: "You",
			text: text,
			timestamp: new Date().toISOString(),
			isLocation: isLocation,
		};
		setMessages([message, ...messages]);
		setNewMessage("");
	};

	const sendLocation = async () => {
		try {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				Alert.alert("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			const { latitude, longitude } = location.coords;
			const locationMessage = `My current location: ${latitude}, ${longitude}`;
			sendMessage(locationMessage, true);
		} catch (error) {
			Alert.alert("Error", "Could not fetch location");
		}
	};

	const navigateToMap = (latitude: number, longitude: number) => {
		const newRegion = {
			latitude,
			longitude,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		};
		setMapRegion(newRegion);
		setShowMap(true);
	};

	const renderItem = ({ item }: { item: Message }) => (
		<View
			style={[
				styles.messageContainer,
				item.user === "You" ? styles.yourMessage : styles.theirMessage,
			]}
		>
			<View
				style={[
					styles.messageContent,
					item.user === "You"
						? styles.yourMessageContent
						: styles.theirMessageContent,
				]}
			>
				<Text style={styles.text}>{item.text}</Text>
				{item.isLocation && (
					<Pressable
						onPress={() => {
							const coords = extractCoordinates(item.text);
							if (coords) {
								navigateToMap(coords.latitude, coords.longitude);
							} else {
								Alert.alert(
									"Error",
									"Could not extract location coordinates from the message."
								);
							}
						}}
					>
						<Text style={styles.locationLink}>View on map</Text>
					</Pressable>
				)}
				<Text style={styles.timestamp}>
					{new Date(item.timestamp).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</Text>
			</View>
		</View>
	);


	return (
		<SafeAreaView style={styles.safeArea}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					{showMap ? (
						<View style={styles.mapContainer}>
							<MapView
								ref={mapRef}
								style={styles.map}
								initialRegion={mapRegion}
							>
								{mapRegion && (
									<Marker
										pinColor="#1bcf43"
										coordinate={{
											latitude: mapRegion.latitude,
											longitude: mapRegion.longitude,
										}}
									/>
								)}
							</MapView>

							<Pressable
								style={styles.closeMapButton}
								onPress={() => setShowMap(false)}
							>
								<Ionicons name="close" size={24} color="white" />
							</Pressable>
						</View>
					) : (
						<>
							<View style={styles.header}>
								<Pressable onPress={() => router.back()}>
									<Ionicons name="arrow-back" size={24} color="#069E2D" />
								</Pressable>
								<View style={styles.headerInfo}>
									<Text style={styles.headerName}>{chatPartner.name}</Text>
									<Text style={styles.headerStatus}>{chatPartner.status}</Text>
								</View>
								<Ionicons name="call" size={24} color="#069E2D" />
							</View>
							<KeyboardAvoidingView
								style={styles.chatContainer}
								behavior={Platform.OS === "ios" ? "padding" : "height"}
								keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
							>
								<FlatList
									data={messages}
									renderItem={renderItem}
									keyExtractor={(item) => item.id}
									inverted
									contentContainerStyle={styles.messagesContainer}
								/>
								<View style={styles.inputContainer}>
									<Pressable
										onPress={sendLocation}
										style={styles.locationButton}
									>
										<Ionicons
											name="location-outline"
											size={24}
											color="#069E2D"
										/>
									</Pressable>
									<TextInput
										style={styles.input}
										value={newMessage}
                                        outlineStyle={styles.focusedInput}
                                        outlineColor="black"
                                        activeOutlineColor="#069E2D"
                                        mode="outlined"
										onChangeText={setNewMessage}
										placeholder="Type a message"
										placeholderTextColor="#999"
									/>
									<Pressable
										onPress={() => sendMessage(newMessage)}
										style={styles.sendButton}
									>
										<Ionicons name="send" size={24} color="white" />
									</Pressable>
								</View>
							</KeyboardAvoidingView>
						</>
					)}
				</View>
			</TouchableWithoutFeedback>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	// Layout
	safeArea: {
		flex: 1,
		backgroundColor: "#f8f9fa",
	},
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	chatContainer: {
		flex: 1,
		width: "100%",
	},

	// Header
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 16,
		paddingHorizontal: 20,
		backgroundColor: "white",
		borderBottomWidth: 1,
		borderBottomColor: "#e9ecef",
		elevation: 2,
	},
	headerInfo: {
		flex: 1,
		marginLeft: 16,
	},
	headerName: {
		fontSize: 20,
		fontWeight: "600",
		color: "#212529",
	},
	headerStatus: {
		fontSize: 14,
		color: "#28a745",
		marginTop: 2,
	},

	// Messages
	messagesContainer: {
		paddingVertical: 12,
		paddingHorizontal: 12,
	},
	messageContainer: {
		flexDirection: "row",
		marginBottom: 16,
	},
	yourMessage: {
		justifyContent: "flex-end",
	},
	theirMessage: {
		justifyContent: "flex-start",
	},
	messageContent: {
		borderRadius: 20,
		padding: 14,
		maxWidth: "75%",
	},
	yourMessageContent: {
		backgroundColor: "#dcf8c6",
		alignSelf: "flex-end",
	},
	theirMessageContent: {
		backgroundColor: "#f1f3f5",
		alignSelf: "flex-start",
	},
	text: {
		fontSize: 16,
		color: "#212529",
		lineHeight: 22,
	},
	timestamp: {
		alignSelf: "flex-end",
		marginTop: 4,
		fontSize: 12,
		color: "#6c757d",
	},
	locationLink: {
		color: "#28a745",
		textDecorationLine: "underline",
		marginTop: 6,
	},

	// Input
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		width: "100%",
		backgroundColor: "white",
		borderTopWidth: 1,
		borderTopColor: "#e9ecef",
		elevation: 2,
	},
	input: {
		flex: 1,
		backgroundColor: "#f1f3f5",
		borderRadius: 24,

		marginRight: 12,
		fontSize: 16,
	},
    focusedInput: {
        borderWidth: 1,
        borderRadius: 24,
    },
	locationButton: {
		marginRight: 12,
		padding: 8,
	},
	sendButton: {
		backgroundColor: "#28a745",
		borderRadius: 24,
		padding: 12,
	},

	// Map
	mapContainer: {
		...StyleSheet.absoluteFillObject,
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	closeMapButton: {
		position: "absolute",
		top: 40,
		right: 20,
		backgroundColor: "#28a745",
		borderRadius: 24,
		padding: 12,
	},
});
export default ChatScreen;
