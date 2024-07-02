import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Pressable,
	TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

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

const SAMPLE_COMMENTS = [
	{
		user: "Alice",
		comment: "Great work!",
		rating: 5,
		avatar: "https://randomuser.me/api/portraits/women/1.jpg",
		timestamp: "2024-06-30T12:34:56Z",
	},
	{
		user: "Bob",
		comment: "Very professional.",
		rating: 4,
		avatar: "https://randomuser.me/api/portraits/men/2.jpg",
		timestamp: "2024-06-30T14:20:00Z",
	},
	{
		user: "Charlie",
		comment: "Excellent communication.",
		rating: 5,
		avatar: "https://randomuser.me/api/portraits/men/3.jpg",
		timestamp: "2024-06-30T15:45:30Z",
	},
];

export default function DetailsScreen() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	const user = DATA.find((item) => item.id === id);
	const [comments, setComments] = useState(SAMPLE_COMMENTS);
	const [newComment, setNewComment] = useState("");
	const [newRating, setNewRating] = useState(5);

	const addComment = () => {
		if (newComment.trim() === "") return;
		const comment = {
			user: "You",
			comment: newComment,
			rating: newRating,
			avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
			timestamp: new Date().toISOString(),
		};
		setComments([comment, ...comments]);
		setNewComment("");
		setNewRating(5);
	};

	if (!user) {
		return (
			<View style={styles.container}>
				<Text style={styles.errorText}>User not found</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.header}>
					<View style={styles.info}>
						<Image
							source={{
								uri: `https://randomuser.me/api/portraits/men/${
									parseInt(user.id, 36) % 100
								}.jpg`,
							}}
							style={styles.avatar}
						/>
						<View style={styles.headerText}>
							<Text style={styles.name}>{user.username}</Text>
							<Text style={styles.role}>Worker</Text>
							<View style={styles.ratingContainer}>
								<Text style={styles.rating}>{user.rating.toFixed(1)}</Text>
								{[...Array(5)].map((_, i) => (
									<Ionicons
										key={i}
										name={i < Math.floor(user.rating) ? "star" : "star-outline"}
										size={16}
										color="#FFD700"
									/>
								))}
							</View>
						</View>
						<Pressable onPress={() => router.push(`/chat/${user.id}`)}>
							<Ionicons name="chatbox-outline" size={24} color="#069E2D" />
						</Pressable>
					</View>
				</View>

				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}>Contact</Text>
					<View style={styles.contactContainer}>
						<Pressable style={styles.contactItem}>
							<Ionicons name="mail-outline" size={24} color="#069E2D" />
							<Text style={styles.contactText}>{user.email}</Text>
						</Pressable>
						<Pressable style={styles.contactItem}>
							<Ionicons name="call-outline" size={24} color="#069E2D" />
							<Text style={styles.contactText}>{user.number}</Text>
						</Pressable>
					</View>
				</View>

				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}>Skills</Text>
					<View style={styles.skillsContainer}>
						{user.skills.map((skill, index) => (
							<View key={index} style={styles.skillItem}>
								<Text style={styles.skillText}>{skill}</Text>
							</View>
						))}
					</View>
				</View>

				<View style={styles.sectionContainerEnd}>
					<Text style={styles.sectionTitle}>Comments</Text>

					<View style={styles.addCommentContainer}>
						<TextInput
							style={styles.commentInput}
							placeholder="Add a comment..."
							value={newComment}
							onChangeText={setNewComment}
							multiline
						/>
						<View style={styles.ratingInput}>
							{[1, 2, 3, 4, 5].map((star) => (
								<Pressable key={star} onPress={() => setNewRating(star)}>
									<Ionicons
										name={star <= newRating ? "star" : "star-outline"}
										size={24}
										color="#FFD700"
									/>
								</Pressable>
							))}
						</View>
						<Pressable style={styles.addButton} onPress={addComment}>
							<Text style={styles.addButtonText}>Add Comment</Text>
						</Pressable>
					</View>

					{comments.map((comment, index) => (
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
							<Text style={styles.timestamp}>
								{new Date(comment.timestamp).toLocaleString()}
							</Text>
						</View>
					))}
				</View>
			</ScrollView>

			<Pressable style={styles.goBackButton} onPress={() => router.back()}>
				<Ionicons name="arrow-back" size={30} color="#069E2D" />
			</Pressable>
		</View>
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
		width: "100%",
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
	sectionContainer: {
		backgroundColor: "white",
		padding: 20,
		marginTop: 10,
	},
	sectionContainerEnd: {
		backgroundColor: "white",
		padding: 5,
		marginTop: 10,
		paddingBottom: 80,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333",
		marginBottom: 10,
	},
	contactContainer: {
		marginTop: 10,
	},
	contactItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	contactText: {
		fontSize: 16,
		color: "#333",
		marginLeft: 10,
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
	addCommentContainer: {
		backgroundColor: "#ffffff",
		padding: 15,
		borderRadius: 10,
		marginBottom: 20,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	commentInput: {
		backgroundColor: "#f9f9f9",
		borderRadius: 8,
		padding: 15,
		marginBottom: 15,
		fontSize: 14,
		color: "#333",
	},
	ratingInput: {
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 15,
	},
	addButton: {
		backgroundColor: "#069E2D",
		paddingVertical: 12,
		borderRadius: 8,
		alignItems: "center",
	},
	addButtonText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 16,
	},
	commentItem: {
		padding: 10,
		backgroundColor: "#f9f9f9",
		borderRadius: 5,
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
		fontSize: 16,
		fontWeight: "bold",
		color: "#333",
	},
	commentText: {
		fontSize: 14,
		color: "#333",
		marginTop: 5,
	},
	timestamp: {
		fontSize: 12,
		color: "#666",
		marginTop: 5,
		textAlign: "right",
	},
	goBackButton: {
		position: "absolute",
		top: 20,
		left: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 5,
		elevation: 3,
	},
	errorText: {
		color: "#333",
		fontSize: 18,
	},
});
