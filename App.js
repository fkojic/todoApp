import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/header";
import ToDoItem from "./components/todoItem";
import AddToDo from "./components/addTodo";
import Sandbox from "./components/sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Nesto 1', key: 1},
    {text: 'Nesto 2', key: 2},
    {text: 'Nesto 3', key: 3},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key);
    });
  } 

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos,
        ]
      });
    } else {
      Alert.alert("Ups...", "Todo must be over 3 chars long!", [
        {text: "Okeej", onPress: () => console.log("alert closed")}
      ])
    }
  }

  return (
    // <Sandbox /> test view for flex

    <TouchableWithoutFeedback
      onPress={() => {
          Keyboard.dismiss();
          console.log("keyboard dismiss");
      }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddToDo submitHandler={ submitHandler } />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.key}
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
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
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },

});
