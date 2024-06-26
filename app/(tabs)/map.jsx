import {
	View,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";

import React, { useEffect, useState, useRef } from "react";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

export default function Workers() {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const mapRef = useRef(null);
	const isScreenFocused = useIsFocused();

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);

	useEffect(() => {
		if (location && mapRef.current && isScreenFocused ) {
			mapRef.current.animateToRegion({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}, 1000); // 1000ms animation duration
		}
	}, [location,isScreenFocused]);

	let text = "Waiting..";
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<MapView
					ref={mapRef}
					style={{ height: "100%", width: "100%" }}
					showsUserLocation={true}
					showsMyLocationButton={false}
					initialRegion={{
						latitude: location ? location.coords.latitude : 37.78825,
						longitude: location ? location.coords.longitude : -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				></MapView>
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
						placeholderTextColor={"#EEEEEE"}
						placeholder="Search"
					/>
					<Ionicons
						name="search"
						size={24}
						color={isFocused ? "#1bcf43" : "grey"}
						style={{ position: "absolute", right: 25, bottom: 32 }}
					/>
				</View>
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
		elevation: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 4,
			height: 2,
		},
		shadowOpacity: 0.24,
		shadowRadius: 3.84,
		backgroundColor: "#ffffff",
		borderRadius: 100,
		marginTop: 10,
		marginBottom: 10,
		width: "100%",
		height: 50,
		paddingLeft: 20,
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
