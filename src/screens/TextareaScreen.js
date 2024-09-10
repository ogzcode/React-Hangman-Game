import { Textarea } from "../ui/Textarea";
import { View } from "react-native";
import { useTailwind } from "../context/useTailwind";

export const TextareaScreen = () => {
    const { tw } = useTailwind();
    return (
        <View style={tw`p-5 h-full bg-white`}>
            <Textarea style={tw`w-full`} />
        </View>
    );
}