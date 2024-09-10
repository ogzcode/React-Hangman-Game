import React from "react";
import { View, Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useTailwind } from "../context/useTailwind";

export const AlertDialog = ({ isOpen = false, children }) => {
    const { tw } = useTailwind();

    if (!isOpen) return null;

    return (
        <Animated.View
            style={tw`z-50 flex justify-center items-center p-4 absolute inset-0`}
            entering={FadeIn.duration(150)}
            exiting={FadeOut.duration(150)}
        >
            <View style={tw`bg-gray-600/80 inset-0 absolute`} />
            <Animated.View
                style={tw`bg-white p-6 rounded-lg shadow max-w-xl w-full`}
                entering={FadeIn.duration(150)}
                exiting={FadeOut.duration(150)}
            >
                {children}
            </Animated.View>
        </Animated.View>
    );
};

export const AlertDialogContent = ({ children, title = "" }) => {
    const { tw } = useTailwind();
    return (
        <View style={tw`mb-4`}>
            {title !== "" && <Text style={tw`text-lg font-semibold mb-2 text-gray-800`}>{title}</Text>}
            {children}
        </View>
    );
};

export const AlertDialogFooter = ({ children }) => {
    const { tw } = useTailwind();
    return (
        <View style={tw`flex flex-row justify-end`}>
            {children}
        </View>
    );
};
