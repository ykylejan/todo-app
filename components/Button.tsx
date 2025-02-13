import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ label, className, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`w-full h-14 bg-[#8875FF] items-center justify-center rounded-md ${className}`}
        >
            <Text className="font-afacadsemibold text-white">{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;
