import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [goal, setEnteredGoal] = useState('');

  const goalInputHandler = goal => {
    setEnteredGoal(goal);
  };

  const addGoalHandler = () => {
    props.onAdd(goal)
    setEnteredGoal('');
  };
  
  return (
    <Modal visible={props.visible} animationType='fade' > 
      <View style={styles.body}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <Button title="Cancel" color='red' onPress={props.onCancel}/> 
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet .create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    marginBottom: 30,
    padding: 10,
    width: '70%'
  },
});

export default GoalInput;
