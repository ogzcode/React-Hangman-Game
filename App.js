
import { TailwindProvider } from "./src/context/useTailwind";
import { StyleSheet, SafeAreaView } from "react-native";

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});