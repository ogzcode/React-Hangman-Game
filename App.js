import 'react-native-gesture-handler';

import { TailwindProvider } from "./src/context/useTailwind";
import { StyleSheet, SafeAreaView } from "react-native";
import { Navigation } from './src/navigation/Navigation';


import { PortalHost } from '@rn-primitives/portal';

export default function App() {

  return (
    <TailwindProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
      <PortalHost name="root" />
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});