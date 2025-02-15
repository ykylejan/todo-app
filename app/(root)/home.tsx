import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import Button from "@/components/Button";
import BottomSheetModal from "@/components/BottomSheetModal";
import Input from "@/components/Input";
import { Plus } from "lucide-react-native";
import TaskItem from "@/components/Home/TaskItem";

const initialTasks = [
    {
        id: 1,
        label: "Math Homework",
        sublabel: "Trigo",
        status: "Complete",
    },
    {
        id: 2,
        label: "MooManage",
        sublabel: "Fix Task Management",
        status: "Pending",
    },
];

const Home = () => {
    const [isAddTask, setIsAddTask] = useState(false);
    const [isPosses, setIsPosses] = useState(false);
    const [tasks, setTasks] = useState(initialTasks);

    const [taskLabel, setTaskLabel] = useState("");
    const [taskSublabel, setTaskSublabel] = useState("");

    const handleDeleteTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const handleAddTask = () => {
        if (taskLabel.trim() && taskSublabel.trim()) {
            const newTask = {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, 
                label: taskLabel,
                sublabel: taskSublabel,
                status: "Pending",
            };
            setTasks([...tasks, newTask]);
            setTaskLabel(""); 
            setTaskSublabel("");
            setIsAddTask(false); 
        }
    };

    return (
        <SafeAreaView className="px-6">
            <View className="flex-row w-full h-14 justify-between items-center mt-5">
                <TouchableOpacity
                    hitSlop={{ top: 24, bottom: 24, left: 24, right: 24 }}
                    onPress={() => setIsAddTask(true)}
                >
                    <Plus size={24} color={"white"} />
                </TouchableOpacity>

                <View>
                    <Text className="font-afacadsemibold text-3xl text-white">
                        Task
                    </Text>
                </View>

                <View className="w-12 h-12 rounded-full bg-[#8875FF] justify-center items-center">
                    <Text className="font-afacadsemibold text-xl text-white">
                        K
                    </Text>
                </View>
            </View>

            {tasks.length <= 0 ? (
                <View className="items-center mt-20">
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
                    <Input
                        placeholder="Search your tasks..."
                        className="mb-5"
                    />

                    <Text className="text-2xl font-afacadsemibold text-white mb-4">
                        Current
                    </Text>

                    <ScrollView>
                        {tasks.map((task) => (
                            <TaskItem
                                key={task.id}
                                id={task.id}
                                label={task.label}
                                sublabel={task.sublabel}
                                status={task.status}
                                onDelete={handleDeleteTask}
                            />
                        ))}
                    </ScrollView>
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

                <Input
                    placeholder="Do math homework"
                    value={taskLabel}
                    onChangeText={setTaskLabel}
                />

                <TextInput
                    placeholder="Description"
                    placeholderTextColor="#535353"
                    multiline
                    numberOfLines={3}
                    value={taskSublabel}
                    onChangeText={setTaskSublabel}
                    className="pb-24 mt-3 text-white"
                />

                <Button
                    onPress={handleAddTask}
                    label="Save"
                    className="mb-10"
                />
            </BottomSheetModal>
        </SafeAreaView>
    );
};

export default Home;
