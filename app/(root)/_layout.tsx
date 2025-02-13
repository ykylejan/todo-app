import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="home"
                options={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "#121212" },
                }}
            />
        </Stack>
    );
};

export default Layout;
