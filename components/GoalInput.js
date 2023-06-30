import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";

const GoalInput = ({ addGoalHandler, isModalVisible, closeModalHandler }) => {
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
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => addGoalHandler(enteredGoalText)}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flex: 1,
    padding:16
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 10,
    marginTop:20
  },
  button: {
    width: "30%",
  },
});

export default GoalInput;
