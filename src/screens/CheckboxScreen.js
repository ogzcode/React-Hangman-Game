import { Checkbox } from "../ui/Checkbox";
import React from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from "../context/useTailwind";

export const CheckboxScreen = () => {
    const { tw } = useTailwind();
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={tw`bg-white p-8 h-full`}>
            <Text style={tw`mb-1 text-base text-gray-800`}>Checkbox</Text>
            <Checkbox checked={checked} onChange={setChecked} />

            <Text style={tw`mb-1 mt-4 text-base text-gray-800`}>Checkbox with severity</Text>
            <View style={tw`flex flex-row gap-4`}>
                <Checkbox checked={checked} onChange={setChecked} severity="info" />
                <Checkbox checked={checked} onChange={setChecked} severity="success" />
                <Checkbox checked={checked} onChange={setChecked} severity="warning" />
                <Checkbox checked={checked} onChange={setChecked} severity="error" />
            </View>

            <Text style={tw`mb-1 mt-4 text-base text-gray-800`}>Disabled Checkbox</Text>
            <Checkbox checked={checked} onChange={setChecked} disabled={true} />
        </View>
    );
}