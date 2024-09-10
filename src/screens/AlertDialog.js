import { AlertDialog, AlertDialogContent, AlertDialogFooter } from "../ui/AlertDialog";
import { useState } from "react";
import { useTailwind } from "../context/useTailwind";
import { Text, TouchableOpacity, View, Pressable } from "react-native";

export const AlertDialogScreen = () => {
    const { tw } = useTailwind();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <TouchableOpacity onPress={() => setIsOpen(true)} style={tw`border border-gray-600 p-2 rounded `}>
                <Text style={tw`text-base text-gray-700`}>Open Alert Dialog</Text>
            </TouchableOpacity>
            <AlertDialog isOpen={isOpen}>
                <AlertDialogContent title="Alert">
                    <Text style={tw`text-base`}>Are you sure you want to delete this item?</Text>
                </AlertDialogContent>
                <AlertDialogFooter>
                    <Pressable onPress={() => setIsOpen(false)} style={tw`border border-gray-500 px-4 py-2 rounded-md mr-4`}>
                        <Text style={tw`text-gray-600`}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={() => setIsOpen(false)} style={tw`border border-red-500 bg-red-500 px-4 py-2 rounded-md`}>
                        <Text style={tw`text-white`}>Delete</Text>
                    </Pressable>
                </AlertDialogFooter>
            </AlertDialog>
        </View>
    );
}