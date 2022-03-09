import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let mystyle = {
        minheight: "70vh"
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h3 className="text-center">Todos List</h3>

            {props.todos.length===0? "No Todos to display" :

            props.todos.map((todo)=>{
                return  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
        }
            

        </div>
    )
}
