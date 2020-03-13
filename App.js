import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'make coffee', key: '2' },
    { text: 'drink coffee', key: '3' }
  ]);
  const deleteTodo = (key) => {
    setTodos((todos) => {
      return todos.filter(todo => todo.key !== key)
    })
  }
  const pressHandler = (key) => {
    Alert.alert('Are you sure you want to delete?', '', [
      {text: 'Yes', onPress: () => deleteTodo(key)},
      {text: 'No'},
    ])
  }
  
  const addTodo = (todo) => {
    if(todo.length > 3) {
      setTodos((todos) => {
        return [...todos, { text: todo, key: (todos.length + 1).toString() }]
      })
    } else {
      Alert.alert('Is that really something you need to do?')
    }
  }
  console.log(todos)
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo
            addTodo={addTodo}/>
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem 
                item={item}
                pressHandler={pressHandler}/>
            )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 40
  }
  
});
