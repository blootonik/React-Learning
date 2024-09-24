// import React, { useReducer, useRef } from 'react';
import styles from "./App.module.css";
import AppName from "./components/AppName";
import InputBox from "./components/InputBox";
import TodoListBox from "./components/TodoListBox";
import {TodoItemContextProvider} from "./store/TodoItemsContext";

function App() {
  return (
    <TodoItemContextProvider>
      <div className={styles.todoContainer}>
        <AppName />
        <InputBox />
        <TodoListBox />
      </div>
    </TodoItemContextProvider>
  );
}

export default App;
