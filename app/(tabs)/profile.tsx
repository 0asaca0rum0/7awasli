import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Pressable,
} from "react-native";
import {
	Ionicons,
	MaterialCommunityIcons,
	FontAwesome5,
	AntDesign,
} from "@expo/vector-icons";

const profileData = {
	name: " Elmasri ahmed",
	role: "Web Developer",
	avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with your actual avatar URL if available
	bio: "Passionate about creating elegant solutions to complex problems. Always learning, always coding.",
	stats: {
		projects: 47, // Update with your actual project count
		followers: 1280, // Update with your actual follower count
		following: 384, // Update with your actual following count
	},
	skills: ["React Native", "TypeScript", "Node.js", "GraphQL", "Docker"], // Update with your actual skills
	contact: {
		email: "foxdeath100@gmail.com",
		phone: "+213540430098",
		location: "San Francisco, CA", // Update with your actual location if different
	},
};

export default function Profile() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.info}>
					<Image source={{ uri: profileData.avatar }} style={styles.avatar} />
					<View style={styles.headerText}>
						<Text style={styles.name}>{profileData.name}</Text>
						<Text style={styles.role}>{profileData.role}</Text>
					</View>
					<View>
						<Pressable
							onPress={() => console.log("Logout pressed")}
						>
							<Ionicons name="log-out-outline" size={24} color="#069E2D" />
						</Pressable>
					</View>
				</View>
				<View style={styles.headerButtons}>
					<Pressable
						style={styles.button}
						onPress={() => console.log("Edit Profile pressed")}
					>
						<Text style={styles.buttonText}>Edit Profile</Text>
					</Pressable>
					<Pressable
						style={styles.buttonOutline}
						onPress={() => console.log("Share Profile pressed")}
					>
						<Text style={styles.buttonTextInverse}>Share Profile</Text>
					</Pressable>
				</View>
			</View>

			<View style={styles.bioContainer}>
				<Text style={styles.bioText}>{profileData.bio}</Text>
			</View>

			<View style={styles.statsContainer}>
				{Object.entries(profileData.stats).map(([key, value]) => (
					<View key={key} style={styles.statItem}>
						<Text style={styles.statValue}>{value}</Text>
						<Text style={styles.statLabel}>
							{key.charAt(0).toUpperCase() + key.slice(1)}
						</Text>
					</View>
				))}
			</View>

			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>Skills</Text>
				<View style={styles.skillsContainer}>
					{profileData.skills.map((skill, index) => (
						<View key={index} style={styles.skillItem}>
							<Text style={styles.skillText}>{skill}</Text>
						</View>
					))}
				</View>
			</View>

			<View style={styles.sectionContainerEnd }>
				<Text style={styles.sectionTitle}>Contact</Text>
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
						<Text style={styles.contactText}>
							{profileData.contact.location}
						</Text>
					</Pressable>
				</View>
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
	headerButtons: {
		width: "90%",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		margin: 5,
		padding: 5,
	},
	button: {
		backgroundColor: "#069E2D",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
	},
	buttonOutline: {
		borderColor: "#069E2D",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
		borderWidth: 1,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	buttonTextInverse: {
		color: "#069E2D",
		fontSize: 16,
		fontWeight: "bold",
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
	statsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		backgroundColor: "white",
		padding: 20,
		marginTop: 10,
	},
	statItem: {
		alignItems: "center",
	},
	statValue: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#069E2D",
	},
	statLabel: {
		fontSize: 14,
		color: "#666",
		marginTop: 5,
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
		paddingBottom: 80,},
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
