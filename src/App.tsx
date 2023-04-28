import React, { useState, useEffect } from 'react'
import './App.css'

// import components
import CreateTodo from './components/createTodo';
import TodoList from './components/todoList';

const App = () => {

  // state variables
  const [inputText, setInputText] = useState(""); // must declare type ex: string
  const [todos, setTodos] = useState([]); // state type array
  const [taskState, setTaskState] = useState("all"); // type is string with default as 'all'
  const [filteredTodos, setFilteredTodos] = useState([]); // state type array

  // run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  // use effect
  useEffect(() => {
    // save list to local storage
    saveLocalTodos();
    // run filter handler every time the todo list is updated or the task filter type is updated
    filterHandler();
  }, [todos, taskState]); // '[]' = only when page renders. add state inside to call useeffect on those state changes

  // functions
  const filterHandler = () => {
    switch(taskState) {
      case 'completed':
        // filter the tasks for ones that have completed and add them to the filtered list
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        // filter the uncompleted ones
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  // load from local (firefox sucks ass)
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([])); // add empty array
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Personal Task List</h1>
      </header>
      <CreateTodo
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText} 
        setTaskState={setTaskState} />
      <TodoList
        todos={todos}
        setTodos={setTodos} 
        filteredTodos={filteredTodos} />
    </div>
  )
}

export default App
