import * as AvatarPrimitive from '@rn-primitives/avatar';
import { useTailwind } from "../context/useTailwind";
import { Text } from 'react-native';

export const Avatar = ({ imageURI, alt = "", fallback= "", fallbackColor= "", style }) => {
    const { tw } = useTailwind();

    return (
        <AvatarPrimitive.Root alt={alt} style={[tw`relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full`, style]}>
            <AvatarPrimitive.Image source={{ uri: imageURI }} style={tw`aspect-square h-full w-full`}/>
            <AvatarPrimitive.Fallback style={[tw`flex h-full w-full items-center justify-center rounded-full bg-gray-200`, fallbackColor]}>
                <Text>{fallback || "AV"}</Text>
            </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
    )
}