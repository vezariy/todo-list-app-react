import React, { useState, useEffect } from 'react';
import './App.css';
// Components
import Form from './components/Form';
import TodoList from './components/TodoList';
// import Todo from './components/Todo';

function App() {
//  States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
// useEffet
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default: 
        setFilteredTodos(todos);
        break;
      }
  }
  // Save to local
  // const saveLocalTodos = () => {
  //   if (localStorage.getItem('todos') === null) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   } else {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
      inputText = {inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText = {setInputText}
      setStatus={setStatus}
      />
      
      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
