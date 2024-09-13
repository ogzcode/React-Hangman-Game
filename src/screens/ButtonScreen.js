import { Button } from "../ui/Button";
import { View, Text } from "react-native";
import { useTailwind } from "../context/useTailwind";
import { Plus } from "lucide-react-native";


export const ButtonScreen = () => {
    const { tw } = useTailwind();

    return (
        <View style={tw`bg-white p-8 h-full flex-row justify-between items-start flex-wrap gap-4`}>
            <Button label="Default" />
            <Button label="Primary" variant="primary" />
            <Button label="Success" variant="success" />
            <Button label="Danger" variant="danger" />
            <Button label="Warning" variant="warning" />
            <Button label="Default" outline={false} />
            <Button label="Primary" variant="primary" outline={false} />
            <Button label="Success" variant="success" outline={false} />
            <Button label="Danger" variant="danger" outline={false} />
            <Button label="Warning" variant="warning" outline={false} />
            <Button label="Primary" icon={<Plus style={tw`text-gray-600`} />} />
            <Button label="Primary" variant="primary" icon={<Plus style={tw`text-blue-500`} />} />
            <Button label="Success" variant="success" icon={<Plus style={tw`text-green-500`} />} />
            <Button label="Danger" variant="danger" icon={<Plus style={tw`text-red-500`} />} />
            <Button label="Warning" variant="warning" icon={<Plus style={tw`text-yellow-500`} />} />
            <Button label="Primary" outline={false} icon={<Plus style={tw`text-white`} />} />
            <Button label="Primary" variant="primary" outline={false} icon={<Plus style={tw`text-white`} />} />
            <Button label="Success" variant="success" outline={false} icon={<Plus style={tw`text-white`} />} />
            <Button label="Danger" variant="danger" outline={false} icon={<Plus style={tw`text-white`} />} />
            <Button label="Warning" variant="warning" outline={false} icon={<Plus style={tw`text-white`} />} />
        </View>
    );
}