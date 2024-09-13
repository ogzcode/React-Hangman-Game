import { Badge } from "../ui/Badge";
import { View, Text } from "react-native";
import { useTailwind } from "../context/useTailwind";


export const BadgeScreen = () => {
    const { tw } = useTailwind();

    return (
        <View style={tw`bg-white p-8 h-full flex-row justify-between items-start gap-4`}>
            <Badge variant="info" style={tw`w-10`}>
                <Text style={tw`text-white text-xs`}>Info</Text>
            </Badge>
            <Badge variant="success" style={tw`w-16`}>
                <Text style={tw`text-white text-xs`}>Success</Text>
            </Badge>
            <Badge variant="danger" style={tw`w-16`}>
                <Text style={tw`text-white text-xs`}>Danger</Text>
            </Badge>
            <Badge variant="warning" style={tw`w-16`}>
                <Text style={tw`text-white text-xs`}>Warning</Text>
            </Badge>

        </View>
    );
}