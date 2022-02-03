import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./src/constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, task: "First todo", completed: false },
    { id: 2, task: "Second todo", completed: false },
  ]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    saveToDB();
  }, [todos]);

  const ListItem = ({ todo }) => {
    // console.log(todo);
    return (
      <View style={styles.listItem}>
        <View style={styles.todoContainer}>
          <Text
            style={[
              styles.todoText,
              { textDecorationLine: todo.completed ? "line-through" : "none" },
            ]}
          >
            {todo?.task}
          </Text>
        </View>
        {!todo?.completed && (
          <TouchableOpacity
            style={[styles.actionIcon]}
            onPress={() => todoComplete(todo?.id)}
          >
            <Icon name="done" size={20} color={colors.text} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => todoDeleted(todo?.id)}
          style={[styles.actionIcon, { backgroundColor: "tomato" }]}
        >
          <Icon name="delete" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>
    );
  };

  const saveToDB = async todos => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem("todos", stringifyTodos);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };


  //Getting data from user device
  const getData = async () => {
    try {
      const todosDB = await AsyncStorage.getItem("todos");
      return todos != null ? JSON.parse(todosDB) : null;
    } catch (e) {
      // error reading value
       console.log(e);
    }
    console.log("first");
  };


  const addTodo = () => {
    // console.log(input);
    if (input == "") {
      Alert.alert("Error", "Please input todo");
    } else {
      const newTodo = {
        id: Math.random(),
        task: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const todoComplete = (todoId) => {
    // console.log(todoId);
    const newTodos = todos.map((item) => {
      if (item.id == todoId) {
        return { ...item, completed: true };
      }
      return item;
    });
    setTodos(newTodos);
  };
  const todoDeleted = (todoId) => {
    // console.log(todoId);
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos(newTodos);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo App</Text>
      </View>
      <View>
        <FlatList
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          data={todos}
          renderItem={({ item }) => <ListItem todo={item} />}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Todos"
            value={input}
            onChangeText={(text) => setInput(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.btnContainer}>
            <Icon name="add" size={22} color={colors.text} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: colors.text,
    elevation: 40,
    height: 50,
    marginVertical: 20,
    marginRight: 10,
    borderRadius: 30,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  btnContainer: {
    backgroundColor: colors.btnColor,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  listItem: {
    padding: 15,
    elevation: 20,
    flexDirection: "row",
    borderRadius: 7,
    marginVertical: 10,
    backgroundColor: colors.text,
  },
  todoText: {
    color: colors.bg,
    fontSize: 20,
    fontWeight: "bold",
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 3,
  },
  todoContainer: {
    flex: 1,
  },
});
