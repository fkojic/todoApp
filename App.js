import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from "./components/header";
import ToDoItem from "./components/todoItem";

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

  return (
    <View style={styles.container}>
      {/* header */}
      <Header style={styles.header} />
      <View style={styles.content}>
        {/* to form */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },

});
