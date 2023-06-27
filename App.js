import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder="Your course goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputContainer : {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  TextInput: {
    borderWidth:1,
    borderColor: '#ccc',
    width: '80%',
    paddingLeft: 10
  }
})