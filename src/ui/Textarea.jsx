import { TextInput } from "react-native";
import { useTailwind } from "../context/useTailwind";
import { useState } from "react";

export const Textarea = ({ multiline = true, numberOfLines = 4, style, ...props }) => {
    const { tw } = useTailwind();
    const [isFocused, setIsFocused] = useState(false);


    return <TextInput
        cursorColor="#1f2937"
        style={[tw`rounded-md border bg-white p-3 text-base text-gray-800`,
            style,
        isFocused && tw`border-gray-600`,
        !isFocused && tw`border-gray-400`
        ]} {...props}
        multiline={multiline}
        textAlignVertical='top'
        numberOfLines={numberOfLines}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
    />;
}