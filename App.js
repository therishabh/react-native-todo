import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Madhav!!!!!!!!!</Text>
      <Text
        style={{
          color: "red",
          margin: 10,
          borderWidth: 1,
          borderColor: "red",
          borderStyle: "solid",
          padding: 10,
        }}
      >
        Hello Rishabh!!!!!!!!!!
      </Text>
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
});
