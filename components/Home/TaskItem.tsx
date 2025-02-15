import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Trash2 } from "lucide-react-native";
import { icons } from "@/constants";

interface TaskItemProps {
    id: number;
    label: string;
    sublabel: string;
    status: string;
    onDelete: (id: number) => void;
}

const TaskItem = ({ id, label, sublabel, status, onDelete }: TaskItemProps) => {
    const [isStatus, setIsStatus] = useState(status);

    const toggleStatus = () => {
        setIsStatus((prevStatus) =>
            prevStatus === "Pending" ? "Complete" : "Pending"
        );
    };

    return (
        <TouchableOpacity onPress={toggleStatus}>
            <View className="w-full h-24 bg-[#363636] rounded-md p-5 flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                    
                    <TouchableOpacity
                        onPress={() => onDelete(id)}
                        hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                    >
                        <Image source={icons.trash} className="w-6 h-6" />
                    </TouchableOpacity>

                    <View className="ml-5">
                        <Text className="font-afacad text-lg text-white mb-1">
                            {label}
                        </Text>
                        <Text
                            className="font-afacad text-sm text-neutral-400"
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {sublabel.length > 25
                                ? `${sublabel.substring(0, 25)}...`
                                : sublabel}
                        </Text>
                    </View>
                </View>

                {/* Task Status */}
                <View
                    className={`w-28 h-8 ${
                        isStatus === "Pending" ? "bg-[#FF9D00]" : "bg-[#00B087]"
                    } flex-row justify-center items-center rounded-lg`}
                >
                    <View
                        className={`w-4 h-4 rounded-full ${
                            isStatus === "Pending"
                                ? "bg-[#FFE4B9]"
                                : "bg-[#A6E7D8]"
                        }`}
                    />
                    <Text
                        className={`text-sm ${
                            isStatus === "Pending"
                                ? "text-[#FFE4B9]"
                                : "text-[#A6E7D8]"
                        }`}
                    >
                        {isStatus}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default TaskItem;
