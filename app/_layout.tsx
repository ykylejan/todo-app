import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        Afacad: require("../assets/fonts/Afacad-Regular.ttf"),
        "Afacad-Semibold": require("../assets/fonts/Afacad-SemiBold.ttf"),
        "Afacad-Bold": require("../assets/fonts/Afacad-Bold.ttf"),
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
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "#121212" },
                }}
            />
            <Stack.Screen
                name="(auth)"
                options={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "#121212" },
                }}
            />
            <Stack.Screen
                name="(root)"
                options={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "#121212" },
                }}
            />
            <Stack.Screen name="+not-found" />
        </Stack>
    );
}
