import React from "react";
import { StyleProp, View } from "react-native";
import { useTailwind } from "../context/useTailwind";
import { FC } from "react";


interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "info" | "success" | "danger" | "warning";
    style?: StyleProp<any>;
}

export const Badge: FC<BadgeProps> = ({ children, variant = "default", style }) => {
    const { tw } = useTailwind();

    const variants = {
        default: "bg-gray-500",
        info: "bg-blue-500",
        success: "bg-green-500",
        danger: "bg-red-500",
        warning: "bg-yellow-500",
    }

    return (
        <View style={[
            //@ts-ignore
            tw`rounded-full p-1 justify-center items-center ${variants[variant]}`,
            style]}
        >
            {children}
        </View>
    );
}
