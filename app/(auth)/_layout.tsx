import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="welcome"
                options={{
                    headerShown: false,
                    animation: "default",
                    contentStyle: { backgroundColor: "#121212" },
                }}
            />
            <Stack.Screen
                name="login"
                options={{
                    headerShown: false,
                    animation: "default",
                    contentStyle: { backgroundColor: "#121212" },
                }}
            />
            <Stack.Screen
                name="signup"
                options={{
                    headerShown: false,
                    animation: "default",
                    contentStyle: { backgroundColor: "#121212" },
                }}
            />
        </Stack>
    );
};

export default Layout;
