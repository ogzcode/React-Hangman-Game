import * as AccordionPrimitive from '@rn-primitives/accordion';
import { Pressable, Text } from 'react-native';
import { useTailwind } from '../context/useTailwind';
import Animated, {
    FadeIn,
    FadeOutUp,
    LayoutAnimationConfig,
    LinearTransition,
    useAnimatedStyle,
    useDerivedValue,
    withTiming
} from 'react-native-reanimated';
import { ChevronDown } from 'lucide-react-native';

export const Accordion = ({ items, type = "multiple", style = "" }) => {
    const { tw } = useTailwind();
    return (
        <LayoutAnimationConfig skipEntering>
            <AccordionPrimitive.Root type={type} collapsible style={tw`w-full ${style}`}>
                {items.map((item) => (
                    <AccordionItem key={item.value} item={item} />
                ))}
            </AccordionPrimitive.Root>
        </LayoutAnimationConfig>
    )
}

const AccordionItem = ({ item }) => {
    const { tw } = useTailwind();
    return (
        <Animated.View layout={LinearTransition.duration(200)} style={tw`overflow-hidden`}>
            <AccordionPrimitive.Item key={item.value} value={item.value} style={tw`mb-4 w-full`}>
                <AccordionTrigger label={item.label} />
                <InnnerContent content={item.content} />
            </AccordionPrimitive.Item>
        </Animated.View>
    )
}

const AccordionTrigger = ({ label = "", children = null }) => {
    const { isExpanded } = AccordionPrimitive.useItemContext();
    const { tw } = useTailwind();

    const progress = useDerivedValue(() =>
        isExpanded ? withTiming(1, { duration: 250 }) : withTiming(0, { duration: 250 })
    );

    const chevronStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${progress.value * 180}deg` }]
    }))

    const triggerStyle = isExpanded ? "bg-gray-200 rounded-tl rounded-tr" : "bg-gray-100 rounded";

    return (
        <AccordionPrimitive.Trigger style={tw`flex flex-row justify-between p-4 w-full ${triggerStyle}`} asChild>
            <Pressable>
                <>
                    {label !== "" && <Text style={tw`text-base font-medium text-gray-700`}>{label}</Text>}
                    {children}
                </>
                <Animated.View style={chevronStyle}>
                    <ChevronDown size={24} style={tw`text-gray-500`} />
                </Animated.View>
            </Pressable>
        </AccordionPrimitive.Trigger>
    )

}

const InnnerContent = ({ content = "", children = null }) => {
    const { tw } = useTailwind();
    return (
        <AccordionPrimitive.Content style={tw`overflow-hidden p-4 bg-gray-100 rounded-bl rounded-br`}>
            <Animated.View
                entering={FadeIn}
                exiting={FadeOutUp.duration(200)}
            >
                {
                    content !== "" && <Text style={tw`text-sm text-gray-500 tracking-normal`}>{content}</Text>
                }
                {children}
            </Animated.View>
        </AccordionPrimitive.Content>

    )
}