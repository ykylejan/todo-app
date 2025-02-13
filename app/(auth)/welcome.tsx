import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Button from "@/components/Button";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Welcome = () => {
    return (
        <SafeAreaView className="px-6 py-20 flex-1">
            <View className="gap-y-5 mt-10 flex-1">
                <Text className="font-afacadsemibold text-4xl text-center text-white">
                    Welcome to UpTodo
                </Text>
                <Text className="font-afacad text-base text-center text-neutral-400">
                    Please login you your account or create a new account to
                    continue
                </Text>
            </View>

            <Button
                onPress={() => {
                    router.push("/(auth)/login");
                }}
                label="Login"
                className="mb-7"
            />
            <Button
                onPress={() => {
                    router.push("/(auth)/signup");
                }}
                label="Signup"
                className="bg-transparent border-2 border-[#8875FF]"
            />
            <StatusBar style="light" />
        </SafeAreaView>
    );
};

export default Welcome;
