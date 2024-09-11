import * as TabsPrimitive from '@rn-primitives/tabs';
import { useTailwind } from "../context/useTailwind";
import { Text } from 'react-native';
import { useMemo } from 'react';

export const Tabs = ({ tabList = [], value = null, onChange = () => { }, children, bottomBorder = false }) => {
    const { tw } = useTailwind();

    const defaultStyle = "h-12 items-center justify-center flex-row p-1.5"
    const bottomBorderStyle = bottomBorder ? "" : "bg-gray-200 rounded-md"

    return (
        <TabsPrimitive.Root value={value} onValueChange={value => onChange(value)}>
            <TabsPrimitive.List
                style={tw`${defaultStyle} ${bottomBorderStyle}`}
            >
                {tabList.map((tab, index) => (
                    <TabTrigger key={index} tab={tab} isBottomBorder={bottomBorder}/>
                ))}
            </TabsPrimitive.List>
            {children}
        </TabsPrimitive.Root>
    )
}

const TabTrigger = ({ tab, isBottomBorder }) => {
    const { tw } = useTailwind();
    const { value } = TabsPrimitive.useRootContext();
    const activeStyle = useMemo(() => {
        return value === tab.value ? isBottomBorder ? tw`border-b-2 border-gray-500` : tw`bg-white rounded-sm` : tw`text-gray-500`
    }, [value, tab.value])

    return (
        <TabsPrimitive.Trigger value={tab.value} disabled={tab?.disabled}
            style={[tw`flex-1 items-center justify-center px-3 py-1.5 text-sm`,
            activeStyle,
            ]}
        >
            <Text style={tw`text-base text-gray-500`}>{tab.label}</Text>
        </TabsPrimitive.Trigger>
    )
}

export const TabContent = ({ value, children }) => {
    const { tw } = useTailwind();
    return (
        <TabsPrimitive.Content value={value}
            style={tw``}
        >
            {children}
        </TabsPrimitive.Content>
    )
}