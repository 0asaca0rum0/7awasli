import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "#1bcf43" }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
                    
				}}
			/>

			<Tabs.Screen
				name="map"
				options={{
					title: "workers",
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "profile",
				}}
			/>
		</Tabs>
	);
}

export default _layout

