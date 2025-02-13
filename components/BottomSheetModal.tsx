import React, { useEffect, useRef, useState } from "react";
import { Modal, View, Animated, TouchableWithoutFeedback } from "react-native";

interface BottomSheetModalProps {
    visible: boolean;
    onClose: () => void;
    title: string;
    children?: React.ReactNode;
}

const BottomSheetModal = ({
    visible,
    onClose,
    children,
}: BottomSheetModalProps) => {
    const slideAnim = useRef(new Animated.Value(300)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        if (visible) {
            setIsVisible(true);
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 300,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                setIsVisible(false);
            });
        }
    }, [visible]);

    if (!isVisible) return null;

    return (
        <Modal
            transparent
            visible={isVisible}
            statusBarTranslucent
            hardwareAccelerated
            onRequestClose={onClose}
        >
            <Animated.View
                className="flex-1 bg-black/50  justify-end"
                style={{
                    opacity: fadeAnim,
                }}
            >
                <TouchableWithoutFeedback onPress={onClose}>
                    <View className="absolute top-0 bottom-0 left-0 right-0" />
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{ transform: [{ translateY: slideAnim }] }}
                    className="px-10 pt-9 bg-[#363636] rounded-t-3xl w-full"
                >
                    <View className={`${children ? "" : "p-20"}`}>
                        {children}
                    </View>
                </Animated.View>
            </Animated.View>
        </Modal>
    );
};

export default BottomSheetModal;
