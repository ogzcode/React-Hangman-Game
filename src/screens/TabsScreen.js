import { Tabs, TabContent } from "../ui/Tabs";
import { Text, View } from 'react-native';
import { useState } from "react";
import { useTailwind } from "../context/useTailwind";

export const TabsScreen = () => {
    const [value, setValue] = useState(0);
    const { tw } = useTailwind();

    return (
        <View style={tw`p-5 h-full bg-white`}>
            <Tabs tabList={[
                { label: 'Tab 1', value: 0 },
                { label: 'Tab 2', value: 1 },
                { label: 'Tab 3', value: 2 },
            ]} value={value} onChange={setValue}>
                <View style={tw`mt-4`}>
                    <TabContent value={0}>
                        <Text>Tab 1 Content</Text>
                    </TabContent>
                    <TabContent value={1}>
                        <Text>Tab 2 Content</Text>
                    </TabContent>
                    <TabContent value={2}>
                        <Text>Tab 3 Content</Text>
                    </TabContent>
                </View>
            </Tabs>
        </View>
    )
}