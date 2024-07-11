import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const profileData = {
	name: "Elmasri ahmed",
	role: "Web Developer",
	rating: 4.8,
	avatar: "https://randomuser.me/api/portraits/men/32.jpg",
	bio: "Passionate about creating elegant solutions to complex problems. Always learning, always coding.",
	skills: ["React Native", "TypeScript", "Node.js", "GraphQL", "Docker"],
	contact: {
		email: "foxdeath100@gmail.com",
		phone: "+213540430098",
		location: "San Francisco, CA",
	},
	comments: [
		{
			user: "Alice",
			comment: "Great work on the latest project!",
			rating: 5,
			avatar: "https://randomuser.me/api/portraits/women/1.jpg",
		},
		{
			user: "Bob",
			comment: "Always delivers on time. Highly recommended.",
			rating: 4,
			avatar: "https://randomuser.me/api/portraits/men/2.jpg",
		},
		{
			user: "Charlie",
			comment: "Excellent communication skills.",
			rating: 5,
			avatar: "https://randomuser.me/api/portraits/men/3.jpg",
		},
		{
			user: "Diana",
			comment: "Impressive problem-solving abilities.",
			rating: 5,
			avatar: "https://randomuser.me/api/portraits/women/4.jpg",
		},
		{
			user: "Ethan",
			comment: "Could improve on documentation, but overall good work.",
			rating: 4,
			avatar: "https://randomuser.me/api/portraits/men/5.jpg",
		},
	],
};
const langs = ["en","fr","ar"]
export default function Profile() {
	const [lang, setLang] = useState("");

	useEffect(() => {
		const loadLang = async () => {
			try {
				const savedLang = await AsyncStorage.getItem("appLanguage");
				if (savedLang && langs.includes(savedLang)) {
					setLang(savedLang);
					i18next.changeLanguage(savedLang);
				}
			} catch (error) {
				console.error("Failed to load language from AsyncStorage", error);
			}
		};
		loadLang();
	}, []);

	useEffect(() => {
		const saveLang = async () => {
			try {
				await AsyncStorage.setItem("appLanguage", lang);
				i18next.changeLanguage(lang);
			} catch (error) {
				console.error("Failed to save language to AsyncStorage", error);
			}
		};
		if (lang) {
			saveLang();
		}
	}, [lang]);

	const handleLang = () => {
		const nextLang =
			lang === langs[0] ? langs[1] : lang === langs[1] ? langs[2] : langs[0];
		setLang(nextLang);
	};

	const { t } = useTranslation();
return (
	<ScrollView style={styles.container}>
		<View style={styles.header}>
			<View style={styles.info}>
				<Image source={{ uri: profileData.avatar }} style={styles.avatar} />
				<View style={styles.headerText}>
					<Text style={styles.name}>{profileData.name}</Text>
					<Text style={styles.role}>{t(profileData.role)}</Text>
					<View style={styles.ratingContainer}>
						<Text style={styles.rating}>{profileData.rating}</Text>
						{[...Array(5)].map((_, i) => (
							<Ionicons
								key={i}
								name={
									i < Math.floor(profileData.rating) ? "star" : "star-outline"
								}
								size={16}
								color="#FFD700"
							/>
						))}
					</View>
				</View>

				<View className="items-center justify-center space-y-2 ">
					<Link href={"/(login)"}>
						<Ionicons name="log-out-outline" size={24} color="#069E2D" />
					</Link>
					<Pressable
						className="border-2 border-primary p-1 rounded-lg items-center justify-center text-center "
						onPress={handleLang}
					>
						<Text>{lang}</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.headerButtons}>
				<Pressable
					style={styles.button}
					onPress={() => console.log("Edit Profile pressed")}
				>
					<Ionicons name="pencil-outline" size={24} color="white" />
					<Text style={styles.buttonText}>{t("edit_profile")}</Text>
				</Pressable>
				<Pressable
					style={styles.buttonOutline}
					onPress={() => console.log("Share Profile pressed")}
				>
					<Ionicons name="share-social-outline" size={24} color="#069E2D" />
					<Text style={styles.buttonTextInverse}>{t("share_profile")}</Text>
				</Pressable>
			</View>
		</View>

		<View style={styles.sectionContainer}>
			<Text style={styles.sectionTitle}>{t("contact")}</Text>
			<View style={styles.contactContainer}>
				<Pressable style={styles.contactItem}>
					<Ionicons name="mail-outline" size={24} color="#069E2D" />
					<Text style={styles.contactText}>{profileData.contact.email}</Text>
				</Pressable>
				<Pressable style={styles.contactItem}>
					<Ionicons name="call-outline" size={24} color="#069E2D" />
					<Text style={styles.contactText}>{profileData.contact.phone}</Text>
				</Pressable>
				<Pressable style={styles.contactItem}>
					<Ionicons name="location-outline" size={24} color="#069E2D" />
					<Text style={styles.contactText}>{profileData.contact.location}</Text>
				</Pressable>
			</View>
		</View>

		<View style={styles.bioContainer}>
			<Text style={styles.bioText}>{profileData.bio}</Text>
		</View>

		<View style={styles.sectionContainer}>
			<Text style={styles.sectionTitle}>{t("skills")}</Text>
			<View style={styles.skillsContainer}>
				{profileData.skills.map((skill, index) => (
					<View key={index} style={styles.skillItem}>
						<Text style={styles.skillText}>{skill}</Text>
					</View>
				))}
			</View>
		</View>

		<View style={styles.sectionContainerEnd}>
			<Text style={styles.sectionTitle}>{t("comments")}</Text>
			{profileData.comments.map((comment, index) => (
				<View key={index} style={styles.commentItem}>
					<View style={styles.commentHeader}>
						<View style={styles.commentUser}>
							<Image
								source={{ uri: comment.avatar }}
								style={styles.commentAvatar}
							/>
							<Text style={styles.commentUserName}>{comment.user}</Text>
						</View>
						<View style={styles.ratingContainer}>
							{[...Array(5)].map((_, i) => (
								<Ionicons
									key={i}
									name={i < comment.rating ? "star" : "star-outline"}
									size={16}
									color="#FFD700"
								/>
							))}
						</View>
					</View>
					<Text style={styles.commentText}>{comment.comment}</Text>
				</View>
			))}
		</View>
	</ScrollView>
);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f5f5f5",
	},
	header: {
		flexDirection: "column",
		alignItems: "center",
		padding: 20,
		backgroundColor: "white",
	},
	info: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginRight: 20,
	},
	headerText: {
		flex: 1,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#333",
	},
	role: {
		fontSize: 16,
		color: "#666",
	},
	ratingContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
	},
	rating: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#069E2D",
		marginRight: 5,
	},
	headerButtons: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: 20,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#069E2D",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
	},
	buttonOutline: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#069E2D",
		borderWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 5,
	},
	buttonTextInverse: {
		color: "#069E2D",
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 5,
	},
	bioContainer: {
		backgroundColor: "white",
		padding: 20,
		marginTop: 10,
	},
	bioText: {
		fontSize: 16,
		color: "#444",
		lineHeight: 24,
	},
	sectionContainer: {
		backgroundColor: "white",
		padding: 20,
		marginTop: 10,
	},
	sectionContainerEnd: {
		backgroundColor: "white",
		padding: 20,
		marginTop: 10,
		paddingBottom: 80,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333",
		marginBottom: 10,
	},
	skillsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	skillItem: {
		backgroundColor: "#e0f2e9",
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 20,
		marginRight: 10,
		marginBottom: 10,
	},
	skillText: {
		color: "#069E2D",
		fontSize: 14,
	},
	commentItem: {
		backgroundColor: "#f0f0f0",
		padding: 10,
		borderRadius: 8,
		marginBottom: 10,
	},
	commentHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 5,
	},
	commentUser: {
		flexDirection: "row",
		alignItems: "center",
	},
	commentAvatar: {
		width: 30,
		height: 30,
		borderRadius: 15,
		marginRight: 10,
	},
	commentUserName: {
		fontWeight: "bold",
		fontSize: 16,
		color: "#333",
	},
	commentText: {
		fontSize: 14,
		color: "#444",
	},
	contactContainer: {
		marginTop: 10,
	},
	contactItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
	},
	contactText: {
		marginLeft: 10,
		fontSize: 16,
		color: "#444",
	},
});
