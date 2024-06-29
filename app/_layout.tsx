import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { PaperProvider } from "react-native-paper";

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {

    return null;
  }

  return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
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
						options={{ headerShown: false, statusBarTranslucent: true }}
					/>
				</Stack>
			</PaperProvider>
		</ThemeProvider>
	);
}
