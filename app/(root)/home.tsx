import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { icons, images } from "@/constants";
import Button from "@/components/Button";
import BottomSheetModal from "@/components/BottomSheetModal";
import Input from "@/components/Input";
import { Plus } from "lucide-react-native";


const Home = () => {
    const [isAddTask, setIsAddTask] = useState(false);
    const [isPosses, setIsPosses] = useState(false);
    return (
        <SafeAreaView className="px-6">
            <View className="flex-row w-full h-14 justify-between items-center mt-5 mb-20">
                <TouchableOpacity
                  hitSlop={{ top: 24, bottom: 24, left: 24, right: 24 }}
                  onPress={() => setIsAddTask(true)}
                >
                  {/* <Image source={icons.outline} className="w-12 h-12" /> */}
                  <Plus size={24} color={"white"} />
                </TouchableOpacity>

                {/* center part */}
                <View className="">
                    <Text className="font-afacadsemibold text-3xl text-white">
                        Task
                    </Text>
                </View>

                {/* right-side part */}
                <View className="w-12 h-12 rounded-full bg-[#979797] justify-center items-center">
                    <Text className="font-afacadsemibold text-xl">K</Text>
                </View>
            </View>

            {!isPosses ? (
                <View className="items-center">
                    <Image source={images.emptytasks} className="w-72 h-72" />
                    <Text className="font-afacad text-xl text-white">
                        What do you want to do today?
                    </Text>
                    <Text className="font-afacad text-lg text-neutral-500 mb-10">
                        Tap + to add your tasks
                    </Text>
                    <Button
                        onPress={() => setIsAddTask(true)}
                        label="Add Task +"
                        className="w-32 h-11"
                    />
                </View>
            ) : (
                <View>
                    <Text className="text-white text-3xl">
                        Tasks here is things
                    </Text>
                </View>
            )}

            <BottomSheetModal
                title="Add Task"
                visible={isAddTask}
                onClose={() => setIsAddTask(false)}
            >
                <Text className="text-2xl font-afacad text-white">
                    Add Task
                </Text>
                <Input placeholder="Do math homework" />

                <TextInput
                    placeholder="Description"
                    placeholderTextColor="#535353"
                    multiline
                    numberOfLines={3}
                    className="pb-24 mt-3 text-white"
                />

                <Button
                    onPress={() => {
                        setIsPosses(true);
                        setIsAddTask(false);
                    }}
                    label="Save"
                    className="mb-10"
                />
            </BottomSheetModal>
        </SafeAreaView>
    );
};

export default Home;
