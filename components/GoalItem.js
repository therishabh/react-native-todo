import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ item, deleteGoal }) => {
  return (
    <Pressable onPress={() => deleteGoal(item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "#fff",
  },
});

export default GoalItem;
