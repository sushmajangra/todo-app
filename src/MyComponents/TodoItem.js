import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
        <h4>{todo.title}</h4>
        <h5>{todo.desc}</h5>
        <button className="btn btn-primary " onClick={ ()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

