import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import {AddToDo} from './MyComponents/AddToDo';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("im deleting the values", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }));
  }

  const addTodo = (title, desc)=>{
    console.log("i am adding the todo", title, desc);
    let sno;
    if(todos.length == 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc 
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "Go to the mall",
      desc: "you need to go to the mall"
    },
    {
      sno:2,
      title: "Go to the gym",
      desc: "you should go to gym"
    },
    {
      sno:3,
      title: "Go to the park",
      desc: "go to the park for a walk"
    },
    {
      sno:4,
      title: "Shopping",
      desc: "lets go for shopping"
    },
  ]);
  return (
    <>
      <Header title = "My Todos List"/>
      <AddToDo addToDo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
