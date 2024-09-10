import { createDrawerNavigator } from '@react-navigation/drawer';
import { AccordionScreen } from '../screens/AccordionScreen';
import { CheckboxScreen } from '../screens/CheckboxScreen';
import { AlertDialogScreen } from '../screens/AlertDialog';

const Drawer = createDrawerNavigator();


export function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName='Accordion'>
      <Drawer.Screen name="Accordion" component={AccordionScreen} />
      <Drawer.Screen name="AlertDialog" component={AlertDialogScreen} />
      <Drawer.Screen name="Checkbox" component={CheckboxScreen} />
    </Drawer.Navigator>
  );
}