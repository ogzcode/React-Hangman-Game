import { View } from "react-native";
import { Input } from "../ui/Input";
import { useState } from "react";
import { useTailwind } from "../context/useTailwind";

export const InputScreen = () => {
    const [text, setText] = useState('');
    const { tw } = useTailwind();

    return (
        <View style={tw`p-5 h-full bg-white`}>
            <Input
                placeholder='Type something...'
                onChangeText={setText}
                value={text}
            />
        </View>
    );
}