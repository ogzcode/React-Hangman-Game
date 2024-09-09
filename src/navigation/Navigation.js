import { NavigationContainer } from "@react-navigation/native";
import { DrawerStack } from "./DrawerStack";

export const Navigation = () => {
    return (
        <NavigationContainer>
            <DrawerStack />
        </NavigationContainer>
    );
}