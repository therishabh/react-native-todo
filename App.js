import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((previousState) => {
      return [...previousState, {
        id : Math.random().toString(),
        text: enteredGoalText
      }];
    });
  };

  const deleteGoalHandler = (goalId) => {
    const filteredGoal = courseGoals.filter(val => val.id != goalId);
    setCourseGoals(filteredGoal)
  }

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endModalHandler = () => {
    setModalIsVisible(false)
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="red" onPress={startAddGoalHandler}/>
      <GoalInput addGoalHandler={addGoalHandler} isModalVisible={modalIsVisible} closeModalHandler={endModalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.id
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item} deleteGoal={deleteGoalHandler} />
            );
          }}
        />
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
    flex: 1,
  },
  
  goalContainer: {
    flex: 6,
  },
  
});
