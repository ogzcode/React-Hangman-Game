import React from 'react';
import { Pressable, Text, StyleProp, ViewStyle } from "react-native";
import { useTailwind } from "../context/useTailwind";

interface ButtonProps {
    label: string;
    variant?: "default" | "primary" | "success" | "danger" | "warning";
    outline?: boolean;
    style?: StyleProp<ViewStyle>;
    icon?: React.ReactNode;
    onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, variant = "default", outline = true, style, icon = null, onPress }) => {
    const { tw } = useTailwind();

    const variants: { [key: string]: string } = {
        default: "gray",
        primary: "blue",
        success: "green",
        danger: "red",
        warning: "yellow",
    }

    return (
        <Pressable style={[tw`rounded-md p-2 flex-row justify-center items-center gap-2`,
        //@ts-ignore
        outline ? tw`border border-${variants[variant]}-500` : tw`bg-${variants[variant]}-500`,
            style]}
            onPress={onPress}>
            {icon}
            <Text style={
                //@ts-ignore
                outline ? tw`text-${variants[variant]}-500` : tw`text-white`
            }>
                {label}
            </Text>
        </Pressable>
    );
}