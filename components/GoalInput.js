import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";

const GoalInput = ({ addGoalHandler, isModalVisible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button
          title="Add Goal"
          onPress={() => addGoalHandler(enteredGoalText)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default GoalInput;
