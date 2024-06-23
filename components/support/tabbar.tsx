import index from "@/app/(tabs)";
import { AntDesign, FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import TabbarButton from "@/components/support/TabbarButton";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
type Icons = {
	[key: string]:
	React.ComponentProps<typeof AntDesign>["name"] |
	React.ComponentProps<typeof FontAwesome>["name"] |
	React.ComponentProps<typeof FontAwesome5>["name"] |
	React.ComponentProps<typeof FontAwesome6>["name"]
	;
};

const icons: Icons = {
	index: (props: any) => (
		<AntDesign name="home" size={24} color="black" {...props} />
	),
	map: (props: any) => (
		<FontAwesome5 name="map" size={24} color="black" {...props} />
	),
	profile: (props: any) => (
		<FontAwesome5 name="user" size={24} color="black" {...props} />
	),
	settings: (props: any) => (
		<FontAwesome6 name="cog" size={24} color="black" {...props} />
	),
};
export default function MyTabBar({ state, descriptors, navigation }: any) {
	return (
		<View style={styles.tabBar}>
			{state.routes.map((route: any, index: any) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

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
					return ( <TabbarButton
												key={route.key}
												isFocused={isFocused}
												routename={route.name}
												color={isFocused ? "#1bcf43" : "black"}
												label={label}
						
						onPress={onPress}
						onLongPress={onLongPress}
						> 

					<Text
							style={{
								color: isFocused ? "#1bcf43" : "black",
								flexDirection: "column",
							}}
						>
							{" "}
							{label}
						</Text>
						</TabbarButton>

			)}
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		flexDirection: "row",
		backgroundColor: "#fff",
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
