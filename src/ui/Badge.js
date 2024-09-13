import { View } from "react-native";
import { useTailwind } from "../context/useTailwind";

export const Badge = ({ children, variant="default", style }) => {
    const { tw } = useTailwind();

    const variants = {
        default: "bg-gray-500",
        info: "bg-blue-500",
        success: "bg-green-500",
        danger: "bg-red-500",
        warning: "bg-yellow-500",
    }

    return (
        <View style={[tw`rounded-full ${variants[variant]} p-1 justify-center items-center`, style]}>
            {children}
        </View>
    );
}
