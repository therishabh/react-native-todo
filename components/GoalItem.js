import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ item, deleteGoal }) => {
  return (
    <Pressable onPress={() => deleteGoal(item.id)} style={({pressed}) => pressed && styles.pressedItem }>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
},
goalItemText: {
      padding: 8,
    color: "#fff",
  },
  pressedItem : {
    opacity: 0.5
  }
});

export default GoalItem;
