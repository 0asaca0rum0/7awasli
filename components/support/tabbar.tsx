import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
	AntDesign,
	FontAwesome,
	FontAwesome5,
	FontAwesome6,
} from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import TabbarButton from "@/components/support/TabbarButton";


const routeLabels: { [key: string]: string } = {
	index: "home",
	map: "map",
	profile: "profile",
	workers: "workers",
};

export default function MyTabBar({ state, descriptors, navigation }:any) {
	const { t } = useTranslation();

	return (
		<View style={styles.tabBar}>
			{state.routes.map((route:any, index:any) => {
				const { options } = descriptors[route.key];
				const labelKey = routeLabels[route.name];
				const label = t(labelKey);

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name, route.params);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TabbarButton
						key={route.key}
						isFocused={isFocused}
						routename={route.name}
						color={isFocused ? "#069E2D" : "black"}
						label={label}
						onPress={onPress}
						onLongPress={onLongPress}
					>
						<Text
							style={{
								color: isFocused ? "#069E2D" : "black",
								flexDirection: "column",
							}}
						>
							{label}
						</Text>
					</TabbarButton>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		flexDirection: "row",
		backgroundColor: "#FAFAFA",
		position: "absolute",
		bottom: 20,
		width: "95%",
		left: "2.5%",
		right: "2.5%",
		borderRadius: 28,
		borderCurve: "continuous",
		height: 60,
		justifyContent: "space-around",
		alignItems: "center",
		paddingHorizontal: 20,
		shadowColor: "#000",
		shadowOffset: { width: 8, height: 4 },
		shadowOpacity: 0.35,
		shadowRadius: 4.65,
		elevation: 8,
		padding: 8,
	},
});
