import React, { useState } from 'react';
import {
  SafeAreaView,
  Button,
  ScrollView,
  FlatList,
  RefreshControl
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [ courseGoal, setCourseGoal] = useState([]);
  const [ add, setAdd ] = useState(false)

  const addGoalHandler = (goal) => {
    setCourseGoal(currGoal => [
      ...currGoal, 
      { id: Math.random().toString(), val: goal }
    ]);
    setAdd(false)
  };

  const delGoalHandler = (goalId) => {
    setCourseGoal(currGoal => {
      return currGoal.filter((goal) => goal.id !== goalId)
    });
  };

  const cancelGoalHandler = (goal) => {
    setAdd(false)
  };

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <ScrollView style={{paddingLeft: 50}}>
        {courseGoal.map((goals) => (
          <View key={goals} style={style.dispItem}>
            <Text>{goals}</Text>
          </View>
        ))}
      </ScrollView> */}

      <Button title='+' onPress={() => setAdd(true)} />
      <GoalInput visible={add} onAdd={addGoalHandler} onCancel={cancelGoalHandler}/>
      <FlatList
        style={{ paddingLeft: 60 }}
        keyExtractor={item => item.id}
        data={courseGoal}
        renderItem={item => (
          <GoalItem
            title={item.item.val} 
            onDelete={delGoalHandler.bind(this, item.item.id)}
            id={item.item.id}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor='red'
            colors={['red']}
          />
        }
      />
    </SafeAreaView>
  );
};

export default App;
 