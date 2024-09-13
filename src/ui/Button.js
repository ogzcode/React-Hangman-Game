import { Pressable, Text } from "react-native";
import { useTailwind } from "../context/useTailwind";


export const Button = ({ label, variant = "default", outline = true, style, icon = null, onPress }) => {
    const { tw } = useTailwind();

    const variants = {
        default: "gray",
        primary: "blue",
        success: "green",
        danger: "red",
        warning: "yellow",
    }

    return (
        <Pressable style={[tw`rounded-md p-2 flex-row justify-center items-center gap-2`,
            outline ? tw`border border-${variants[variant]}-500`
            : tw`bg-${variants[variant]}-500`,
            style]}
            onPress={onPress}>
            {icon}
            <Text style={outline ? tw`text-${variants[variant]}-500` : tw`text-white`}>{label}</Text>
        </Pressable>
    );
}