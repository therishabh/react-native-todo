import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals((previousState) => {
      return [...previousState, enteredGoalText]
    })
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder="Your course goal" onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
       {courseGoals.map(courseGoal => {
        return (
          <Text>{courseGoal}</Text>
        )
       })}
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
    flex:1
  },
  inputContainer : {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1
  },
  TextInput: {
    borderWidth:1,
    borderColor: '#ccc',
    width: '80%',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  goalContainer : {
    flex:6
  }
})