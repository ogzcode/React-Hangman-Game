import { FloatingInput } from "../ui/FloatingInput";
import { View } from "react-native";
import { useState } from "react";
import { useTailwind } from "../context/useTailwind";

export const FloatingInputScreen = () => {
    const [text, setText] = useState('');
    const { tw } = useTailwind();

    return (
        <View style={tw`p-5 h-full bg-white gap-10`}>
            <FloatingInput
                onChangeText={setText}
                value={text}
                label="Floating Input"
            />
            <FloatingInput
                onChangeText={setText}
                value={text}
                label="Floating Input"
            />
        </View>
    );
}