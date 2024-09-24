import React, { useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import Animated, { interpolate, useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { useTailwind } from '../context/useTailwind';

interface FloatingInputProps extends TextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    type?: string;
    cursorColor?: string;
    style?: object;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({ label, value, onChangeText, type = "text", cursorColor = "#f43f5e", style, ...props }) => {
    const { tw } = useTailwind();
    const [isFocused, setIsFocused] = useState(false);
    const labelPosition = useSharedValue(value ? 1 : 0);

    const handleFocus = () => {
        setIsFocused(true);
        labelPosition.value = withSpring(1, { duration: 200 });
    };

    const handleBlur = () => {
        if (!value) {
            setIsFocused(false);
            labelPosition.value = withSpring(0, { duration: 200 });
        }
    };

    const labelStyle = useAnimatedStyle(() => {
        return {
            top: interpolate(labelPosition.value, [0, 1], [12, -24]), 
            fontSize: interpolate(labelPosition.value, [0, 1], [16, 14]), 
        };
    });

    return (
        <View style={[tw`border-2 border-gray-500 text-lg rounded w-full relative`, style]}>
            <Animated.Text style={[
                //@ts-ignore
                tw`absolute left-1 ${isFocused ? "text-slate-500" : "text-slate-400"}`, labelStyle]}>
                {label}
            </Animated.Text>
            <TextInput
                style={[tw`h-12 p-2 text-lg`]}
                value={value}
                onChangeText={onChangeText}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...props}
            />
        </View>
    );
};
