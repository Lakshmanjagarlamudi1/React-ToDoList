import React,{ useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import todoReducer from './context/reducer';
import {TodoContext} from './context/TodoContext'
import TodoForm from './Components/TodoForm';
import Todo from "./Components/Todo";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer,[])
  console.log(todos)
  return(
    <TodoContext.Provider value = {{todos, dispatch}}>
      <Container>
        <h1>This todo app with context API</h1>
        <Todo/>
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  )
}
export default App