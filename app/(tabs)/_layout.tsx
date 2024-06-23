import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Tabs } from "expo-router";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import { act } from "react-test-renderer";
import MyTabBar from "@/components/support/tabbar";
const Tab = createMaterialBottomTabNavigator();

const _layout = () => {
	return (
		<Tabs
			tabBar={props => <MyTabBar {...props}/> }
			screenOptions={{
					
				tabBarLabelStyle: {
					fontSize: 10,
					fontWeight: "bold",
					
				},
				tabBarShowLabel: false,
				tabBarActiveTintColor: "white",
				tabBarInactiveTintColor: "grey",
				tabBarActiveBackgroundColor: "#17B139",
				
				tabBarItemStyle: {
					
					borderTopLeftRadius: 26,
					borderTopRightRadius: 26,
					borderBottomLeftRadius: 26,
					borderBottomRightRadius: 26,
					width: "10%",
					
				},
				tabBarStyle: {
					
					left: "2.5%",
					right: "2.5%",

					width: "95%",
					backgroundColor: "#ffffff",
					borderTopWidth: 0,
					marginBottom: 8,
					position: "absolute",
					borderTopLeftRadius: 26,
					borderTopRightRadius: 26,
					borderBottomLeftRadius: 26,
					borderBottomRightRadius: 26,
				},
			}}
		>
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
