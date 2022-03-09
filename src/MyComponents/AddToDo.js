import React, { useState } from 'react'

export const AddToDo = ({addToDo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert ("fields are empty");
        }
        addToDo(title, desc);

    }
    return (
        <div className='container my-4'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title"><b>Title</b></label>
                    <input type="text" className="form-control" value={title} onChange={(e) => {setTitle(e.target.value)}} id="title" aria-describedby="emailHelp" placeholder="Enter to do item" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc"><b>Description</b></label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => {setDesc(e.target.value)}} id="desc" placeholder="Enter description" />
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}
