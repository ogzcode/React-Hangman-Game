import React from 'react';
import { View, Text } from 'react-native';
import { Accordion } from '../ui/Accordion';

export const AccordionScreen = () => {
    const items = [
        {
            label: "Item 1",
            content: "Content 1",
            value: "item-1"
        },
        {
            label: "Item 2",
            content: "Content 2",
            value: "item-2"
        },
        {
            label: "Item 3",
            content: "Content 3",
            value: "item-3"
        }
    ]
    return (
        <View style={{ backgroundColor: "white", flex: 1, padding: 20 }}>
            <Accordion items={items} />
        </View>
    );
}