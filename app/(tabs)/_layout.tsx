import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#1bcf43",
				tabBarStyle: {
					backgroundColor: "#ffffff",
					borderTopColor: "#1bcf43",
					borderTopWidth: 1,
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

			/>
			<Tabs.Screen
				name="profile"

			/>
		</Tabs>
	);
}

export default _layout

