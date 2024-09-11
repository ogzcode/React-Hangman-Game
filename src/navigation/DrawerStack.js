import { createDrawerNavigator } from '@react-navigation/drawer';
import { AccordionScreen } from '../screens/AccordionScreen';
import { CheckboxScreen } from '../screens/CheckboxScreen';
import { AlertDialogScreen } from '../screens/AlertDialog';
import { InputScreen } from '../screens/InputScreen';
import { TextareaScreen } from '../screens/TextareaScreen';
import { TabsScreen } from '../screens/TabsScreen';

const Drawer = createDrawerNavigator();


export function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName='Accordion'>
      <Drawer.Screen name="Accordion" component={AccordionScreen} />
      <Drawer.Screen name="AlertDialog" component={AlertDialogScreen} />
      <Drawer.Screen name="Checkbox" component={CheckboxScreen} />
      <Drawer.Screen name="Input" component={InputScreen} />
      <Drawer.Screen name="Tabs" component={TabsScreen} />
      <Drawer.Screen name="Textarea" component={TextareaScreen} />
    </Drawer.Navigator>
  );
}