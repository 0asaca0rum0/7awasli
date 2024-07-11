import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { PaperProvider } from "react-native-paper";
import { I18nextProvider } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useColorScheme } from "@/hooks/useColorScheme";
import i18next from "./services/i18next";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const LANG_KEY = "appLanguage";
const defaultLang = "en";

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});
	const [langLoaded, setLangLoaded] = useState(false);

	useEffect(() => {
		const loadLang = async () => {
			try {
				const savedLang = await AsyncStorage.getItem("appLanguage");
				const initialLang = savedLang || defaultLang;
				i18next.changeLanguage(initialLang);
				setLangLoaded(true);
			} catch (error) {
				console.error("Error loading language:", error);
				// Handle error (e.g., fallback to default language)
				setLangLoaded(true); // Continue with app loading
			}
		};
		loadLang();
	}, []);

	useEffect(() => {
		if (loaded && langLoaded) {
			SplashScreen.hideAsync().catch((error) => {
				console.error("Failed to hide splash screen:", error);
			});
		}
	}, [loaded, langLoaded]);

	if (!loaded || !langLoaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<I18nextProvider i18n={i18next}>
				<PaperProvider>
					<Stack initialRouteName="(login)/index">
						<Stack.Screen
							name="(signup)/index"
							options={{ headerShown: false, statusBarTranslucent: true }}
						/>
						<Stack.Screen
							name="(login)/index"
							options={{ headerShown: false, statusBarTranslucent: true }}
						/>
						<Stack.Screen
							name="(login)/forgot"
							options={{
								headerShown: true,
								headerTransparent: true,
								title: "",
								statusBarTranslucent: true,
								headerTintColor: "#1bcf43",
							}}
						/>
						<Stack.Screen
							name="(tabs)"
							options={{ headerShown: false, statusBarTranslucent: true }}
						/>
						<Stack.Screen name="+not-found" />
						<Stack.Screen
							name="profile/[id]"
							options={{
								headerShown: false,
								statusBarTranslucent: true,
							}}
						/>
						<Stack.Screen
							name="chat/[id]"
							options={{
								headerShown: false,
								statusBarTranslucent: true,
							}}
						/>
					</Stack>
				</PaperProvider>
			</I18nextProvider>
		</ThemeProvider>
	);
}
