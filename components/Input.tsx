import { View, Text, TextInput } from "react-native";
import React from "react";

const Input = ({
    label,
    placeholder,
    placeholderTextColor = "#535353",
    secureTextEntry,
    value,
    className,
}: InputProps) => {
    return (
        <View>
            <Text className="font-thin text-white mb-2">{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                className={`bg-[#1D1D1D] border border-[#979797] text-white h-14 rounded-md px-4 ${className}`}
                value={value}
            />
        </View>
    );
};

export default Input;
