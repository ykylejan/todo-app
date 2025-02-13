import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import { router } from "expo-router";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login = () => {
    return (
        <SafeAreaView className="px-6 flex-1">
            <View className="flex-1">
                <View className="flex-row w-full h-14 justify-between items-center mt-5">
                    <TouchableOpacity
                        hitSlop={{ top: 24, bottom: 24, left: 24, right: 24 }}
                        onPress={() => {
                            router.back();
                        }}
                    >
                        <Image source={icons.chevronleft} className="w-6 h-6" />
                    </TouchableOpacity>

                    {/* center part */}
                    <View className=""></View>

                    {/* right-side part */}
                    <View className=""></View>
                </View>
                <Text className="text-5xl font-afacadsemibold text-white mt-10">
                    Login
                </Text>

                <View className="mt-14">
                    <Input
                        label="Username"
                        placeholder="Enter your Username"
                        className="mb-7"
                    />
                    <Input
                        label="Password"
                        placeholder="••••••••••••"
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <View className="mb-20">
                <Button
                    onPress={() => router.push("/(root)/home")}
                    label="Login"
                    className="mb-16"
                />

                <View className="flex-row justify-center">
                    <Text className="font-afacad text-neutral-500">
                        Don't have an account?{" "}
                    </Text>
                    <TouchableOpacity
                        onPress={() => router.push("/(auth)/signup")}
                        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                    >
                        <Text className="font-afacadbold text-neutral-400">
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
