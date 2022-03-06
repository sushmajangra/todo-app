import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("im deleting the values", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }));
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "Go to the mall",
      description: "you need to go to the mall"
    },
    {
      sno:2,
      title: "Go to the gym",
      description: "you should go to gym"
    },
    {
      sno:3,
      title: "Go to the park",
      description: "go to the park for a walk"
    },
    {
      sno:4,
      title: "Shopping",
      description: "lets go for shopping"
    },
  ]);
  return (
    <>
      <Header title = "My Todos List"/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
