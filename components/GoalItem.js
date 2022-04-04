import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id) }>
      <View style={styles.dispItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>  
  );
};

const styles = StyleSheet.create({
  dispItem: {
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    width: '80%',
    marginTop: 50,
    paddingBottom: 15,
    paddingTop: 10,
    alignItems: 'center',
  }
});

export default GoalItem;
