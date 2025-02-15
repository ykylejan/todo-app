import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { icons } from "@/constants";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Signup = () => {
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
                    Sign Up
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
                        className="mb-7"
                    />
                    <Input
                        label="Confirm Password"
                        placeholder="••••••••••••"
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <View className="mb-20">
                <Button
                    onPress={() => router.push("/(auth)/login")}
                    label="Register"
                    className="mb-16"
                />

                <View className="flex-row justify-center">
                    <Text className="font-afacad text-neutral-500">
                        Already have an account?{" "}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            router.back();
                        }}
                        hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                    >
                        <Text className="font-afacadbold text-neutral-400">
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Signup;
