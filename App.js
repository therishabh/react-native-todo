import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello Madhav!!!!!!!!!</Text>
      <Text style={styles.dummyText}>Hello Rishabh!!!!!!!!!!</Text>
      <Button title="Click Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    color: "red",
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    borderStyle: "solid",
    padding: 10,
  },
});
