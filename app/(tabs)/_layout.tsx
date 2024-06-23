import React from "react";
import { Tabs } from "expo-router";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import MyTabBar from "@/components/support/tabbar";
const Tab = createMaterialBottomTabNavigator();

const _layout = () => {
	return (
		<Tabs tabBar={(props) => <MyTabBar {...props} />}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",

					headerTitleAlign: "center",
					headerShown: false,
				}}
			/>

			<Tabs.Screen
				name="map"
				options={{
					title: "Map",
					headerShown: false,

					headerTitleAlign: "center",
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",

					headerTitleAlign: "center",
				}}
			/>
		</Tabs>
	);
};

export default _layout;
