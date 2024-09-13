import { Avatar } from "../ui/Avatar";
import { View } from "react-native";
import React from 'react';
import { useTailwind } from "../context/useTailwind";

export const AvatarScreen = () => {
    const { tw } = useTailwind();

    return (
        <View style={tw`bg-white p-8 h-full`}>
            <Avatar imageURI="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="John Doe"
                fallback="JD"
                fallbackColor={tw`bg-blue-500`}
            />
        </View>
    );
}