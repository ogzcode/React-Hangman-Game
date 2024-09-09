import { Check } from "lucide-react-native";
import * as CheckboxPrimitive from '@rn-primitives/checkbox';

import { useTailwind } from "../context/useTailwind";
import { useMemo } from "react";

const severityStyle = {
    info: `bg-blue-500 border-blue-500`,
    success: `bg-green-500 border-green-500`,
    warning: `bg-amber-500 border-amber-500`,
    error: `bg-red-500 border-red-500`,
    default: `bg-gray-800 border-gray-800`,
};

export const Checkbox = ({ checked = false, onChange = () => { }, style = {}, disabled = false, severity = "default" }) => {
    const { tw } = useTailwind();

    const checkboxStyle = useMemo(() => {
        return [
            tw.style(`flex-row justify-center items-center w-6 h-6 rounded border`,
                checked ? `${severityStyle[severity]}` : `bg-white border-gray-400`,
                disabled && `bg-gray-300 border-gray-300`
            ),
            style,
        ];
    }, [style, tw, checked, severity]);

    return (

        <CheckboxPrimitive.Root
            style={checkboxStyle}
            checked={checked}
            onCheckedChange={value => onChange(value)}
            disabled={disabled}
        >
            <CheckboxPrimitive.Indicator>
                {
                    checked && <Check size={20} style={tw`text-white`} />
                }
            </CheckboxPrimitive.Indicator>

        </CheckboxPrimitive.Root>
    );
}